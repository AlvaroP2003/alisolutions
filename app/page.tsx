'use client'

import Header from "./components/Carousel/Header/header";
import Hero from "./components/Carousel/Sections/hero";
import Carousel from "./components/Carousel/Carousel/carousel";
import About from "./components/Carousel/Sections/About/about";
import Projects from "./components/Carousel/Sections/projects";
import Education from "./components/Carousel/Sections/education";
import Contact from "./components/Carousel/Sections/contact";
import { useState } from "react";
import Overlay from "./components/Overlay/overlay";


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
          <About/>
          <Projects/>
          <Education/>
          <Contact/> 
          <Overlay showOverlay={showOverlay}/>
        </main>
    </div>
  );
}
