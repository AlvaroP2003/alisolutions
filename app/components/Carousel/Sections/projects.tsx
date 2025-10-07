import { title } from "process"
import Image from "next/image";
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
  SiVite,
} from 'react-icons/si';


export default function Projects() {

   const projectsData = [
    {
        title: 'Cliqserve Business Companions',
        thumbnail: '/cliqserve.png',
        tech: [SiReact, SiTailwindcss, SiExpo, SiSupabase, SiVercel],
        tag: 'coming to playstore',
        description: 'Helps business owners manage projects, track metrics, and stay connected to their operations anytime, anywhere.'
    },
    {
        title: "Swipen' Snack",
        thumbnail: '/swipensnack.png',
        tech: [SiReact, SiTailwindcss, SiExpo, SiSupabase],
        tag: 'coming to playstore',
        description: 'Swipe Snack helps two users quickly swipe through food options and decide what to eat together, solving hangry disputes before they start.'
    },
    {
        title: 'Farmers Market Landing Page',
        thumbnail: '/farmers-market.webp',
        tech: [  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNetlify],
        tag: '',
        description: 'A modern website for a local farmers market stall, highlighting the stall’s products, story, and contact information for easy browsing and ordering'
    },
    {
        title: 'Real Estate Website',
        thumbnail: '/northsideliving.png',
        tech: [SiReact, SiTailwindcss, SiVercel],
         tag: '',
        description: 'A real estate platform showcasing property listings with a sleek, modern design for an intuitive browsing experience.'
    }
    ];


    return (
        <section id="projects" className="relative mb-[10vh]">
            <h2 className="text-neutral-100 text-4xl font-bold mb-2">Projects</h2>
            <p className="text-neutral-400 my-5">Here’s a selection of my recent work—projects that showcase my skills, creativity, and passion for building practical, high-quality solutions. Each project reflects my focus on clean, efficient code and user-friendly design, whether it’s a sleek web app, a responsive website, or a unique digital experience. Take a look and see how I bring ideas to life in the real world.</p>


                    <div className="flex flex-col lg:flex-row flex-wrap gap-2.5 py-5">
                        {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative backdrop-blur-2xl bg-neutral-900/40 w-[100%] h-[350px] lg:w-[49%] lg:h-[470px] rounded-lg p-4 border border-neutral-800 hover:bg-neutral-900 transition-all cursor-pointer"
                        >
                            <div className="relative w-full h-[50%] lg:h-[70%] overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                {project.tag ?
                                <div className="absolute bottom-3 right-4 
                                                bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-600 
                                                px-4 py-2 rounded-full text-xs text-white shadow-md
                                                ">
                                {project.tag}
                                </div>
                                : ''}
                            </div>
                            <div className="flex flex-col">
                                    <h3 className="text-neutral-50 lg:text-lg lg:font-bold mb-2.5">{project.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex gap-2.5">
                                        {project.tech.map((Icon, techIndex) => (
                                        <div key={techIndex} className="text-neutral-400 lg:text-lg">
                                        <Icon/>
                                        </div>
                                    ))}
                                    </div>
                                  
                            </div>
                        </div>
                        ))}
                    </div> 
        </section>
    )
}