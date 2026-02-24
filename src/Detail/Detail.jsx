
import './Detail.css'
import Schedule from './Schedule'
import { useParams } from 'react-router-dom'
import Organizer from './Organizer'
import Detailticket from './Detailticket'
import { useContext, useEffect, useState } from 'react'
import GridContent from '../MoreContent/GridContent'
import { LanguageContext } from '../Context'
export default function Detail(){
    const Language=useContext(LanguageContext)
    const {id}= useParams()
    const[recommend,setRecommend]=useState([])
     useEffect(() => {
        fetch("https://backend-pro-sirs.onrender.com/events?category=Recommend")
          .then(res => res.json())
          .then(json => setRecommend(json));
      }, []);
    return (
        <>
        <Detailticket id={id}/>
        <div className='info'>
         <Organizer id={id}/>
         <Schedule id={id}/>
          <div style={{backgroundColor:"#27272A"}} className="Recommend">
           <span style={{marginTop:"35px"}} >{Language=="vi"?"Có thể bạn cũng thích":"You certainly like it "}</span>
           <div className="recomcontent">    
                <GridContent data={recommend}/>  
          </div>
            </div>
         </div>
         
        </>
    )
}