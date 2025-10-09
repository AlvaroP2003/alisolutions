
import { time } from "console";
import Image from "next/image";

export default function Education() {

const timelineData = [
  {
    image: '/education_curro.jpg',
    school: "Curro Nelspruit",
    subject: "Matric Graduation",
    duration: '2021',
    tasks: [
      "2× Top 10 Alumni Award",
      "Computer Applications Technology"
    ]
  },
   {
    image: '/education_ctu.png',
    school: "CTU Training Solutions",
    subject: "Information Technology",
    duration: '2023',
    tasks: [
      "Python",
      "PostgreSQL",
      "Microsoft Azure Data Fundamentals"
    ]
  },
   {
    image: '/education_codespace.png',
    school: "Codespace Academy",
    subject: "Software Development",
    duration: '2024-2025',
    tasks: [
      "Website Development",
      "UI and UX Experience"
    ]
  },
];

    return (
        <section id="education" className="h-[100vh] flex flex-col justify-center mb-[10vh]">
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">Education</h2>
            <p className="text-neutral-400 mb-15">Throughout my educational journey, I’ve cultivated a strong foundation in technology and problem-solving. From completing my Matric at Curro Nelspruit to diving deep into Information Technology at CTU Training Solutions, and further honing my skills in Software Development at Codespace Academy, I’ve continuously sought opportunities to learn, innovate, and grow. Each experience has shaped my technical expertise and fueled my passion for creating solutions that make a real impact</p>


            <div className="flex justify-around mb-5">
               {timelineData.map((item,index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-neutral-900 border border-neutral-800 w-[250px] h-[300px] rounded cursor-pointer">
                  <div className="relative w-[125px] h-[125px] rounded-full overflow-hidden mb-5">
                    <Image 
                      src={item.image}
                      alt={item.school}
                      fill
                      className="object-cover"/>
                  </div>

                  <h3 className="text-lg text-neutral-200 mb-1">{item.school}</h3>
                  <h4 className="text-neutral-400">{item.subject}</h4>
                </div>
               ))}
            </div>

             <div className="relative flex justify-around mb-4">
                <div className="dots w-[20px] h-[20px] bg-neutral-200 rounded-full hover:scale-125 transition-all cursor-pointer"></div>
                <div className="dots w-[20px] h-[20px] bg-neutral-200 rounded-full hover:scale-125 transition-all cursor-pointer"></div>
                <div className="dots w-[20px] h-[20px] bg-neutral-200 rounded-full hover:scale-125 transition-all cursor-pointer"></div>

                <div className="absolute line bg-neutral-200 h-[2px] w-[68%] top-[50%] z-0"></div>
              </div>

               <div className="relative flex justify-around">
                <p className="text-neutral-400">2022-2023</p>
                <p className="text-neutral-400">2022-2023</p>
                <p className="text-neutral-400">2022-2023</p>
              </div>

        </section>
    )
}