
import Banner from './Banner'
import Special from './Special'
import "./Maincontent.css"
import Section from "./Section";
import ForYou from "./ForYou"
import ThisWeekend from "./ThisWeekend"
import VP from "./VP";
import Cities from "./Cities";
import Admin from '../Admin/Admin';
export default function Maincontent() { 
    return (
          <main>
        <Banner  /> 
        <Special titleEn='Special events' titleVi='Sự kiện đặc biệt'/>
        <ForYou  category='ForYou' titleEn='Tet Promotion' titleVi='Ưu đãi Tết'/>
        <ThisWeekend/>
        <VP/>
       <Section category='Music' titleEn="Music" titleVi="Nhạc sống"/>
       <Section category='TheaterAndArt' titleEn="Theater & Art" titleVi="Sân khấu và nghệ thuật"/>
       <Section category='AttAndExp' titleEn="Attraction & Experience" titleVi="Tham quan và trải nghiệm"/>
       <Section category='Other' titleEn="Others" titleVi="Thể loại khác"/>
       <Section category='WorkShop' titleEn="WorkShop" titleVi="Hội thảo & WorkShop"/>
        <Cities  category='City' titleEn="Exciting Destination" titleVi="Điểm đến thú vị"/>  
       
        </main>
        
    )
}