
import Navmenu from './Navmenu/Navmenu.jsx';
import './App.css'
import { useState } from 'react'
import Header from './Head/Header.jsx'
import Maincontent from './Maincontent/Maincontent.jsx';
import Footer from './Footer/Footer.jsx';
function App() {
  const[Language,setLanguage]=useState("vi");
  return ( 
   <>
    <Header Language={Language} Setlanguage={setLanguage}></Header>
    <Navmenu Language={Language} ></Navmenu>
    <Maincontent Language={Language}></Maincontent>
    <Footer Language={Language} Setlanguage={setLanguage}/>
   </>
  )
}

export default App
