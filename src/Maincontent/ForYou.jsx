
import Content from "./Content.jsx";
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../Context.jsx';
import { Link } from 'react-router-dom';
export default function ForYou({titleEn,titleVi,category}){
const Language=useContext(LanguageContext);
const[data,setData]=useState([])
useEffect(()=>{
    axios.get(`https://backend-pro-sirs.onrender.com/events?category=${category}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
},[category])
    return (
        <>
         <div className="ForYou">
        <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
          <div style={{display:"flex", gap:"10px",justifyContent:"center"}}>
             {data.map((i)=>(
              <Link className="link" to={`/Detail/${i.id}`} key={i.id}> <Content {...i}/></Link>
                ))}
        </div>
        </div>
        </>
    )
}