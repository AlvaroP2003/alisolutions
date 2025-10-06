'use client'

import Header from "./components/Carousel/Header/header";
import Hero from "./components/Carousel/Sections/hero";
import Carousel from "./components/Carousel/Carousel/carousel";
import About from "./components/Carousel/Sections/About/about";
import Projects from "./components/Carousel/Sections/projects";
import Education from "./components/Carousel/Sections/education";
import Contact from "./components/Carousel/Sections/contact";


export default function Home() {

  return (
    <main className="relative px-7.5 lg:px-70 flex flex-col">
        <Header/>
        <Hero/>
        <Carousel/>
        <About/>
        <Projects/>
        <Education/>
        <Contact/> 
    </main>
  );
}
