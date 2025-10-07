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

    return (
        <header className="h-[10vh] flex items-center justify-between sticky top-0 px-5 lg:px-10 z-50">
              <Link href='#home' className="hover:scale-105 scale-60 lg:scale-100 transition-all">
                <Image
                    src="/logo-white.png"
                    alt="Logo"
                    width={90}
                    height={90}
                  />
              </Link>
            
                <nav className="relative border border-neutral-800 rounded-full p-1 hidden lg:block backdrop-blur-md bg-neutral-900/50">
                    <ul className="flex">
                      {headerData.map((item,index) => (
                        <li key={index} className="flex">
                        <Link  href={`#${item.link}`} className="header-items text-sm px-10 py-3 text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-all rounded-full">
                            {item.title}
                        </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

              <div className="text-neutral-50 block lg:hidden bg-neutral-900 border border-neutral-800 rounded-lg">
                <Hamburger size={20}/>
              </div>
                  
         </header>
    )
}