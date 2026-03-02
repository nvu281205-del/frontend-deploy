import { useContext, useEffect, useState } from 'react';
import Organizer from './Organizer'
import './Schedule.css'
import axios from 'axios';
import { LanguageContext } from '../Context';
import { Link } from 'react-router-dom';
export default function Schedule({id}){
     const[eventid,setEventid]=useState({});
     const Language=useContext(LanguageContext)
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
    useEffect(()=>{
        axios.get(`https://backend-pro-sirs.onrender.com/events/${id}`)
        .then(res=>setEventid(res.data))
        .catch(err=>console.log(err))
    },[id])
    return (
        <>
        <div className='Schedule'> 
            <div className="ScheduleHead">
                <span>{Language==="vi"?"Lịch diễn":"Schedule"}</span>
            </div>
            <div className='ScheduleBody'>
            <div className='ScheduleDay'>
                <div className="ScheduleDate">
                <span>{eventid.timeRange}</span>
                <span className='ticketday'>{formatDate(eventid.date,Language)}</span>
                </div>
           <Link to={`/BuyTicket/${id}`}> <button disabled={eventid.isPast} className={`btsche ${eventid.isPast?"ispast":""}`}>{eventid.isPast?(Language==="vi"?"Sự kiện đã diễn ra":"This event is over"):(Language==="vi"?"Mua vé ngay":"Book now")}</button></Link>
            </div>
            <div className="Ticketsinfo">
             <span>{Language==="vi"?"Thông tin vé":"Ticket information"}</span>
             {eventid.tickets?.map((ticket)=>(
                <div key={ticket.id} className="ticketinfo">
                <span>{ticket.type}</span>
                <div className="ticketprice">
                    <span>{Number(ticket.price).toLocaleString('vi-VN')}đ</span>
                </div>
             </div>
             ))}
            </div>
            </div>
            </div>
        </>
    )
}