import { data } from "./data";
import "./ImgVideo.css"
import {useRef} from "react"
export default function ImgVideo({imgSrc, title, position,video,Language,setCurrentIndex,datalength}) {
    const videoRef = useRef(null);
    return (
        <>
            <div className="ImgVideo">
                <img src={imgSrc} alt={title} />
                <video src={video} ref={videoRef}  onMouseEnter={()=>videoRef.current.play()} onMouseLeave={() => videoRef.current.pause()}></video>
           {Language==="vi"?(<button className="detail-button">Xem chi tiết</button>):(<button className="detail-button"> View Details</button>)}     
                {position==="left" &&( 
                <button className="back-button" onClick={()=>setCurrentIndex((prevIndex)=>(prevIndex - 1 + data.length)%datalength)}>
                <span className="arrow-left">&#8249;</span>
                 </button>)}
                 {position==="right" &&(
                 <button className="next-button" onClick={()=>setCurrentIndex((prevIndex)=>(prevIndex+1)%datalength)}>
                 <span className="arrow-right">&#8250;</span>
                </button>)}
            </div>
        </>
    )
}