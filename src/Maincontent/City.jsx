import "./City.css"
import { LanguageContext } from "../Context";
import { useContext } from "react";
export default function City({imgSrc,titleVi,titleEn}){
     const Language=useContext(LanguageContext);
    return(
        <>
        <div className="cityBanner">
        <img src={imgSrc} className="Background" />
        <span>{Language==="vi"?titleVi:titleEn}</span>
        </div>
        </>
    )
}