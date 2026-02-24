
import "./ImgVideo.css"
import {useContext, useEffect, useRef,useState} from "react"
import muted from "/video/muted.png"
import unmuted from "/video/unmuted.png"
import { LanguageContext } from "../Context";
import { Link } from "react-router-dom";
export default function ImgVideo({imgSrc, title, position,video,setCurrentIndex,index,id,datalength}){ 
    const[mute,setMute]=useState(true);
     const videoRef = useRef(null);
    useEffect(() => {
  if (videoRef.current) {
    videoRef.current.pause();
  }
}, [index]);
     const Language=useContext(LanguageContext);
    
    return (
        <>
            <div className="ImgVideo" onMouseEnter={()=>videoRef.current?.play()} onMouseLeave={() => videoRef.current?.pause()}>
               <div className="media">
                <img src={imgSrc} alt={title} />  
                <video src={video} ref={videoRef} muted ></video>
                
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg"><g clipPath="url(#play-videos_svg__clip0_8445_54189)" opacity="0.5">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.333 5.333A2.667 2.667 0 002.667 8v16a2.667 2.667 0 002.666 2.667h21.334A2.667 2.667 0 0029.333 24V8a2.667 2.667 0 00-2.666-2.667H5.333zm15.148 11.752a1.333 1.333 0 000-2.17l-5.706-4.076c-.882-.63-2.108 0-2.108 1.085v8.152c0 1.084 1.226 1.715 2.108 1.085l5.706-4.076z" fill="#fff"></path>
                    </g><defs><clipPath id="play-videos_svg__clip0_8445_54189">
                        <path fill="#fff" transform="translate(2.667 2.667)" d="M0 0h26.667v26.667H0z"></path></clipPath></defs></svg>
                <button className="mute" onClick={()=>{
                    videoRef.current.muted=!videoRef.current.muted;
                    setMute(videoRef.current.muted)
                }}> <img src={mute?muted:unmuted} /></button>
               
        <Link to={`/Detail/${id}`}><button className="detail-button">{Language==='vi'?'Xem chi tiết':'View Detail'}</button></Link> 
                {position==="left" &&( 
                <button className="back-button" onClick={()=>setCurrentIndex((prevIndex)=>(prevIndex - 1 + datalength)%datalength)} >
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