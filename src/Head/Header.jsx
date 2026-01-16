import "./Header.css"
import ticket from "../assets/ticket.png"
import searchIcon from "../assets/search.png"
import vietnamIcon from "../assets/vietnamIcon.webp"
import englishIcon from "../assets/englishIcon.png"
import {useEffect, useRef, useState} from "react"
import Login from "../Popup/Login"
import Register from "../Popup/Register"
import SearchContent from "./SearchContent"
import { Link } from "react-router-dom"
export default function Header({Setlanguage,Language}) {
  const loginRef=useRef();
  const regisRef=useRef();
  const formRef=useRef()
  const[showForm,setShowForm]=useState(false);
  const[querysearch,setQuerySearch]=useState("");
   useEffect(() => { 
          function handleClickOutside(event) { 
          if (formRef.current && !formRef.current.contains(event.target)) {
          setShowForm(false);
       } }
  document.addEventListener("mousedown", handleClickOutside); 
  return () => {
       document.removeEventListener("mousedown", handleClickOutside);
      } }, []);
    return (
        <>
            <header>
                <nav>
                    <h1>ticketbox</h1>
                    <div className="search-container">
                             <img id="searchIcon" src={searchIcon} alt="search" />
                        {Language==="vi"?    
                        (<><input onChange={(e)=>setQuerySearch(e.target.value)} value={querysearch} onClick={()=>setShowForm(showForm=>!showForm)} type="text" placeholder="Bạn tìm gì hôm nay?"/>
                        <span ></span>
                    <Link to={`/MoreConTent?title=${encodeURIComponent(querysearch)}`}> <button >Tìm kiếm</button></Link> </>): (<><input type="text" placeholder="What are you looking for?"/>
                        <span ></span>
                        <button style={{marginRight:"10px"}}>Search</button></>)}
                    </div>
                   <div style={{display:"flex",gap:"20px",marginRight:"20px"}}>
                     <div>  <button className="eventCreate">{Language==="vi"?"Tạo sự kiện":"Create event"}</button></div>
                     
                    <div className="MyTicket">
                   <img src={ticket} alt="Myticket" />
                   <button>{Language==="vi"?"Vé của tôi":"My ticket"}</button>
                    </div>
                    <div className="Login">
                     
                     <button onClick={()=>loginRef.current.showModal()}>{Language==="vi"?'Đăng nhập':'Login'}</button>
                     <span></span>
                     <button onClick={()=>loginRef.current.showModal()}>{Language==="vi"?'Đăng ký':'Register'}</button>    
               
                    </div>
                    <Login ref={loginRef} registerRef={regisRef}/>
                    <Register ref={regisRef} loginRef={loginRef}/>

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
           {showForm&& <SearchContent ref={formRef}/> }                           
                </nav>
                
            </header>
        </>
    )
}