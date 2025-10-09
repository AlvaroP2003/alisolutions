'use client'

import Header from "./Components/Header/header";
import Hero from "./Components/Sections/hero";
import Carousel from "./Components/Carousel/carousel";
import AboutMe from "./Components/Sections/About/about";
import Projects from "./Components/Sections/projects";
import Education from "./Components/Sections/education";
import Contact from "./Components/Sections/contact";
import { useState } from "react";
import Overlay from "./Components/Overlay/overlay";
// Fixed


export default function Home() {

  const [showOverlay,setShowOverlay] = useState(false)

  return (
    <div className="relative overflow-x-hidden">
        <Header 
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}/>
        <main className="px-7.5 lg:px-50">
          <Hero/>
          <Carousel/>
          <AboutMe/>
          <Projects/>
          <Education/>
          <Contact/> 
          <Overlay showOverlay={showOverlay}/>
        </main>
    </div>
  );
}
