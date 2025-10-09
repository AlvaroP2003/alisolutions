'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import BasicInfo from "./basic-info"
import TechStack from "./techs-stack"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"


enum ActiveTab  {
  Info = 'info',
  Stack = 'stack'
}

export default function AboutMe() {

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

      gsap.from(".image", {
        scrollTrigger: {
          trigger: '.image',
          start: 'top 100%',
          scrub:true,
          toggleActions: "restart none none none",
        },
        x : -200,
        rotate:-15,
        duration: 1,
      })

  },[])

  

  // --- --- --- 


  const [activeTab,setActiveTab] = useState<ActiveTab>(ActiveTab.Info)


    return (
       <section id="about" className="relative flex items-center justify-center lg:h-[100vh] mb-[10vh]">

          <div className="relative flex gap-5 flex-col items-center lg:flex-row">
            
            <div className="image relative w-[95%] lg:w-[400px] h-[600px]">
              <Image
                className="main-img rounded-xl object-cover"
                src="/about-me.webp"
                alt="Alvaro Placido"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          

            <div className="relative content">
              <div className="flex gap-2.5 lg:gap-5 mb-4 justify-center">
                <button
                  className={`cursor-pointer w-[170px] lg:w-[200px] h-[40px] ${
                    activeTab === ActiveTab.Info ? 'bg-neutral-900 rounded-full text-white border border-neutral-800' : 'text-neutral-400 hover:text-neutral-100'
                  }`}
                  onClick={() => setActiveTab(ActiveTab.Info)}
                >
                  Basic Info
                </button>
                <button
                  className={`cursor-pointer w-[170px] lg:w-[200px] h-[40px] ${
                    activeTab === ActiveTab.Stack ? 'bg-neutral-900 rounded-full text-white border border-neutral-800' : 'text-neutral-400 hover:text-neutral-100'
                  }`}
                  onClick={() => setActiveTab(ActiveTab.Stack)}
                >
                  Tech Stack
                </button>
              </div>

             <div className="relative w-[400px] lg:w-[600px] overflow-hidden">
               <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform:
                      activeTab === ActiveTab.Info
                        ? 'translateX(0)'
                        : `translateX(-${typeof window !== 'undefined' && window.innerWidth >= 1024 ? 600 : 400}px)`,
                  }}
                >
                <div className="w-[600px]">
                  <BasicInfo />
                </div>
                <div className="w-[600px]">
                  <TechStack />
                </div>
              </div>
            </div>
            
            </div>

            </div>

        </section>
    )
}