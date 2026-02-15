import { useContext, useEffect, useState } from 'react';
import Organizer from './Organizer'
import './Schedule.css'
import axios from 'axios';
import { LanguageContext } from '../Context';
export default function Schedule({id}){
     const[eventid,setEventid]=useState({});
     const Language=useContext(LanguageContext)
    useEffect(()=>{
        axios.get(`http://localhost:3000/events/${id}`)
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
                <span className='ticketday'>24 Tháng 01,2026</span>
                </div>
                <button>{Language==="vi"?"Mua vé ngay":"Book now"}</button>
            </div>
            <div className="Ticketsinfo">
             <span>{Language==="vi"?"Thông tin vé":"Ticket information"}</span>
             {eventid.tickets?.map((ticket)=>(
                <div key={ticket.id} className="ticketinfo">
                <span>{ticket.type}</span>
                <div className="ticketprice">
                    <span>{ticket.price}đ</span>
                </div>
             </div>
             ))}
            </div>
            </div>
            </div>
        </>
    )
}