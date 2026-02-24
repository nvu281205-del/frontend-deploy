
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../Context";
import {Link} from "react-router-dom"
import axios from "axios";

export default function Detailticket({id}){
   const[eventid,setEventid]=useState({});
    useEffect(()=>{
        axios.get(`https://backend-pro-sirs.onrender.com/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
     const Language=useContext(LanguageContext);
          function formatDate(dateString,language='vi') { 
            const date = new Date(dateString);
            if(language==="vi"){
             const day = date.getDate(); 
             const month = date.getMonth() + 1;
        const year = date.getFullYear();
         return `${day} tháng ${month} năm ${year}`;
            }else{
               return date.toLocaleDateString("en-GB", { 
                day: "numeric",
                month: "long",
                year: "numeric" });
            }
         }
    return (
        <>
          <div className='detail'>
        <div className='detailcontain'>
        <div className=" detailticket">
          <div className="detailtop">

         
        <div className="detailtitle">
       {eventid.title}
        </div>
        <div className="detaildate">
    <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
    </svg>
      <span>{eventid.timeRange} ,</span>
      <span>{formatDate(eventid.date,Language)}</span>  
        </div>
        <div className="detaillocate">
<svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
</svg>
         <div>
        <span>{eventid.locate}</span>
        <div className='detailadd'>
            {eventid.locatedetail}
        </div>
        </div>
        </div>
         </div>
         <div className="detailbot">
        <div className="detailprice">
           <span>{Language==="vi"? "Từ ":"From "}{Number(eventid.baseprice).toLocaleString("vi-VN")}đ</span>
        </div>
       <Link to={`/BuyTicket/${id}`}> <button disabled={eventid.isPast} className={`buyticket${eventid.isPast?"ispast":""}`}>{eventid.isPast?(Language==="vi"?"Đã diễn ra":"It no longer"):(Language==="vi"?"Mua vé ngay":"Book now")}</button></Link>
        </div>
        </div>  
       
       <div  className='detailpic'>
       <img src={eventid.imgSrc} alt="" />
       </div>
       <div className='circletop'></div>
       <div className='circlebottom'></div>
<svg className='line' width="4" height="415" viewBox="0 0 4 415" fill="none" xmlns="http://www.w3.org/2000/svg" id="vertical-dashed"><path stroke="#27272A" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 10" d="M2 2v411"></path></svg>
        </div>
        </div>
        </>
    )
}