
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
import MoreConTent from "./MoreContent/MoreContent.jsx"
import { LanguageContext } from './Context.jsx';
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
   <LanguageContext.Provider value={{Language,setLanguage}}>
    <Header Language={Language} Setlanguage={setLanguage}></Header>
    <BrowserRouter>
   
    <Routes>
        <Route path="/" element={ <>
           <Navmenu Language={Language} ></Navmenu>
          <Maincontent/> 
          </>}/>
      <Route path="/MoreConTent/:titleSearch" element={<MoreConTent Language={Language}/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer Language={Language} Setlanguage={setLanguage}/>
   </LanguageContext.Provider>
   </>
  )
}

export default App
