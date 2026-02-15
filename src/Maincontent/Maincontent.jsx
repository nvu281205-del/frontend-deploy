
import Banner from './Banner'
import Special from './Special'
import "./Maincontent.css"
import Section from "./Section";
import ForYou from "./ForYou"
import ThisWeekend from "./ThisWeekend"
import VP from "./VP";
import Cities from "./Cities";
export default function Maincontent() { 
    return (
          <main>
        <Banner  /> 
        <Special category='Special'titleEn='Special events' titleVi='Sự kiện đặc biệt'/>
        <ForYou  category='ForYou' titleEn='Tet Promotion' titleVi='Ưu đãi Tết'/>
        <ThisWeekend  category1='ThisWeekend' category2='ThisMonth' />
        <VP/>
       <Section category='Music' titleEn="Music" titleVi="Nhạc sống"/>
       <Section category='TheaterAndArt' titleEn="Theater & Art" titleVi="Sân khấu và nghệ thuật"/>
       <Section category='AttAndExp' titleEn="Attraction & Experience" titleVi="Tham quan và trải nghiệm"/>
       <Section category='Others' titleEn="Others" titleVi="Thể loại khác"/>
        <Cities  category='City' titleEn="Exciting Destination" titleVi="Điểm đến thú vị"/>  
       
        </main>
        
    )
}