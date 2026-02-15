import { useContext } from 'react';
import { LanguageContext } from '../Context.jsx';
import DaLat from '/City/pic1.webp'
import HaNoi from '/City/pic3.webp'
import HCM from '/City/pic2.webp'
import Other from '/City/pic4.webp'
import City from './City'
import { Link } from 'react-router-dom';
export default function Cities({titleVi,titleEn}){
     const Language=useContext(LanguageContext);
    return (
        <>
        <div className="city">
         <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",marginTop:"15px"}}>
      <Link to="/MoreContent?city=HN">   <City imgSrc={HaNoi} titleEn="Ha Noi" titleVi="Hà Nội"/> </Link>
      <Link to="/MoreContent?city=HCM">     <City imgSrc={HCM} titleEn="Ho Chi Minh City" titleVi="Tp Hồ Chí Minh"/></Link>
      <Link to="/MoreContent?city=DL"><City imgSrc={DaLat} titleEn="Da Lat" titleVi="Đà Lạt"/></Link>   
      <Link to="/MoreContent?city=Other"><City imgSrc={HaNoi} titleEn="Other Location" titleVi="Địa điểm khác"/></Link> 
        </div>
        </div>
        </>
    )
}