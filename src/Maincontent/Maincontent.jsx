import ImgVideo from "./ImgVideo"
import {AE, banner, data,data2,ForYou, Music, Others, Ta, ThisMonth, ThisWeekend} from "./data"
import {useState} from "react"
import "./Maincontent.css"
import Thumb from "./Thumb";
import Content from "./Content";
import VPBank from "../assets/VPBank/VPBank DAY.webp"
import Banner from "./Banner";
import Section from "./Section";

export default function Maincontent({Language}) {
    const [mainIndex, setMainIndex] = useState(0);   // cho ImgVideo
const [thumbIndex, setThumbIndex] = useState(0); // cho Thumb

const[date,setDate]=useState("Weekend");
    const currentitem=data[mainIndex];
    const nextitem=data[(mainIndex+1)%data.length];
    const VisibleThumb = data2.slice(thumbIndex,thumbIndex+5);
    return (
          <main>
        <div className='Container'>
        <ImgVideo {...currentitem} key={currentitem.title} position="left" Language={Language} setCurrentIndex={setMainIndex} datalength={data.length}/>
        <ImgVideo {...nextitem} key={nextitem.title} position="right" Language={Language} setCurrentIndex={setMainIndex} datalength={data.length}/>
        </div>
         <div className="dots">
   {data.map((_,index)=>(<span className={`dot ${index===mainIndex ? "active":""}`} key={index} onClick={()=>setMainIndex(index)}></span>))}
       </div>

        <div className="Thumb">
        <span className="topic">{Language==="vi"?"Sự kiện đặc biệt":"Special events"}</span>
            <div className="thumb-images">
    {VisibleThumb.map((item)=>(<Thumb {...item} key={item.title}/>))}
    {thumbIndex>0&&( <button className="prev-button" onClick={()=>setThumbIndex((thumbIndex)=>{
      if(thumbIndex-4<0){
        return 0;
      }
      return thumbIndex-4;
    })}>
        <span>&#8249;</span>
      </button>)}
       <button className="forward-button" onClick={()=>setThumbIndex((thumbIndex)=>{
        const MaxIndex=data2.length-5;
        if(thumbIndex+4<MaxIndex){
       return thumbIndex + 4;
       }
       return MaxIndex;
       })} disabled={thumbIndex >= data2.length - 5} >
      <span>&#8250;</span>
      </button>
          </div>
        </div>

        <div className="ForYou">
          <span className="topic">{Language==="vi"?"Dành cho bạn":"Top picks for you"}</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center"}}>
             {ForYou.map((i)=>(<Content {...i} key={i.title}/>))}</div>
        </div>

        <div className="ThisWeekend">
          <div className="special-topic">
            <span onClick={()=>setDate("Weekend")}>{Language==="vi"?"Cuối tuần này":"This weekend"}</span>
                <span onClick={()=>setDate("Month")}>{Language==="vi"?"Tháng này":"This month"}</span>
                 <div className={date==="Month"?"greenlineM":"greenlineW"}></div> 
                 <div className="Detail">  <span>{Language==="vi"?"Xem thêm":"View more"}</span> <span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span>    </div>
          </div>
         <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
             {(date==="Weekend" ? ThisWeekend:ThisMonth).map((i)=>(<Content {...i} key={i.title}/>))}
        </div>
        </div>

        <a className="VPBank">
          <img src={VPBank} alt="VPBank Day" />
        </a>

       <Section Language={Language} item={Music} titleEn="Music" titleVi="Nhạc sống"/>
       <Section Language={Language} item={Ta} titleEn="Theater & Art" titleVi="Sân khấu và nghệ thuật"/>
       <Section Language={Language} item={AE} titleEn="Attraction & Experience" titleVi="Tham quan và trải nghiệm"/>
       <Section Language={Language} item={Others} titleEn="Others" titleVi="Thể loại khác"/>

        <div className="banner">
         <span className="topic">{Language==="vi"?"Điểm đến thú vị":"Exciting destination"}</span>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",marginTop:"15px"}}>
         {banner.map((i)=>(<Banner Language={Language} key={i.title} {...i}/>))}
        </div>
        </div>  
        </main>
        
    )
}