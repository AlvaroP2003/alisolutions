import Image from "next/image"
import Link from "next/link"
import Hamburger from "hamburger-react";
import { useState } from "react"

interface HeaderProps {
  showOverlay: boolean;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({showOverlay,setShowOverlay}: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false)

  const headerData = [
    { title: 'My Story', link: 'about' },
    { title: 'Projects', link: 'projects' },
    { title: 'Education', link: 'education' },
    { title: 'Contact Me', link: 'contact' }
  ];

  const toggleMenu = () => {
      setShowOverlay(!showOverlay)
      setShowMenu(!showMenu)
  }


    return (
        <header className="h-[12vh] flex items-center justify-between sticky top-0 px-5 lg:px-15 z-50">

              <Link href='#home' className="relative w-10 h-10 lg:w-15 lg:h-15">
                <Image
                  src="/logo-white.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                   sizes="(max-width: 1024px) 2.5rem, 7rem"
                />
              </Link>

            
                <nav className="relative border border-neutral-800 rounded-full p-1 hidden lg:block backdrop-blur-md bg-neutral-900/50">
                    <ul className="flex">
                      {headerData.map((item,index) => (
                        <li key={index} className="flex">
                        <Link  href={`#${item.link}`} className="header-items px-10 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-all rounded-full">
                            {item.title}
                        </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

              <button 
                onClick={() => toggleMenu()}
                className="text-neutral-50 block lg:hidden bg-neutral-950 border border-neutral-900 rounded-lg">
                <Hamburger toggled={showMenu} size={20}/>
              </button>

              
              {showMenu ?
              <div className="absolute right-5 top-22 bg-neutral-950/80 backdrop-blur-2xl border border-neutral-900 p-5 w-[250px] rounded-lg z-50">
                <ul className="flex flex-col gap-5 text-neutral-200">
                    {headerData.map((item,index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            setShowOverlay(false)
                            setShowMenu(false)
                          }
                          }
                          href={`#${item.link}`}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              </div> 
              : null
                  }
                  
         </header>
    )
}