import "./Navmenu.css"
export default function Navmenu({Language}) {
    return (
        <>
        {Language==="vi"?
        (<nav className="Navmenu">
        <span>Nhạc sống</span>
        <span>Sân khấu & Nghệ thuật</span>
        <span>Thể Thao</span>
        <span>Khác</span>
        <span>Vé bán lại</span>
      </nav>):(
        <nav className="Navmenu">
        <span>Music</span>
        <span>Theaters & Art</span>
        <span>Sport</span>
        <span>Others</span>
        <span>Resale ticket</span>
      </nav>
      )
      }
      
        </>
    )
}