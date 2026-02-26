
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
import { LanguageContext, Token } from './Context.jsx';
import Detail from './Detail/Detail.jsx';
import MoreContent from './MoreContent/MoreContent.jsx';
import BookTicket from './BuyTicket/BookTicket.jsx';
import ScrolltoTop from './ScrolltoTop.jsx';
import MyTicket from './Head/MyTicket.jsx';
import Account from './Head/Account.jsx';
import BuyTicket from './BuyTicket/BuyTicket.jsx';
import Admin from './Admin/Admin.jsx';
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
   <LanguageContext.Provider value={Language}>
   

    <BrowserRouter>
   <ScrolltoTop/>
   <Routes>
    <Route path='/*' element={
      <>
       <Header Language={Language} Setlanguage={setLanguage}></Header>
  
    <Routes>
        <Route path="/" element={ <>
           <Navmenu></Navmenu>
          <Maincontent/> 
          </>}/>
       
       <Route path="/MoreContent/:period" element={<MoreContent/>}/>
       <Route path="/MoreContent" element={<MoreContent/>}/>
      <Route path='/Detail/:id' element={<>
           <Navmenu></Navmenu>
      <Detail/>
      </>}>
        </Route>

        <Route path='/BuyTicket/:id' element={<BuyTicket/>}></Route>
        <Route path='/BookTicket/:id' element={<BookTicket/>}></Route>
         <Route path='/MyTicket' element={<MyTicket/>}></Route>
         <Route path='/Account' element={<Account/>}/>        
          
    </Routes>
      <Footer Language={Language} Setlanguage={setLanguage}/>
      </>
    }></Route>
     <Route path='/Admin' element={<Admin/>}></Route>

    </Routes>  
    </BrowserRouter>
   
   </LanguageContext.Provider>
   </>
  )
}

export default App
