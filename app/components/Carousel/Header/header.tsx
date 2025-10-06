import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hamburger from "hamburger-react";

export default function Header() {

const headerData = [
  { title: 'MY STORY', link: 'about' },
  { title: 'PROJECTS', link: 'projects' },
  { title: 'EDUCATION', link: 'education' },
  { title: 'CONTACT ME', link: 'contact' }
];

 useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger)

  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "bottom top",
      toggleActions: "play none none reverse",
    },
  })

  navTween.fromTo(
    "header",
    {
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
    },
    {
      backgroundColor: "##0a0a0a",
      backdropFilter: "blur(10px)",
      duration: 0.6,
      ease: "power1.inOut",
    }
  )
})



    return (
        <header className="h-[12vh] flex items-center justify-between">
              <Link href='#home' className="hover:scale-105 scale-60 lg:scale-100 transition-all">
                <Image
                    src="/logo-white.png"
                    alt="Logo"
                    width={90}
                    height={90}
                  />
              </Link>
            
              <div className="gap-5 items-center hidden lg:flex">
                <nav>
                    <ul className="flex gap-15">
                      {headerData.map((item,index) => (
                        <li key={index}>
                        <Link  href={`#${item.link}`} className="header-items text-neutral-400 hover:text-white transition-all cursor-pointer">
                            {item.title}
                        </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
              </div>

              <div className="text-neutral-50 block lg:hidden">
                <Hamburger size={20}/>
              </div>
                  
         </header>
    )
}