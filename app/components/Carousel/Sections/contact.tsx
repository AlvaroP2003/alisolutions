import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import Image from "next/image";

const socialsData = [
  {
    icon: SiWhatsapp,
    content: "WhatsApp",
    href: "https://wa.me/yourphonenumber", // use your full phone number with country code
  },
   {
    icon: MdEmail,
    content: "Email",
    href: "mailto:youremail@example.com",
  },
  {
    icon: SiLinkedin,
    content: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
];



export default function Contact() {
    return (
        <section id="contact" className="relative h-[80vh] flex lg:flex-row flex-col justify-between items-center">
          <Image src='/gradient.png' fill alt="bg-gradient" className="absolute inset-0 opacity-50 -z-0"/>

           <div className="flex flex-1 h-full justify-center z-20">
            </div>

            <div className="flex flex-col flex-1 gap-4 text-end z-10">
                <h1 className="text-neutral-50 text-6xl lg:text-8xl">Contact Me</h1>
                <p className="text-neutral-400 text-sm lg:text-md">I’m always excited to connect with like-minded individuals, potential collaborators, or anyone interested in bringing new ideas to life. Whether you have a project in mind, a question about my work, or just want to say hello, feel free to reach out. I’ll do my best to get back to you as soon as possible — let’s create something meaningful together!</p>
                <div className="flex justify-end gap-2">
                    {socialsData.map((item,index) => (
                        <a key={index} href={item.href} className="social-links bg-neutral-900 border border-neutral-800 px-5 py-1.5 rounded flex gap-2 text-sm lg:text-md items-center text-neutral-300 hover:text-neutral-950 hover:bg-white hover:border-white transition-all cursor-pointer hover:-translate-y-[5px]">
                            <item.icon/>
                            <p>{item.content}</p>
                        </a>
                    ))}
                </div>

                
            </div>

            {/* BLur Effect */}
            <div className="h-0 w-[40rem] absolute bottom-[0] left-[-5%] shadow-[0_0_900px_20px_#00C48C] -rotate-[30deg] z-10"></div>

        </section>
    )
}