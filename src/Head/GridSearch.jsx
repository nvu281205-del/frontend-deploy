import dateimg from "../assets/date.png"
import { useContext } from "react";
import { LanguageContext } from "../Context";
import "./GridSearch.css"
export default function GridSearch({imgSrc,title,baseprice,date}){
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
<div className="gridsearch">
    <img src={imgSrc} alt={title} />
    <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
    <h3>{title}</h3>
        <strong>{Language==="vi"?"Từ":"Only"} {baseprice}<sup>đ</sup></strong>
    <div className="Date">
     <img src={dateimg} alt="" />
        <span>{formatDate(date,Language)}</span>
    </div>
    </div>
</div>
        </>
    )
}