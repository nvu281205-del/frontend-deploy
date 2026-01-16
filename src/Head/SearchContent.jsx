import "./SearchContent.css"
import category1 from "/categoryrecommend1.webp"
import category2 from "/categoryrecommend2.jpg"
import category3 from "/categoryrecommend3.jpg"
import category4 from "/categoryrecommend4.webp"
import HN from "/City/pic3.webp"
import DaLat from "/City/pic1.webp"
import HCM from "/City/pic2.webp"
import Other from "/City/pic4.webp"
import { useEffect, useState } from "react";
import GridSearch from "./GridSearch.jsx"
export default function SearchContent({ref}){
     const[active,setActive]=useState("category");
     const[recommend,setRecommend]=useState([])
      useEffect(() => {
         fetch("http://localhost:3000/events?category=Recommend")
           .then(res => res.json())
           .then(json => setRecommend(json));
       }, []);
       const index=0;
    return(
        <>
        <div className="Search" ref={ref}>
       <div className="searchform">
          <div className="titleform">
               <span onClick={()=>setActive("category")} className={`spanactive ${active==="category"?"":"inactive"}`}>Khám phá theo Thể loại</span>
               <span onClick={()=>setActive("city")} className={`spanactive ${active==="city"?"":"inactive"}`}>Khám phá theo Thành phố</span>
          </div>
          <span className={active==="city"?"linecity":"linecate"}></span>
       </div>
       <div className="imgSearchForm">
          <div className="imgSearch">
               <img src={active==="city"?HCM:category1} alt="" />
               <span>{active==="city"?"Tp.Hồ Chí Minh":"Nhạc sống"}</span>
          </div>
          <div className="imgSearch">
               <img src={active==="city"?HN:category2} alt="" />
               <span>{active==="city"?"Hà Nội":"Sân khấu và Nghệ Thuật"}</span>
          </div>
          <div className="imgSearch">
               <img src={active==="city"?DaLat:category3} alt="" />
               <span>{active==="city"?"Đà Lạt":"Thể Thao"}</span>
          </div>
          <div className="imgSearch">
               <img src={active==="city"?Other:category4} alt="" />
               <span>{active==="city"?"Vị trí khác":"Hội thảo & WorkShop"}</span>
          </div>
       </div>
       <div className="recommendSearch">
         <span>Gợi ý dành cho bạn</span>
         <div className="recommendForm">
         <div className="recommendGrid">
           {recommend.slice(index,index+9).map((i)=><GridSearch {...i} key={i.id}/>)}
         </div>
         </div>
       </div>
       </div>
        </>
    )
}