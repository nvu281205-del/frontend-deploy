import "./Banner.css"
export default function Banner({imgSrc,title,titleEn,Language}){
    return(
        <>
        <div className="cityBanner">
        <img src={imgSrc} className="Background" />
        <span>{Language==="vi"?title:titleEn}</span>
        </div>
        </>
    )
}