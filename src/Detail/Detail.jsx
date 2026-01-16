
import './Detail.css'
import Schedule from './Schedule'
import { useParams } from 'react-router-dom'
import Organizer from './Organizer'
import Detailticket from './Detailticket'
import { useEffect, useState } from 'react'
import GridContent from '../MoreContent/GridContent'
export default function Detail(){
    const {id}= useParams()
    const[recommend,setRecommend]=useState([])
     useEffect(() => {
        fetch("http://localhost:3000/events?category=Recommend")
          .then(res => res.json())
          .then(json => setRecommend(json));
      }, []);
    return (
        <>
        <Detailticket id={id}/>
        <div className='info'>
        <Schedule id={id}/>
         <Organizer id={id}/>
          <div style={{backgroundColor:"#27272A"}} className="Recommend">
           <span style={{marginTop:"35px"}} >Có thể bạn cũng thích</span>
           <div className="recomcontent">    
                  <GridContent data={recommend}/>  
                </div>
                </div>
         </div>
         
        </>
    )
}