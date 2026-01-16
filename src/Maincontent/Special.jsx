import { useContext, useEffect, useState } from "react";
import {data2} from './data.js'
import Thumb from './Thumb.jsx'
import { LanguageContext } from "../Context.jsx";
import axios from "axios";
export default function Special ({titleEn,titleVi,category}){
  const[event,setEvent]=useState([]);
   useEffect(()=>{
     axios.get(`http://localhost:3000/events?category=${category}`)
     .then(res=>setEvent(res.data))
    .catch(err=>console.log(err))
    },[category])
      const Language=useContext(LanguageContext);
     const [thumbIndex, setThumbIndex] = useState(0);
     const VisibleThumb = data2.slice(thumbIndex,thumbIndex+5);
    return (
        <> 
            <div className="Thumb">
        <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
            <div className="thumb-images">
    {event.map((item)=>(<Thumb {...item} key={item.title}/>))}
    {thumbIndex>0&&( <button className="prev-button" onClick={()=>setThumbIndex((thumbIndex)=>{
      if(thumbIndex-4<0){
        return 0;
      }
      return thumbIndex-4;
    })}>
        <span>&#8249;</span>
      </button>)}
     {thumbIndex<0&&<button className="forward-button" onClick={()=>setThumbIndex((thumbIndex)=>{
        const MaxIndex=data2.length-5;
        if(thumbIndex+4<MaxIndex){
       return thumbIndex + 4;
       }
       return MaxIndex;
       })} disabled={thumbIndex >= data2.length - 5} >
      <span>&#8250;</span>
      </button>}  
          </div>
        </div>
        </>
    )
}