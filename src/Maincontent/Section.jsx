import Content from "./Content"
export default function Section({titleEn,titleVi,item,Language}){
    return (
        <>
        <div className="ForYou">
    <span className="topic">{Language==="vi"?titleVi:titleEn}</span>
        <div style={{display:"flex", gap:"10px",justifyContent:"center",marginTop:"10px"}}>
        {item.map((i)=>(<Content {...i} key={i.title}/>))}</div>
        <div className="Detail"><span>{Language==="vi"?"Xem thêm":"View more"}</span><span style={{fontSize:"25px",marginBottom:"5px"}}>&#8250;</span></div>    
        </div>
        </>
    )
}