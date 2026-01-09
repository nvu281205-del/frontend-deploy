import { useState } from "react";
import {data} from './data.js'
import ImgVideo from './ImgVideo.jsx'
import { useContext } from "react";
import { LanguageContext } from "../Context.jsx";
export default function Banner(){
     const Language=useContext(LanguageContext);
     const [mainIndex, setMainIndex] = useState(0);
       const currentitem=data[mainIndex];
    const nextitem=data[(mainIndex+1)%data.length];
    return (
        <>
         <div className='Container'>
        <ImgVideo {...currentitem} index={mainIndex} key={currentitem.title} position="left" Language={Language} setCurrentIndex={setMainIndex} datalength={data.length}/>
        <ImgVideo {...nextitem} index={mainIndex} key={nextitem.title} position="right" Language={Language} setCurrentIndex={setMainIndex} datalength={data.length}/>
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===mainIndex ? "active":""}`} key={index} onClick={()=>setMainIndex(index)}></span>))}
       </div>
        </>
    )
}