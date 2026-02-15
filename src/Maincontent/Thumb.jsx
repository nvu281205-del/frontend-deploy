import "./Thumb.css"
export default function Thumb({imgSrc,title}) {

    return(
        <>
       <img id="thumbimage"src={imgSrc} alt={title} />
       </>
    )
}
