import { useContext, useEffect, useState } from 'react';
import './MyTicket.css'
import emptyticket from '/emptyticket.png'
import GridContent from '../MoreContent/GridContent';
import axios from 'axios';
import { LanguageContext } from '../Context';
export default function MyTicket(){
  const[order,setOrder]=useState([])
  const Language=useContext(LanguageContext)
    const [recommend,setRecommend]=useState([])
    const[token,_setToken]=useState(()=>localStorage.getItem("token")||null)
    useEffect(() => {
            fetch("http://localhost:3000/events?category=Recommend")
              .then(res => res.json())
              .then(json => setRecommend(json));
          }, []);
    useEffect(()=>{
        axios.get("http://localhost:3000/users/order",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }).then(res=>setOrder(res.data))
    },[token])
    return (
        <div className="Myticket">       
            <div className="Mytickettitle">{Language==='vi'?"Vé của tôi":"My Ticket"}</div>
        {order.length>0?( <div className='myticketdetail'>
       {order.map((o)=>
            <div className='mydetailcontain'>
        <div className="myticketinfo">
        <div className="mydetailtitle">
       {o.title}
        </div>
        <div className="mydetaildate">
    <svg className="path" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6.25 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h1a4 4 0 014 4v2h-20V6a4 4 0 014-4h1V1a1 1 0 011-1zM20.25 10h-20v8a2 2 0 002 2h16a2 2 0 002-2v-8z" />
    </svg>
      <span>{o.timeRange}</span>
      <span>{o.date}</span>  
        </div>
        <div className="mydetaillocate">
<svg className="location-icon"  viewBox="0 0 24 24"  width="24" height="24"  fill="currentColor">
  <path  fillRule="evenodd"  clipRule="evenodd"   d="M4.031 3.307a10.514 10.514 0 0113.937 0c4.485 3.945 4.955 10.854 1.058 15.392l-7.015 8.17a1.333 1.333 0 01-2.023 0l-7.015-8.17C-.923 14.161-.454 7.252 4.031 3.307zM11 14.667A3.333 3.333 0 1011 8a3.333 3.333 0 000 6.666z" />
</svg>
         <div>
        <span>{o.locatedetail}</span>
        <div className='mydetailadd'>
            {o.locate}
        </div>
        </div>
        </div>
        </div>  
       
       <div  className='myticketpic'>
       <img src={o.imgSrc} alt="" />
       </div>
       <div className='mycircletop'></div>
       <div className='mycirclebottom'></div>
<svg className='myline' width="4" height="415" viewBox="0 0 4 415" fill="none" xmlns="http://www.w3.org/2000/svg" id="vertical-dashed"><path stroke="#27272A" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 10" d="M2 2v411"></path></svg>
        </div>
         )} 
        </div>):(<>
          <div className='emptyticket'>
            <img src={emptyticket} alt="" />
            {Language==="vi"?"Bạn chưa có vé nào":"You have no ticket ^ ^"}
        </div>  
          <div style={{backgroundColor:"#27272A"}} className="Recommend">
                   <span style={{marginTop:"35px"}} >Có thể bạn cũng thích</span>
                   <div className="recomcontent">    
                          <GridContent data={recommend}/>  
                        </div>
        </div> 
        </> )}       
        </div>
    )
}