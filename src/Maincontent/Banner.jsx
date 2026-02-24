import { useEffect, useState } from "react";
import ImgVideo from './ImgVideo.jsx'
import axios from "axios";
export default function Banner(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/events?category=Banner")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
     
     const [mainIndex, setMainIndex] = useState(0);
       const currentitem=data[mainIndex];
    const nextitem=data[(mainIndex+1)%data.length];
    if (data.length === 0) { return <div>Loading...</div>; }
    return (
        <>
         <div className='Container'>
        <ImgVideo {...currentitem} index={mainIndex} key={currentitem.id} id={currentitem.id} position="left" setCurrentIndex={setMainIndex} datalength={data.length} />
        <ImgVideo {...nextitem} index={mainIndex} key={nextitem.id} id={nextitem.id} position="right"  setCurrentIndex={setMainIndex} datalength={data.length}/>
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===mainIndex ? "active":""}`} key={index} onClick={()=>setMainIndex(index)}></span>))}
       </div>
        </>
    )
}