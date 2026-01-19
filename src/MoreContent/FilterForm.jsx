import { useEffect, useRef, useState } from "react"
import "./FilterForm.css"
export default function Filterform({onApply}){
    
      const [showForm, setShowForm] = useState(false);
        const formRef=useRef();
        const [selectedCity,setSelectedCity]=useState()
        const [selectedCate,setSelectedCate]=useState()
          useEffect(() => {
  function handleClickOutside(event) {
    const formNode = formRef.current;
    const filterButton = document.querySelector(".filter"); 

    if (
      formNode &&
      !formNode.contains(event.target) && 
      filterButton &&
      !filterButton.contains(event.target) 
    ) {
      setShowForm(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
    return (
        <>
               <div className="filters">
          <div className="filter" onClick={()=>setShowForm(!showForm)}>
 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><g clipPath="url(#filter-white_svg__clip0_598_500909)"><path d="M1.25 0a1 1 0 00-1 1v2a1 1 0 00.27.684l7.23 7.711V19a1 1 0 001.447.894l3-1.5a1 1 0 00.553-.894v-6.105l7.23-7.711A1 1 0 0020.25 3V1a1 1 0 00-1-1h-18z" fill="#fff"></path></g><defs><clipPath id="filter-white_svg__clip0_598_500909"><path fill="#fff" transform="translate(.25)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
        <span>Bộ lọc</span> 
          </div>
      {showForm&&(
          <div className="filterform" ref={formRef} >
        <span>Vị trí</span>
        <div className="Locate">
        <div className="radiobt" >
             <input type="radio" className="radiobutton" defaultChecked value={"Hà Nội"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Hà Nội</span>
        </div>
        <div className="radiobt"  >
             <input type="radio" className="radiobutton"  value={"Hồ Chí Minh"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Hồ Chí Minh</span>
        </div>
        <div className="radiobt"  >
             <input type="radio" className="radiobutton"  value={"Đà Lạt"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Đà Lạt</span>
        </div>
        <div className="radiobt" >
             <input type="radio" className="radiobutton"  value={"Other"} onChange={(e)=>setSelectedCity(e.target.value)} name="locate"/>
        <span>Vị trí khác</span>
        </div>
        </div>
        <hr className="dashed-line" />
        <div className="categoryform">
         <span>Thể loại</span>
         <div className="category">
        <button onClick={()=>{setSelectedCate("Music")}} className={selectedCate === "Music" ? "categorybutton active" : "categorybutton"}>Nhạc sống</button> 
        <button onClick={()=>setSelectedCate("TheaterandArt")} className={selectedCate === "TheaterandArt" ? "categorybutton active" : "categorybutton"}>Sân khấu và nghệ thuật</button> 
        <button  onClick={()=>setSelectedCate("Sport")}className={selectedCate === "Sport" ? "categorybutton active" : "categorybutton"}>Thể thao</button> 
        <button  onClick={()=>setSelectedCate("Nhạc sống")}className={selectedCate === "Nhạc sống" ? "categorybutton active" : "categorybutton"}>Hội thảo & Workshop</button> 
        <button  onClick={()=>setSelectedCate("AttandExp")}className={selectedCate === "AttandExp" ? "categorybutton active" : "categorybutton"}>Tham quan & Trải nghiệm</button> 
        <button  onClick={()=>setSelectedCate("Other")}className={selectedCate === "Other" ? "categorybutton active" : "categorybutton"}>Khác</button> 
          </div>
        </div>
       <button onClick={()=>{
      onApply(selectedCity,selectedCate); 
          setShowForm(false);
       }} className="confirmfilter">Áp Dụng</button>
        
        </div> 
      )}     
        </div>
        </>
    )
}