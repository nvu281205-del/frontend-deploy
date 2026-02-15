import dateimg from "../assets/date.png"
import { useContext } from "react";
import { LanguageContext } from "../Context";
import "./Content.css"
export default function Content({title,imgSrc,baseprice,date,isPast}){
    const Language=useContext(LanguageContext);
      function formatDate(dateString,language='vi') { 
        const date = new Date(dateString);
        if(language==="vi"){
         const day = date.getDate(); 
         const month = date.getMonth() + 1;
    const year = date.getFullYear();
     return `${day} tháng ${month} năm ${year}`;
        }else{
           return date.toLocaleDateString("en-GB", { 
            day: "numeric",
            month: "long",
            year: "numeric" });
        }
     }
    return (
<>
<div className="content">
<img src={imgSrc} alt={title} />
<div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
<h3>{title}</h3>
    <strong>{Language==="vi"?"Từ":"From"} {Number(baseprice).toLocaleString("vi-VN")}<sup>đ</sup></strong>
<div className="Date">
 <img src={dateimg} alt="" />
    <span>{formatDate(date,Language)}</span>
</div>
</div>
{isPast&&<div className="dateexp">
     <span>{Language==='vi'?"Đã diễn ra":"No longer"}</span>
</div>}
</div>
</>        
    );
}