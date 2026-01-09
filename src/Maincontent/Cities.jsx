import { useContext } from 'react';
import { LanguageContext } from '../Context.jsx';
import {banner} from '../Maincontent/data.js'
import City from './City'
export default function Cities({titleVi,titleEn}){
     const Language=useContext(LanguageContext);
    return (
        <>
        <div className="city">
         <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",marginTop:"15px"}}>
         {banner.map((i)=>(<City key={i.title} {...i}/>))}
        </div>
        </div>
        </>
    )
}