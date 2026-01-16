import { Link } from "react-router-dom";
import Content from "../Maincontent/Content";
import './GridContent.css'
export default function GridContent({data}){
    return (
        <> 
        <div className="Grid">
          {data.map((i)=>(
           <Link className="link" to={`/Detail/${i.id}`} key={i.id}> <Content {...i}/></Link>
            ))}
          </div>
        </>
    )
}