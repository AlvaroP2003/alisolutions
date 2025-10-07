'use client'
import Image from "next/image"
import { useState } from "react"
import BasicInfo from "./basic_info"
import TechStack from "./tech_stack"


enum ActiveTab  {
  Info = 'info',
  Stack = 'stack'
}

export default function MyStory() {

  const [activeTab,setActiveTab] = useState<ActiveTab>(ActiveTab.Info)


    return (
       <section id="about" className="relative flex items-center justify-center lg:h-[100vh] mb-[10vh]">

          <div className="relative flex gap-5 flex-col lg:flex-row">
            

            <Image
              className="main-img rounded-xl object-cover"
              src="/about-me.webp"
              alt="Alvaro Placido"
              width={400}
              height={600}
            />

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
                  className="flex transition-transform duration-100 ease-in-out"
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