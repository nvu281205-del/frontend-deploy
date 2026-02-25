import { useContext } from "react"
import "./Navmenu.css"
import { Link } from "react-router-dom"
import { LanguageContext } from "../Context"
const categories = [
  { key: "Music", vi: "Nhạc sống", en: "Music" },
  { key: "TheaterAndArt", vi: "Sân khấu & Nghệ thuật", en: "Theater & Art" },
  { key: "Other", vi: "Thể Thao", en: "Sport" },
  { key: "SportAndOther", vi: "Khác", en: "Others" },
  { key: "ResaleTicket", vi: "Vé bán lại", en: "Resale Ticket" },
];

export default function Navmenu() {
  const Language = useContext(LanguageContext);

  return (
    <nav className="Navmenu">
      {categories.map(cat => (
        <Link
          key={cat.key}
          to={`/MoreContent?category=${cat.key}`}
          className="link"
        >
          <span>{Language === "vi" ? cat.vi : cat.en}</span>
        </Link>
      ))}
    </nav>
  );
}
