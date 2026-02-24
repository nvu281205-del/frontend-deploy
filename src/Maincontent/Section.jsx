import { useContext, useEffect, useState } from "react"
import Content from "./Content"
import axios from "axios";
import { Link } from 'react-router-dom';
import { LanguageContext } from "../Context";
export default function Section({titleEn,titleVi,category}){
     const Language=useContext(LanguageContext);
    let index=0;
    const [event,setEvent]=useState([])
     useEffect(()=>{
     axios.get(`https://backend-pro-sirs.onrender.com/events?category=${category}`)
     .then(res=>setEvent(res.data))
    .catch(err=>console.log(err))
    },[category])
    return (
        <>
        <div className="ForYou">
    <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
        <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
        {event.slice(index,index+4).map((i)=>(
            <Link className="link" to={`/Detail/${i.id}`} key={i.id}> <Content {...i}/></Link>
           
            ))}</div>
      <Link to={`MoreContent?category=${category}`} className="link">
       <div className="Detail">
        <span>{Language==="vi"?"Xem thêm":"View more"}</span>
      <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span>
      </div>  
      </Link>
    
        </div>
        </>
    )
}