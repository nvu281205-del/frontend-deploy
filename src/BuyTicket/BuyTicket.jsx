import { useContext, useEffect, useState } from "react"
import "./BuyTicket.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "../Context";
export  default function BuyTicket(){
  const Language=useContext(LanguageContext)
  const[token,_setToken]=useState(()=>localStorage.getItem("token")||null)
  const {id}=useParams();
   const[eventid,setEventid]=useState({});
    useEffect(()=>{
        axios.get(`https://backend-pro-sirs.onrender.com/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
    const navigate=useNavigate();
  const[counts,setCounts]=useState({});
  const totalCount = Object.values(counts).reduce((sum, val) => sum + val, 0);
  const totalPrice = eventid.tickets?eventid.tickets?.reduce((sum,ticket)=>{
    const count =counts[ticket.id]||0;
    return sum + count * Number(ticket.price);
  },0):0;
 const handleChange = (ticketId,ticketstock, delta) => {
  setCounts(prev => {
    const current = prev[ticketId] || 0;
    const newCount = Math.max(0, Math.min(ticketstock, current + delta));
    return { ...prev, [ticketId]: newCount };
  });
};
    localStorage.setItem("counts", JSON.stringify(counts));
    localStorage.setItem("totalPrice", totalPrice);
   const handleBuy=()=>{
      if(!token){
        {Language==="vi"?alert("Vui lòng đăng nhập trước khi mua vé"):alert("Login before buy ticket ")}
      }
    }
     
    return (
            <>  
           <div className="contentbuy">
               <div className="ReturnBt" onClick={()=>navigate(-1)}>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="back"><path fillRule="evenodd" clipRule="evenodd" d="M8.707 3.793a1 1 0 010 1.414L4.414 9.5H18a1 1 0 110 2H4.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" fill="#fff"></path></svg>
               <span>{Language==="vi"?"Trở về":"Return"}</span>
               </div>
               <div className="ticketform">
         <span className="Choseticket">Chọn vé</span>
           <div className="typetickform">
           {eventid.tickets?.map((ticket)=>{
            const count=counts[ticket.id]||0;
            const disabledminus=count<=0;
            const disabledplus=count>=ticket.stock;
            return(
            <div className="infoticket" key={ticket.id}>
           <div className="pricetype" >
            <span>{ticket.type}</span>
            <span className="price">{Number(ticket.price).toLocaleString("vi-VN")}<sup>đ</sup></span>
            </div>
        {ticket.stock>0?<div className="quantityform">
             <button disabled={disabledminus} className={disabledminus?"countdisable":"countable"} onClick={()=>handleChange(ticket.id,ticket.stock,-1)}>-</button>
             <button className="quantitybt">{count}</button>
             <button disabled={disabledplus} className={disabledplus?"countdisable":"countable"}onClick={()=>handleChange(ticket.id,ticket.stock,+1)}>+</button>
           </div>: <div className="outticket">
            {Language==="vi"?"Hết vé":"Outstock"}
           </div>}   
           </div>
           )})}
           </div>
        
               </div>          
               <div className="aside">
            <div className="asidehead">
             <span>{eventid.title}</span>
            </div>
            <div className="asidebody">
            <div className="asidedate">
            <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
         </svg>      
           <span>{eventid.timeRange},</span><span>{eventid.date}</span> 
            </div>
            <div className="asidelocate">
      <svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
      </svg>      
      <span>{eventid.locate}</span>   
            </div>
            </div>
            <div className="asideprice">
             <span>{Language==="vi"?"Giá vé":"Ticket Price"}</span>
             {eventid.tickets?.map((ticket)=>(
              <div key={ticket.id} className="tickettype">
             <span>{ticket.type}</span>
             <span className="price">{Number(ticket.price).toLocaleString("vi-VN")} <sup>đ</sup></span>
             </div>
             ))}
             
            </div>
            <div className="Buyticket">
              <div className="chosenticket">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 15v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3l.879-.879a3 3 0 000-4.242L2 9V6a2 2 0 012-2h16a2 2 0 012 2v3l-.879.879a3 3 0 000 4.242L22 15zM8 10a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" fill="#fff"></path></svg>
             <span>x{totalCount}</span>           
           </div>
      <Link to={!token?`/BuyTicket/${id}`:`/BookTicket/${id}`}><button onClick={handleBuy} disabled={totalCount<=0} className={totalCount>0?"buyable":"buydisable"}>{totalCount>0?`Tiếp Tục -${(totalPrice.toLocaleString("vi-VN"))}đ`:"Vui lòng chọn vé"}</button></Link>  
            </div>
            </div>  
               </div>         
        </>
    )
}