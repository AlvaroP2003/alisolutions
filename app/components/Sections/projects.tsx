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
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi';



export default function Projects() {


  const projectsData = [
    {
        title: 'Cliqserve Business Companions',
        thumbnail: '/cliqserve.png',
        tech: [SiReact, SiTailwindcss, SiExpo, SiSupabase, SiVercel],
        tag: 'coming to playstore',
        description: 'Helps business owners manage projects, track metrics, and stay connected to their operations anytime, anywhere.',
    },
    {
        title: "Swipen' Snack",
        thumbnail: '/swipensnack.png',
        tech: [SiReact, SiTailwindcss, SiExpo, SiSupabase],
        tag: 'coming to playstore',
        description: 'Swipe Snack helps two users quickly swipe through food options and decide what to eat together, solving hangry disputes before they start.',
    },
    {
        title: 'Farmers Market Landing Page',
        thumbnail: '/farmers-market.webp',
        tech: [SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNetlify],
        tag: '',
        description: 'A modern website for a local farmers market stall, highlighting the stall’s products, story, and contact information for easy browsing and ordering',
        path: 'https://rorbinah-handcrafted.netlify.app/'
    },
    {
        title: 'Real Estate Website',
        thumbnail: '/northsideliving.png',
        tech: [SiReact, SiTailwindcss, SiVercel],
        tag: '',
        description: 'A real estate platform showcasing property listings with a sleek, modern design for an intuitive browsing experience.',
        path: 'https://northsideliving.netlify.app/'
    }
];



    return (
        <section id="projects" className="relative mb-[10vh]">
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">Projects</h2>
            <p className="text-neutral-400 my-5">Here’s a selection of my recent work—projects that showcase my skills, creativity, and passion for building practical, high-quality solutions. Each project reflects my focus on clean, efficient code and user-friendly design, whether it’s a sleek web app, a responsive website, or a unique digital experience. Take a look and see how I bring ideas to life in the real world.</p>


                    <div className="flex flex-col lg:flex-row flex-wrap gap-2.5 py-5">
                        {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-2xl bg-neutral-900/40 w-[100%] h-[350px] lg:w-[49%] lg:h-[470px] rounded-lg p-4 border border-neutral-800 hover:bg-neutral-900 transition-all cursor-pointer"
                        >
                            <div className="relative w-full h-[50%] lg:h-[70%] overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                               {project.tag && (
                                    <div className="absolute bottom-3 right-4
                                                    px-4 py-1 rounded-full text-xs font-medium text-white
                                                    bg-gradient-to-r from-emerald-500 to-emerald-700
                                                    shadow-sm">
                                        {project.tag}
                                    </div>
                                    )}
                            </div>
                            <div className="flex flex-col">
                                    <h3 className="text-neutral-50 lg:text-lg lg:font-bold mb-2.5">{project.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2.5">
                                                {project.tech.map((Icon, techIndex) => (
                                                <div key={techIndex} className="text-neutral-400 lg:text-lg hover:text-white transition-all hover:scale-110">
                                                <Icon/>
                                                </div>
                                            ))}
                                        </div>
                                        {project.path &&
                                        <Link 
                                            href={project.path}
                                            target="_blank"
                                            className="flex gap-2.5 items-center text-neutral-400 hover:text-emerald-500 transition-all group">
                                            <p className="text-sm">Check it Out</p>
                                            <HiArrowRight size={18} className="-rotate-45"/>
                                        </Link>
                                        }
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div> 
        </section>
    )
}