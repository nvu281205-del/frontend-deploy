import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import Content from "../Maincontent/Content";
import './MoreConTent.css'
import GridContent from "./GridContent";
export default function MoreContent(){
    const {titleSearch}= useParams();
    const[data,setData]=useState([]);
    useEffect(()=>{
     fetch(`http://localhost:3000/events?category=${titleSearch}`)
     .then(res=>res.json())
     .then(json=>setData(json));
    },[titleSearch])
    return (
        <>
        <div className="contain">
       <GridContent data={data}/>
       </div> 
        </>
    )
}