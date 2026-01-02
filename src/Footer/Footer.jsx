import phone from "../assets/phone.svg"
import email from "../assets/email.svg"
import posi from "../assets/posi.svg"
import "./Footer.css"
import ggplay from "../assets/ggplay.png"
import appstore from "../assets/appstore.png"
import fb from "../assets/MXH/fb.png"
import ing from "../assets/MXH/in.png"
import ins from "../assets/MXH/ins.png"
import tiktok from "../assets/MXH/tik.png"
import haveno from "../assets/MXH/Ihavenoidea.png"
 import vietnam from "../assets/language/vn.svg"
import english from "../assets/language/en.svg"
import ggplayen from "../assets/chplayen.png"
import storeen from "../assets/appstoreen.png"
import { footer } from "../Maincontent/data.js"
export default function Footer({Language,Setlanguage}){
  const Langua = footer[Language]||footer.vi;
    return (
        <>
         <footer>
        <div className="footer">
        <div className="leftfoot">
          <div className="ph">
      <span className="nav">Hotline</span>
     <div className="ph1">
    <img src={phone}/>
    <span>{Langua.hotline}</span></div>
          <strong>1900.281205</strong>
        </div>
        <div className="ph">
        <span className="nav">Email</span>
  <div className="ph1">
    <img src={email} alt="" />
    <span>nvu281205@gmai.com</span></div>
        </div>
         <div className="ph">
          <span className="nav">{Language==="vi"?"Văn phòng chính":"Head office"}</span>
  <div className="ph1">
    <img src={posi} alt="" />
    <span>{Langua.office}</span></div>
         </div>
        </div>

        <div className="center">
        <div className="ph">
        <span className="nav">{Langua.customertitle}</span>
        <div className="ph1"><span>{Langua.customer}</span></div>
        </div>
         <div className="ph" style={{marginTop:"40px"}}>
        <span className="nav">{Langua.orgtitle}</span>
        <div className="ph1"><span>{Langua.organizer}</span></div>
        </div>
        </div>

        <div className="rightfoot">
         <div className="ph">
        <span className="nav">{Langua.companyTitle}</span>
        <div className="ph1" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          {Langua.companyItems.map((item,i)=><span key={i}>{item}</span>
          )}
          </div>
        </div>
        </div>
        </div>
             <hr/>
        <div className="multi">
         <div className="app">
        <span>{Language==="vi"?"Ứng dụng TicketBox":"TicketBox App"}</span>
         <a> <img src={Language==="vi"?ggplay:ggplayen} alt="" /> </a>
          <a> <img src={Language==="vi"?appstore:storeen} alt="" /> </a>
        </div>
        <div className="app">
        <span>{Language==="vi"?"Ứng dụng check-in cho Ban tổ chức":"Check-in app for organizer"}</span>
        <a> <img src={Language==="vi"?ggplay:ggplayen} alt="" /> </a>
          <a> <img src={Language==="vi"?appstore:storeen} alt="" /> </a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:'20px'}}>
        <div className="fu">
          <span>Follow Us</span>
          <div className="MXH">
            <img src={ing} alt="" />
            <img src={ins} alt="" />
            <img src={fb} alt="" />
            <img src={tiktok} alt="" />
            <img src={haveno} alt="" />
          </div>
        </div>
        <div className="lan">
         <span>{Language==="vi"?"Ngôn ngữ":"Language"}</span>
         <div style={{display:"flex",gap:"5px"}}>
             <img style={{width:"40px",height:"40px"}} src={vietnam} onClick={()=>Setlanguage("vi")} />  
          <img style={{width:"45px",height:"32px",marginTop:"3px"}} src={english} onClick={()=>Setlanguage("en")}  />
         </div>
        </div>
        </div>
        </div>
       
        </footer>
        </>
    )
}