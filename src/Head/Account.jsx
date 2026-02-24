import axios from 'axios';
import './Account.css'
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../Context';
export default function Account(){
    const[preview,setPreview]=useState("")
    const [token,_setToken]=useState(()=>localStorage.getItem("token")||null)
    const [avatarurl, setAvatarUrl] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [name,setName]=useState("")
    const[phonenumber,setPhoneNumber]=useState("")
    const[datebirth,setDateBirth]=useState("")
    const[gender,setGender]=useState("")
    const Language=useContext(LanguageContext)

    
    useEffect(() => { 
      if (!token) return; axios .get("https://backend-pro-sirs.onrender.com/users", { 
      headers: { Authorization: `Bearer ${token}` }, })
       .then((res) => { 
        setAvatarUrl(res.data.avatarUrl||"");
        setPhoneNumber(res.data.phonenumber||""); 
        setName(res.data.username||"");
         setDateBirth(res.data.datebirth||"");
          setGender(res.data.gender)}) 
       .catch((err) => console.error("Lấy avatar lỗi:", err)); 
      }, [token]);
    const handleSelect=(e)=>{
     const file=e.target.files[0];
     if(file){
      setPreview(URL.createObjectURL(file));
      setSelectedFile(file)
     }
    }
   const handleFinish = async () => {
  const formData = new FormData();
  if(selectedFile){formData.append("avatar",selectedFile); }
 formData.append("username", name); 
 formData.append("phonenumber", phonenumber);
  formData.append("datebirth", datebirth);
   formData.append("gender", gender);
  try {
   const res= await axios.post("https://backend-pro-sirs.onrender.com/users/info",
     formData,
      {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Upload thành công:", res.data);
    window.location.href="/";
  } catch (err) {
    console.error("Upload lỗi:", err.response?.data || err.message);
  }
};
    return (
        <>
             <div className="Account">
                   <div className="MyProfile">{Language==="vi"?"Thông tin tài khoản":"My profile"}</div>
                   <div className='MyProfileInfo'>
                    <div className='AvatarUpload'>
        <img src={preview?preview:!avatarurl? "https://static.ticketbox.vn/avatar.png" : `https://backend-pro-sirs.onrender.com/${avatarurl}`} alt="Avatar" className="avatar"></img>
                    <input type="file" id="fileInput" hidden onChange={handleSelect}/>
<svg onClick={()=>document.getElementById('fileInput').click()} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='uploadFile'><g filter="url(#camera_svg__filter0_d_20942_2896)"><rect x="4.5" width="24" height="24" rx="12" fill="#2DC275" shapeRendering="crispEdges"></rect><g clipPath="url(#camera_svg__clip0_20942_2896)" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M21.833 7.333c.737 0 1.334.597 1.334 1.334v8c0 .736-.597 1.333-1.334 1.333H11.167a1.333 1.333 0 01-1.334-1.333v-8c0-.737.597-1.334 1.334-1.334h2.254l.114-.227A2 2 0 0115.325 6h2.251a2 2 0 011.873 1.298l.013.035h2.371zm0 9.334v-8H19a.667.667 0 01-.624-.433l-.176-.468a.667.667 0 00-.624-.433h-2.252a.667.667 0 00-.596.369l-.298.596a.667.667 0 01-.597.369h-2.666v8h10.666z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.333a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667zm-2.667 1.334a2.667 2.667 0 115.334 0 2.667 2.667 0 01-5.334 0z"></path><path d="M13.167 10a.667.667 0 11-1.334 0 .667.667 0 011.334 0z"></path></g></g><defs><clipPath id="camera_svg__clip0_20942_2896"><path fill="#fff" transform="translate(9.833 5.333)" d="M0 0h13.333v13.333H0z"></path></clipPath><filter id="camera_svg__filter0_d_20942_2896" x="0.5" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_20942_2896"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_20942_2896" result="shape"></feBlend></filter></defs></svg>
                   </div>
                <p>
                {Language==="vi"?"Cung cấp thông tin chính xác sẽ hỗ trợ bạn trong quá trình mua vé, hoặc khi cần xác thực vé":"Providing accurate info will support you in ticket booking or verification"}
                </p>
                <div className='inputForm'>
                    <div>
                <div className='Label'>{Language==="vi"?"Họ và tên":"Your name"}</div>
                <input value={name} onChange={(e)=>setName(e.target.value)} className='infoinput' type="text" placeholder='Nhập ở đây' />
                  </div>
                 
                 <div>
                <div className='Label'>{Language==="vi"?"Số điện thoại":"Phone number"}</div>
                <input value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)}  className='infoinput'type="text" placeholder='Nhập ở đây' />
                 </div>
                
                <div>
                  <div className='Label'>{Language==="vi"?"Ngày tháng năm sinh":"Date of birth"}</div>
                <input value={datebirth} onChange={(e)=>setDateBirth(e.target.value)} className='infoinput' type="text" placeholder='dd/mm/yyyy' />
                </div>
               
               <div className='GenderForm'>
                  <div className='Label'>{Language==="vi"?"Giới tính":"Gender"}</div>
                  <div className='GenderField'>
                <div className='Gender'><input checked={gender=="Male"} type="radio" name='gender' value="Male" onChange={(e)=>setGender(e.target.value)} /><span>Nam</span></div>
                <div className='Gender'><input checked={gender=="Female"}type="radio" name='gender' value="Female" onChange={(e)=>setGender(e.target.value)} /><span>Nữ</span></div>
                <div className='Gender'><input checked={gender=="Other"} type="radio" name='gender' value="Other" onChange={(e)=>setGender(e.target.value)}/><span>Không muốn tiết lộ</span></div>
               </div>
               </div>
               <div>
                 <button onClick={handleFinish} className='Finish'>Hoàn thành</button> 
               </div>
                </div>  
                   </div>
            </div>
        </>
    )
}