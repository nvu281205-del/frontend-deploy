import { useContext, useEffect,useState } from "react"
import { useLocation } from "react-router-dom"
import Content from "../Maincontent/Content";
import './MoreConTent.css'
import GridContent from "./GridContent";
import empty from "/empty.webp"
import axios from "axios";
import Filterform from "./FilterForm";
import { LanguageContext } from "../Context";
export default function MoreContent(){
    const Language=useContext(LanguageContext)
    const[recommend,setRecommend]=useState([])
    const[data,setData]=useState([]);
    const location=useLocation();
    const param=new URLSearchParams(location.search);
    const title=param.get('title');
    const category =param.get('category');
    const city=param.get('city')

    const fetchEvent=async (city,category)=>{
     const res = await axios.get("http://localhost:3000/events",{
          params:{city,category}
     });
     setData(res.data)
    }
    useEffect(()=>{
     let url = "http://localhost:3000/events";
     if (category) url += `?category=${category}`;
     else if (title) url += `?title=${title}`;
     else if(city) url+=`?city=${city}`
     
     fetch(url)
     .then(res=>res.json())
     .then(json=>setData(json));
},[category,title,city]);
    useEffect(() => {
    fetch("http://localhost:3000/events?category=Recommend")
      .then(res => res.json())
      .then(json => setRecommend(json));
  }, []);
    return (
        <>
        <div className="morecontent">
        <div className="Result">
        <span>Kết quả tìm kiếm: </span>
         <Filterform onApply={fetchEvent}/>
        </div>
       {data.length === 0 && (
          <>
  <div className="empty">
    <img src={empty} alt="empty" />
    <span>Rất tiếc! Không tìm thấy kết quả nào</span>
    <p>Bạn hãy thử điều chỉnh lại bộ lọc, sử dụng các từ khóa phổ biến hơn hoặc khám phá các sự kiện nổi bật bên dưới</p>
  </div>
  
      <div className="Recommend">
  <span>Gợi ý dành cho bạn</span>
  <div className="recomcontent">    
         <GridContent data={recommend}/>  
       </div>
       </div>
       </>
)}
        <div className="contain">
       <GridContent data={data}/>
       </div>
       
       </div> 
        </>
    )
}