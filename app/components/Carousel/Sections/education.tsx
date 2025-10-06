'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      image: '/education_codespace.png',
      school: "Codespace Academy",
      subject: "Software Development",
      duration: '2024-2025',
      tasks: ["Website Development", "UI and UX Experience"]
    },
    {
      image: '/education_ctu.png',
      school: "CTU Training Solutions",
      subject: "Information Technology",
      duration: '2023',
      tasks: ["Python", "PostgreSQL", "Microsoft Azure Data Fundamentals"]
    },
    {
      image: '/education_curro.jpg',
      school: "Curro Nelspruit",
      subject: "Matric Graduation",
      duration: '2021',
      tasks: ["2× Top 10 Alumni Award", "Computer Applications Technology"]
    }
  ];

  useEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    
    if (timelineItems) {
      // Set initial state for all items
      gsap.set(timelineItems, {
        opacity: 0,
        x: -50,
        scale: 0.9
      });

      // Create staggered animation
      gsap.to(timelineItems, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, []);

  return (
    <section id="education" className="relative mb-[10vh]">
      {/* Section Title - matching projects.tsx style */}
      <h2 className="text-neutral-100 text-4xl font-bold mb-2">Education</h2>
      <p className="text-neutral-400 my-5">My educational journey has shaped my technical expertise and passion for software development. From foundational learning to specialized training, each step has contributed to building my skills in modern technologies and best practices.</p>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative py-5">
        {/* Timeline Line */}
        <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-transparent"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-item relative flex flex-col lg:flex-row items-center lg:items-start mb-12 lg:mb-16"
          >
            {/* Timeline Image as Dot */}
            <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-16 h-16 z-10">
              <Image
                src={item.image}
                alt={item.school}
                width={64}
                height={64}
                className="w-16 h-16 object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Duration above timeline */}
            <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 -top-8 z-10">
              <div className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 px-3 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                {item.duration}
              </div>
            </div>

            {/* Content Card */}
            <div className="ml-16 lg:ml-0 w-full lg:w-5/12 lg:mr-auto lg:pr-8">
              <div className="backdrop-blur-2xl bg-neutral-900/40 rounded-lg p-4 border border-neutral-800 hover:bg-neutral-900 transition-all cursor-pointer">
                {/* School and Subject */}
                <h3 className="text-neutral-50 text-lg font-bold mb-2">{item.school}</h3>
                <p className="text-neutral-400 text-sm mb-4">{item.subject}</p>

                {/* Tasks */}
                <div className="space-y-2">
                  {item.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
