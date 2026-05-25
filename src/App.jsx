import { useEffect, useState } from "react";
import "./App.css";
import pot from "./assets/pot2.webp";
import Passwordcheck from "./Passwordcheck";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Calculator from "./Calculator";
import Word from "./Word";
import Resumeform from "./Resumeform";
import ResumePreview from "./ResumePreview";
import TrafficLight from "./TrafficLight";

export default function App() {

    const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: []
  });




  return (
   /*  <div className="scene">
      <div className="pot-area">
        {startMilk && (
          <div
            className="milk"
            onAnimationEnd={() => setShowWish(true)}
          />
        )}

        <img src={pot} alt="Pongal Pot" className="pot-img" />
      </div>

      <button className="pongal-btn">Pongal</button>

      {showWish && <h1 className="wish">🎉 Happy Pongal 🎉</h1>}
    </div> */
    <>
    {/*   <Passwordcheck/>
   */}

  {/*   <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route  path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
    
    </BrowserRouter> */}

  {/*   <Calculator/> */}

  {/*  <Word/> */}

   {/*  <div className="container">
      <Resumeform resumeData={resumeData} setResumeData={setResumeData} />
      <ResumePreview resumeData={resumeData} />
    </div> */}

    <TrafficLight/>
    </>
  );
}
