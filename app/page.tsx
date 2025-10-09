'use client'

import Header from "./Components/Header";
// import Hero from "./Components/Sections/Hero";
// import Carousel from "./Components/Carousel";
// import AboutMe from "./Components/Sections/About";
// import Projects from "./Components/Sections/Projects";
import Education from "./Components/Sections/Education";
import Contact from "./Components/Sections/Contact";
import { useState } from "react";
import Overlay from "./Components/Overlay/overlay";
// Fixed


export default function Home() {

  const [showOverlay,setShowOverlay] = useState(false)

  return (
    <div className="relative">
        <Header 
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}/>
        <main className="px-7.5 lg:px-50">
          {/* <Hero/>
          <Carousel/>
          <AboutMe/>
          <Projects/> */}
          <Education/>
          <Contact/> 
          <Overlay showOverlay={showOverlay}/>
        </main>
    </div>
  );
}
