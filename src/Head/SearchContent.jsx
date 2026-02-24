import "./SearchContent.css"
import category1 from "/categoryrecommend1.webp"
import category2 from "/categoryrecommend2.jpg"
import category3 from "/categoryrecommend3.jpg"
import category4 from "/categoryrecommend4.webp"
import HN from "/City/pic3.webp"
import DaLat from "/City/pic1.webp"
import HCM from "/City/pic2.webp"
import Other from "/City/pic4.webp"
import { useContext, useEffect, useState } from "react";
import GridSearch from "./GridSearch.jsx"
import { Link } from "react-router-dom"
import { LanguageContext } from "../Context.jsx"
export default function SearchContent({ref,setShowForm}){
     const[active,setActive]=useState("category");
     const Language=useContext(LanguageContext)
     const[recommend,setRecommend]=useState([])
      useEffect(() => {
         fetch("https://backend-pro-sirs.onrender.com/events?category=Recommend")
           .then(res => res.json())
           .then(json => setRecommend(json));
       }, []);
       const index=0;
    return(
        <>
        <div className="Search" ref={ref}>
       <div className="searchform">
          <div className="titleform">
               <span onClick={()=>setActive("category")} className={`spanactive ${active==="category"?"":"inactive"}`}>{Language==="vi"?"Khám phá theo thể loại":"Browse by Category"}</span>
               <span onClick={()=>setActive("city")} className={`spanactive ${active==="city"?"":"inactive"}`}>{Language==="vi"?"Khám phá theo Thành Phố":"Browse by City"}</span>
          </div>
          <span className={active==="city"?"linecity":"linecate"}></span>
       </div>
       <div className="imgSearchForm">
     <Link onClick={()=>setShowForm(false)} to={active==="city"?"/MoreContent?city=HCM":"/MoreContent?category=Music"}>   {active==="city"?  <div className="imgSearch">
               <img src={HCM} alt="" />
               <span>"Tp Hồ Chí Minh"</span>
          </div>: <div className="imgSearch">
               <img src={category1} alt="" />
               <span>"Nhạc sống"</span>
          </div>}</Link>  
    <Link onClick={()=>setShowForm(false)} to={active==="city"?"/MoreContent?city=HN":"/MoreContent?category=TheaterAndArt"}>       {active==="city"? <div className="imgSearch">
               <img src={HN} alt="" />
               <span>"Hà Nội"</span>
          </div>: <div className="imgSearch">
               <img src={category2} alt="" />
               <span>"Sân khấu & Nghê Thuật"</span>
          </div>}</Link> 
    <Link onClick={()=>setShowForm(false)} to={active==="city"?"/MoreContent?city=DL":"/MoreContent?category=SportAndOther"}>       {active==="city"? <div className="imgSearch">
               <img src={DaLat} alt="" />
               <span>"Dà Lạt"</span>
          </div>: <div className="imgSearch">
               <img src={category3} alt="" />
               <span>"Thể Thao"</span>
          </div>}</Link>
      <Link onClick={()=>setShowForm(false)} to={active==="city"?"/MoreContent?city=Other":"/MoreContent?category=SeminarAndWorkshop"}>         {active==="city"? <div className="imgSearch">
               <img src={Other} alt="" />
               <span>"Vị trí khác"</span>
          </div>: <div className="imgSearch">
               <img src={category4} alt="" />
               <span>"Hội thảo & WorkShop"</span>
          </div>}</Link>
       </div>
       <div className="recommendSearch">
         <span>{Language==="vi"?"Gợi ý dành cho bạn":"Recommend"}</span>
         <div className="recommendForm">
         <div className="recommendGrid">
          {recommend.slice(index,index+9).map((i)=>
          <Link className="link" onClick={()=>setShowForm(false)} to={`/Detail/${i.id}`} key={i.id}><GridSearch {...i}/></Link>)} 
         </div>
         </div>
       </div>
       </div>
        </>
    )
}