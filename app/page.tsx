'use client'

import Header from "./Components/header";
import Hero from "./Sections/Hero";
import Carousel from "./Components/carousel";
import AboutMe from "./Sections/About";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
import { useState } from "react";
import Overlay from "./Components/overlay";

export default function Home() {

  const [showOverlay,setShowOverlay] = useState(false)

  return (
    <div className="relative">
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
