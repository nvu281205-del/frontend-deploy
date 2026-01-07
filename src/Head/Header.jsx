import "./Header.css"
import ticket from "../assets/ticket.png"
import searchIcon from "../assets/search.png"
import vietnamIcon from "../assets/vietnamIcon.webp"
import englishIcon from "../assets/englishIcon.png"
import {useRef, useState} from "react"
import Login from "../Popup/Login"
import Register from "../Popup/Register"
export default function Header({Setlanguage,Language}) {//Destructering props để truyền thuộc tính  
  const[change,setChange]=useState("")
  const loginRef=useRef();
  const regisRef=useRef();
  function handleChange(e){
    setChange(e.target.value);
  }
    return (
        <>
            <header>
                <nav>
                    <h1>ticketbox</h1>
                    <div className="search-container">
                             <img id="searchIcon" src={searchIcon} alt="search" />
                        {Language==="vi"?    
                        (<><input type="text" value={change} placeholder="Bạn tìm gì hôm nay?" onChange={handleChange}/>
                        <span ></span>
                        <button >Tìm kiếm</button></>): (<><input type="text" placeholder="What are you looking for?"/>
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
                </nav>
                <nav>

                </nav>
            </header>
        </>
    )
}