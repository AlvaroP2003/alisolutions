'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiShopify,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiSupabase,
  SiPostgresql,
  SiNetlify,
  SiVite
} from 'react-icons/si';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const carouselLogos = [
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiNextdotjs, color: '#FFFFFF' },  // changed from black
  { icon: SiExpo, color: '#FFFFFF' },       // changed from dark
  { icon: SiShopify, color: '#7AB55C' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiHtml5, color: '#E34F26' },
  { icon: SiCss3, color: '#1572B6' },
  { icon: SiVite, color: '#646CFF' },
  { icon: SiJavascript, color: '#F7DF1E' },
  { icon: SiTypescript, color: '#3178C6' },
  { icon: SiGit, color: '#F05032' },
  { icon: SiGithub, color: '#8250DF' },     // changed from dark
  { icon: SiVercel, color: '#FFFFFF' },     // changed from black
  { icon: SiNetlify, color: '#00C7B7' },
  { icon: SiFigma, color: '#F24E1E' },
  { icon: SiSupabase, color: '#3ECF8E' },
  { icon: SiPostgresql, color: '#336791' }
];



export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const totalWidth = container.scrollWidth / 2; // since you duplicated

    gsap.to(container, {
      x: -totalWidth,
      ease: "none",
      duration: 50,   // adjust speed
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => x % -totalWidth) // seamless wrap
      }
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-full mb-10">
      <div 
        ref={carouselRef} 
        className="flex gap-10 lg:gap-20"
      >
       {[...carouselLogos, ...carouselLogos].map(({ icon: Logo, color }, index) => (
        <div key={index}>
          <Logo 
            className="my-10 text-5xl lg:text-6xl text-neutral-800 hover:text-[var(--logo-color)] transition-all cursor-pointer" 
            style={{ '--logo-color': color } as React.CSSProperties} 
          />
        </div>
      ))}

      </div>
    </div>
  )
}
