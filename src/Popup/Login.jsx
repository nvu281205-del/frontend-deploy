
import { useState } from 'react';
import './Login.css'
import axios from 'axios';
export default function Login({registerRef,ref}){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[validemail,setValidemail]=useState(true);
     const [etouched, setEtouched] = useState(false);
     const [emailError,setEmailError]=useState("");
     const [passwordError,setPasswordError]=useState("");
     const [ptouched,setPtouched]=useState(false);
     const isFormValid=validemail&&email!==""&&password!==""&&!passwordError&& !emailError;
     function handleClose(){
        ref.current.close();
     }
     function showModal(){
         ref.current.close();
        registerRef.current.showModal()
    }
    function handlePass(e){
         setPassword(e.target.value);
         setPasswordError("");
    }
    function handleEmail(e){
         const v=e.target.value;
        setEmail(v);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setValidemail(emailRegex.test(v));
        setEmailError("");
    }
const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
  const res= await axios.post('http://localhost:3000/auth/login',
         {email,password},
       { headers:{'Content-Type':'application/json'}} );
    ref.current.close();
    localStorage.setItem("token",res.data.access_token);
    localStorage.setItem("refreshtoken",res.data.refresh_token)
    window.location.reload();
    }catch(err){
        const msg=err.response?.data?.message;
        if(msg==="Email chưa đăng ký"){
            setEmailError(msg);
        }
       else if(msg==="Thông tin đăng nhập không chính xác"){
            setPasswordError(msg);
       }      
    } 
}
    const [show, setShow] = useState(false);
    return (
        <>
        <dialog ref={ref} className="loginDialog"> 
        <form method="dialog" onSubmit={handleSubmit}>  
            <div className='top'>
            <span>Đăng nhập</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" fill="none" className="sc-kpDqfm hZeYaj"><path fill="#FFD530" d="M75.538 76.358s-.678-12.34-9.182-25.508H21.221L21 57.5"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M75.538 76.358s-.678-12.34-9.182-25.508H21.221L21 57.5"></path><path fill="#FFD530" d="M23.903 49.471S18.77 29.948 10.172 28.843C1.168 27.683-.855 42.697 20 61"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M23.903 49.471S18.77 29.948 10.172 28.843C1.168 27.683-.855 42.697 20 61"></path><path fill="#FFD530" d="M66.071 56.529s2.975 7.218 2.972 14.13c-.004 9.717-2.827 13.444-4.248 17.078 0 0-.005 7.487-1.293 10.553-1.29 3.067-11.386 3.006-14.123 1.01-3.446-2.51-4.592-10.926-4.592-10.926H42.475s-.858 8.413-4.307 10.922c-2.74 1.991-13.04 2.043-14.326-1.026-1.286-3.069-.895-10.556-.895-10.556-1.417-3.636-4.416-7.365-4.411-17.085.004-6.909 2.987-14.125 2.987-14.125"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M66.071 56.529s2.975 7.218 2.972 14.13c-.004 9.717-2.827 13.444-4.248 17.078 0 0-.005 7.487-1.293 10.553-1.29 3.067-11.386 3.006-14.123 1.01-3.446-2.51-4.592-10.926-4.592-10.926H42.475s-.858 8.413-4.307 10.922c-2.74 1.991-13.04 2.043-14.326-1.026-1.286-3.069-.895-10.556-.895-10.556-1.417-3.636-4.416-7.365-4.411-17.085.004-6.909 2.987-14.125 2.987-14.125"></path><path fill="#fff" d="M43.788 82.767c8.075 0 14.62-8.33 14.62-18.604S51.863 45.56 43.788 45.56c-8.074 0-14.62 8.33-14.62 18.604 0 10.275 6.546 18.604 14.62 18.604Z"></path><path fill="#2DC275" d="M43.79 55.001C31.1 55.008 23.92 52.19 21.224 50.85v-3.123c2.477 1.188 10.662 4.526 22.568 4.52 11.905.006 20.088-3.332 22.567-4.52v3.123C63.662 52.19 56.48 55.008 43.791 55Z"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M43.79 55.001C31.1 55.008 23.92 52.19 21.224 50.85v-3.123c2.477 1.188 10.662 4.526 22.568 4.52 11.905.006 20.088-3.332 22.567-4.52v3.123C63.662 52.19 56.48 55.008 43.791 55"></path><path fill="#FFD530" stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="m46.44 58.62-1.41 1.41a1.753 1.753 0 0 1-2.48 0l-1.41-1.41a1.753 1.753 0 0 1 0-2.48l1.41-1.41a1.753 1.753 0 0 1 2.48 0l1.41 1.41a1.753 1.753 0 0 1 0 2.48Z"></path><path fill="#fff" d="M73.766 18.37C67.816 3.143 52.322 1.495 43.87 1.48h-.162c-8.453.015-23.945 1.663-29.898 16.89-7.636 19.537 7.512 29.359 7.512 29.359a54.56 54.56 0 0 0 22.466 4.52A54.692 54.692 0 0 0 56.125 51a54.642 54.642 0 0 0 10.13-3.272s15.148-9.822 7.511-29.359Z"></path><path fill="#FFD530" d="M43.789 10.268c7.625 0 4.25 7.74 5.064 11.777.816 4.036 2.954 2.384 13.241.702 9.804-1.604 12.719 11.666 12.972 12.74 1.331-4.482 1.492-10.186-1.218-17.117C67.859 3.045 52.202 1.475 43.788 1.48c-8.413-.005-24.07 1.565-30.059 16.89-2.71 6.929-2.549 12.635-1.218 17.117.253-1.071 3.169-14.342 12.972-12.74 10.287 1.684 12.427 3.334 13.241-.702.816-4.037-2.56-11.777 5.065-11.777Z"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M33.183 27.523s2.366 1.627 4.77.549c2.405-1.078 3.35-1.953 5.835-1.953 2.489.003 3.433.875 5.838 1.955 2.405 1.078 4.77-.547 4.77-.547"></path><path fill="#2DC275" stroke="#2A2D34" strokeMiterlimit="10" d="m46.697 22.845.034-.039c.795-.904.352-2.312-.816-2.612-.741-.192-1.543-.246-2.129-.249-.583 0-1.387.055-2.129.247-1.168.3-1.613 1.706-.818 2.61l.034.04c1.55 1.736 4.278 1.738 5.824.003Z"></path><path fill="#2A2D34" d="M32.41 19.945a.525.525 0 0 0-.506.651 2.804 2.804 0 0 0 5.456 0 .525.525 0 0 0-.507-.65H32.41ZM55.17 19.945c.339 0 .585.321.506.651a2.804 2.804 0 0 1-5.456 0 .525.525 0 0 1 .507-.65h4.443Z"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M66.336 47.729c-2.477 1.189-10.644 4.526-22.55 4.52-11.905-.007-20.07-3.33-22.547-4.52 0 0-15.148-9.822-7.512-29.359C19.718 3.045 35.375 1.475 43.789 1.48c8.413-.005 24.07 1.565 30.059 16.89 7.639 19.537-7.512 29.359-7.512 29.359Z"></path><path fill="#FFD530" d="M24.72 5.986s-4.64-2.066-7.983 1.1c-3.342 3.166-2.61 6.753-2.11 7.74.971 1.915 6.716 5.386 9.073 3.696 2.622-1.878.755-9.386.755-9.386"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M24.72 5.986s-4.64-2.066-7.983 1.1c-3.342 3.166-2.61 6.753-2.11 7.74.971 1.915 6.716 5.386 9.073 3.696 2.622-1.878.755-9.386.755-9.386"></path><path fill="#FFD530" d="M62.858 5.986s4.64-2.066 7.982 1.1c3.342 3.166 2.61 6.753 2.11 7.74-.971 1.915-6.716 5.386-9.073 3.696-2.621-1.878-.755-9.386-.755-9.386"></path><path stroke="#2A2D34" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M62.858 5.986s4.64-2.066 7.982 1.1c3.342 3.166 2.61 6.753 2.11 7.74-.971 1.915-6.716 5.386-9.073 3.696-2.621-1.878-.755-9.386-.755-9.386"></path></svg>
            <button onClick={handleClose} className='closebutton'> <span style={{fontSize:"14px"}}> ✖</span></button>
            </div> 
            <div className='between'>
            
             <div className='input'>
                  <div className='form-field'>  
                <div className={`form-input ${ email===""?etouched?"input-error":"":validemail?emailError?"input-error":"input-valid":"input-error"}`}>
            <input type="text" onBlur={()=>setEtouched(true)}  value={email} onChange={handleEmail}  placeholder='Nhập email của bạn'/>
           <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>   
            </div>
               <span className='form-error'>{etouched&&email===""?"Nhập email của bạn":!validemail?"Email không đúng định dạng":emailError||""}</span>
               </div> 
                
                <div className='form-field'>  
                 <div className={`form-input ${password===""?ptouched?"input-error":"":!passwordError?"input-valid":"input-error"}`}>
                <input type={show?'text':'password'} onBlur={()=>setPtouched(true)} value={password} placeholder='Nhập mật khẩu' onChange={handlePass} />
        {!show&&        <svg viewBox="64 64 896 896" onClick={()=>setShow(!show)} focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>}
            {show&&    <svg viewBox="64 64 896 896" onClick={()=>setShow(!show)} focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>}
                </div>
            <span className='form-error'>{ptouched&&password===""?"Nhập mật khẩu":passwordError||""}</span>    
                </div>
                <button type='submit' className={`loginbtn ${isFormValid?"enable":"disable"}`} disabled={!isFormValid} onClick={handleSubmit}>Tiếp tục</button>
                

             </div>  
            </div>
            <div className='bottom'>
                <span>Chưa có tài khoản?</span>
                <span className='register' onClick={showModal}>Tạo tài khoản ngay</span>
                <p>Bằng việc tiếp tục,bạn đã đọc và đồng ý với <b>Điều khoản sử dụng </b>
                    và <b>Chính sách bảo mật thông tin cá nhân </b>của TicketBox
                </p>
            </div>  

        </form>
        </dialog>
        </>
    )
}