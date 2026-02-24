import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../Context";

export default function Organizer({id}){
      const[eventid,setEventid]=useState({});
      const Language=useContext(LanguageContext)
        useEffect(()=>{
            axios.get(`https://backend-pro-sirs.onrender.com/events/${id}`)
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