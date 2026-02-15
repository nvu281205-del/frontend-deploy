import { useContext, useEffect, useState } from "react";
import Content from './Content.jsx'
import axios from "axios";
import { Link } from 'react-router-dom';
import { LanguageContext } from "../Context.jsx";
export default function ThisWeekend({category1,category2}){
   const Language=useContext(LanguageContext);
   const[date,setDate]=useState("Weekend");
   const index=0;
  const category=date==="Weekend"?category1:category2
      const [event,setEvent]=useState([])
     useEffect(()=>{
     axios.get(`http://localhost:3000/events?category=${category}`)
     .then(res=>setEvent(res.data))
    .catch(err=>console.log(err))
    },[category])
     const eventslide=event.slice(index,index+4); 
    return (
        <>
          <div className="ThisWeekend">
                  <div className="special-topic">
                    <span onClick={()=>setDate("Weekend")}>{Language==="vi"?"Cuối tuần này":"This weekend"}</span>
                      <span onClick={()=>setDate("Month")}>{Language==="vi"?"Tháng này":"This month"}</span>
                         <div className={date==="Month"?"greenlineM":"greenlineW"}></div> 
      <Link to={`MoreContent?category=${category}`} className="link">
       <div className="Detail">
        <span>{Language==="vi"?"Xem thêm":"View more"}</span>
      <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span>
      </div>  
      </Link>
                  </div>
                 <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
                     {eventslide.map((i)=>(
                <Link className="link" to={`/Detail/${i.id}`} key={i.id}> <Content {...i}/></Link>
                      ))}
                </div>
                </div>
        </>
    )
}