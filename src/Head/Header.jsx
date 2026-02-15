import "./Header.css"
import ticket from "/ticket.png"
import searchIcon from "/search.png"
import vietnamIcon from "/vietnamIcon.webp"
import englishIcon from "/englishIcon.png"
import { useEffect, useRef, useState} from "react"
import Login from "../Popup/Login"
import Register from "../Popup/Register"
import SearchContent from "./SearchContent"
import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode";
import axios from "axios"
export default function Header({Setlanguage,Language}) {
  const [token, setToken] = useState(()=>localStorage.getItem("token") || null);
  const [refresh,_setRefresh]=useState(()=>localStorage.getItem("refreshtoken")||null);
  const loginRef=useRef();
  const regisRef=useRef();
  const formRef=useRef();
  const inputRef=useRef();
  const[showForm,setShowForm]=useState(false);
  const[querysearch,setQuerySearch]=useState("");
  const [avatarurl, setAvatarUrl] = useState("");
  const[username,setUserName]=useState("")
  useEffect(()=>{
    if(token){
     axios.get("http://localhost:3000/users",{
      headers:{Authorization:`Bearer ${token}`}
    }).then((res)=>{setAvatarUrl(res.data.avatarUrl);
        setUserName(res.data.username)
    })}
  },[token])
 useEffect(() => {
  function handleClickOutside(event) {
    const formNode = formRef.current;

    if (
      formNode &&
      !formNode.contains(event.target) && // click không nằm trong form
      inputRef &&
      !inputRef.current.contains(event.target) // click không nằm trong input
    ) {
      setShowForm(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
   function Logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
    window.location.href="/"
   }
   useEffect(()=>{
    if(!token||!refresh) return;
        const decode = jwtDecode(token);
        const decoderefresh=jwtDecode(refresh);
        if(decoderefresh.exp*1000<Date.now()){
          Logout()
        }
        if(decode.exp*1000<Date.now()){
          axios.post("http://localhost:3000/auth/refresh",{
          refreshToken:refresh
          }
        ).then(res=>{
          localStorage.setItem("token", res.data.access_token); 
          setToken(res.data.access_token);
        }).catch(err=>{
          console.error("Refresh lỗi:",err.response?.data||err.message);
          Logout()
        })
        }
   },[token,refresh])
    return (
        <>
            <header>
                <nav>
               <Link to="/" className="link"> <h1>ticketbox</h1></Link>
                    <div className="search-container">
                           <img id="searchIcon" src={searchIcon} alt="search" /> 
                        
                        <input ref={inputRef} onChange={(e)=>setQuerySearch(e.target.value)} value={querysearch} onClick={()=>setShowForm(!showForm)} type="text" placeholder={Language==="vi"?"Bạn tìm gì hôm nay":"What re you looking for?"}/>
                        <span ></span>
                    <Link to={`/MoreConTent?title=${encodeURIComponent(querysearch)||""}`}> <button >{Language==="vi"?"Tìm kiếm":"Search"}</button></Link>  
                    </div>
                   <div style={{display:"flex",gap:"20px",marginRight:"20px"}}>
                     <div className="eventdiv">  <button className="eventCreate">{Language==="vi"?"Tạo sự kiện":"Create event"}</button></div>
                     
                  <Link to='/MyTicket' className="linkmyticket" >
                      <div className="MyTicket">
                   <img src={ticket} alt="Myticket" />
              <button>{Language==="vi"?"Vé của tôi":"My ticket"}</button>
                    </div>
                    </Link>  
                   
               {token?
               <div className="account">
                      <img src={!avatarurl?"https://static.ticketbox.vn/avatar.png": `http://localhost:3000/${avatarurl}`} alt="Avatar" className="headavatar"></img>
                     <div className="accounttext">{!username 
            ? (Language === "vi" ? "Tài khoản" : "Account") 
                : (Language === "vi" ? `Xin chào, ${username}` : `Konnichiwa, ${username}`)}
                           </div> 
                   <div className="accountform" hidden>
                <Link className="MyLink" to="/MyTicket">    <button >
                <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 2a2 2 0 012-2h16a2 2 0 012 2v3.172a1 1 0 01-.293.707L19 6.586a2 2 0 000 2.828l.707.707a1 1 0 01.293.707V14a2 2 0 01-2 2H2a2 2 0 01-2-2v-3.172a1 1 0 01.293-.707L1 9.414a2 2 0 000-2.828l-.707-.707A1 1 0 010 5.172V2zm18 0H2v2.757l.414.415a4 4 0 010 5.656L2 11.243V14h16v-2.757l-.414-.415a4 4 0 010-5.656L18 4.757V2zM6 6.25a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3.5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" fill="#38383D"></path></svg>
              <span>Vé của tôi</span> 
                    </button> </Link>    
                <Link to='/Account' className="MyLink">     <button>
                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1113.81 5.499 6.013 6.013 0 00-2.905-3.75 4 4 0 10-5.811 0A6.013 6.013 0 004.19 15.5 7.973 7.973 0 012 10zm4 6.93A7.963 7.963 0 0010 18c1.457 0 2.823-.39 4-1.07a4 4 0 00-8 0zM10 7a2 2 0 100 4 2 2 0 000-4z" fill="#38383D"></path></svg>   
               <span>Tài khoản của tôi</span>  
                    </button></Link> 
                    <button onClick={Logout}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a1 1 0 001 1h11.586l-4.293 4.293a1 1 0 001.414 1.414l5.999-5.999.012-.012A.995.995 0 0020 10a.997.997 0 00-.294-.708l-5.999-6a1 1 0 10-1.414 1.415L16.586 9H5a1 1 0 00-1 1z" fill="#38383D"></path><path d="M5 19a1 1 0 00-1-1H2V2h2a1 1 0 100-2H1a1 1 0 00-1 1v18a1 1 0 001 1h3a1 1 0 001-1z" fill="#38383D"></path></svg>
                    <span>Đăng xuất</span>
                    </button>
                    </div>        
                     </div>
                     :(<div className="Login">
                      <button onClick={()=>loginRef.current.showModal()}>{Language==="vi"?'Đăng nhập':'Login'}</button>
                     <span></span>
                     <button onClick={()=>loginRef.current.showModal()}>{Language==="vi"?'Đăng ký':'Register'}</button>    
                     </div>)}      
                    
                    <Login setToken={setToken} ref={loginRef} registerRef={regisRef}/>
                    <Register  setToken={setToken} ref={regisRef} loginRef={loginRef}/>
                    
                    <div className="Language">
                {Language==="vi"? <img src={vietnamIcon} alt="Vietnam" />: <img src={englishIcon} alt="English" />}   
                    <button>▼</button>
                    <div className="Choose" hidden>
                    <button onClick={()=>Setlanguage("vi")}>
                      <img src={vietnamIcon} alt="Vietnam" />
                      <span>Tiếng việt</span>
                    </button>
                    <button onClick={()=>Setlanguage("en")}>
                        <img src={englishIcon} alt="English" />
                       <span>English</span>
                        </button>
                    </div>
                    </div>
                </div>   
                 
           {showForm&& <SearchContent ref={formRef} setShowForm={setShowForm}/> }                           
                </nav>
                
            </header>
        </>
    )
}