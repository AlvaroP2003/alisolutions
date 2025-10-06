
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';


export default function Hero() {

     useGSAP(() => {
        const herosplit = new SplitText('.title', { type : 'chars,words'})
        const paragraph = new SplitText('.subtitle', { type : 'lines'})
    
        herosplit.chars.forEach((char) => char.classList.add('text-gradient'))
    
        gsap.from(herosplit.chars, {
          yPercent: 100,
          duration: 1.8,
          ease: 'expo.out',
          stagger: 0.05
        })
    
    
        gsap.from(paragraph.lines, {
          opacity:0,
          yPercent: 100,
          duration: 1.8,
          ease: 'expo.out',
          stagger: 0.06,
          delay:1,
        })
    
      },[])

      useGSAP(() => {
        gsap.to("feTurbulence", {
          duration: 10,
          repeat: -1,
          ease: "none",
          attr: { baseFrequency: "0.02 0.03" }
        });
      }, []);


    return (
        <section id='home' className="relative h-[85vh] flex lg:flex-row flex-col-reverse items-center">
            <Image src='/gradient.png' fill alt="bg-gradient" className="absolute inset-0 opacity-50 z-0"/>

            {/* BLur Effect */}
            <div className="h-0 w-[40rem] absolute top-[30%] right-[-5%] shadow-[0_0_900px_20px_#00C48C] -rotate-[30deg]"></div>

            <div className="z-10">
              <h1 className="title text-8xl text-neutral-50 mb-1">Alvaro Placido</h1>
              <h2 className="subtitle text-lg lg:text-4xl mb-2 text-neutral-200">SOFTWARE DEVELOPER</h2> {/* Animate to swtich between different h2*/}
              {/* <h2 className="subtitle text-4xl mb-2 text-neutral-300">WEB DESIGNER</h2>
              <h2 className="subtitle text-4xl mb-2 text-neutral-300">CREATOR</h2>
              <h2 className="subtitle text-4xl mb-2 text-neutral-300">ENTREPRENEUR</h2> */}
              <p className="hero-text text-neutral-400 mb-10">"Talk is cheap. Show me the code." — Linus Torvalds (Creator of Linux)</p>
                <div className="flex gap-2 mb-4">
                    <button className="w-[180px] h-[45px] hero-button text-sm hero-button bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg shadow-white hover:border-white hover:bg-white hover:shadow-md hover:text-neutral-950 transition-all cursor-pointer">Let's build together</button>
                    <button className="w-[180px] h-[45px] text-sm border border-neutral-800 text-neutral-300 rounded-lg hover:border-neutral-300 hover:text-white transition-all cursor-pointer">Browse Portfolio</button>
                </div>
            </div>

            <div className="flex flex-1 justify-center h-fit">
            </div>
      </section>

    )
}