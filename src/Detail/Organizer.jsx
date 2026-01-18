import axios from "axios";
import { useEffect, useState } from "react";

export default function Organizer({id}){
      const[eventid,setEventid]=useState({});
        useEffect(()=>{
            axios.get(`http://localhost:3000/events/${id}`)
            .then(res=>setEventid(res.data))
            .catch(err=>console.log(err))
        },[id])
    return (
        <>
         <div className='Organizer'>
         <div className='OrganizerHead'>
             <span>Ban tổ chức</span>
         </div>
         <div className='OrganizerBody'>
            <img src={eventid.organizer?.logoUrl} alt="" />
            <div className='Organizerinfo'>
              <span>{eventid.organizer?.name}</span>
              <p>{eventid.organizer?.description}</p>
            </div>
         </div>
        </div>
        </>
    )
}