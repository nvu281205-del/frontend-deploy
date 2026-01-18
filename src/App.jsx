
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
import MoreConTent from "./MoreContent/MoreContent.jsx"
import { LanguageContext } from './Context.jsx';
import Detail from './Detail/Detail.jsx';
import MoreContent from './MoreContent/MoreContent.jsx';
import BuyTicket from './BuyTicket/BuyTicket.jsx';
import BookTicket from './BuyTicket/BookTicket.jsx';
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
   <LanguageContext.Provider value={{Language,setLanguage}}>
   
    <BrowserRouter>
   
    <Routes>
        <Route path="/" element={ <>
          <Header Language={Language} Setlanguage={setLanguage}></Header>
           <Navmenu Language={Language} ></Navmenu>
          <Maincontent/> 
           <Footer Language={Language} Setlanguage={setLanguage}/>
          </>}/>
      
       <Route path="/MoreContent" element={<>
       <Header Language={Language} Setlanguage={setLanguage}></Header>
       <MoreContent Language={Language}/>
       </>
        }/>

      <Route path='/Detail/:id' element={<>
        <Header Language={Language} Setlanguage={setLanguage}></Header>
           <Navmenu Language={Language} ></Navmenu>
      <Detail/>
       <Footer Language={Language} Setlanguage={setLanguage}/>
      </>
        }>
        </Route>

        <Route path='/BuyTicket/:id' element={
          <>
           <Header Language={Language} Setlanguage={setLanguage}></Header>
           <BuyTicket/>
          </>
        }>
        </Route>

        <Route path='/BookTicket/:id' element={
          <>
          <Header></Header>
          <BookTicket/>
          </>
        }> 

        </Route>
    </Routes>
    </BrowserRouter>
    
   
   </LanguageContext.Provider>
   </>
  )
}

export default App
