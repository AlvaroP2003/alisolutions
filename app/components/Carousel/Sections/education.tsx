
import Image from "next/image";

export default function Education() {

const timelineData = [
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
    image: '/education_curro.jpg',
    school: "Curro Nelspruit",
    subject: "Matric Graduation",
    duration: '2021',
    tasks: [
      "2× Top 10 Alumni Award",
      "Computer Applications Technology"
    ]
  }
];

    return (
        <section id="education" className="h-[100vh] flex flex-col justify-center mb-[10vh]">
            <h2 className="text-neutral-100 text-3xl mb-4">Education</h2>
            <p className="text-neutral-400">Throughout my educational journey, I’ve cultivated a strong foundation in technology and problem-solving. From completing my Matric at Curro Nelspruit to diving deep into Information Technology at CTU Training Solutions, and further honing my skills in Software Development at Codespace Academy, I’ve continuously sought opportunities to learn, innovate, and grow. Each experience has shaped my technical expertise and fueled my passion for creating solutions that make a real impact</p>


            <div className="flex flex-col justify-between mt-20 h-[60vh] lg:px-20">
                {timelineData.map((item,index) => (
                    <div key={index} className="timeline-item relative flex justify-between">
                        <div className="flex gap-5">
                            <div className="relative h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] rounded-full overflow-hidden hover:scale-110 transition-all cursor-pointer">
                                <Image 
                                 src={item.image}
                                 alt={item.school}
                                 fill
                                 className="object-cover"
                                />
                            </div>

                            <div>
                              <h3 className="text-neutral-200 lg:text-lg">{item.subject}</h3>
                              <h4 className="text-neutral-400 text-sm lg:text-md">{item.school}</h4>
                            </div>

                            <div className="timeline-info absolute w-[225px] bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col px-7 py-5 gap-2.5 rounded-lg -left-[250px]">
                              <ul className="text-end flex flex-col gap-1">
                                  {item.tasks.map((i,index) => (
                                      <li key={index} className="text-neutral-400 hover:text-neutral-50 cursor-pointer text-sm transition-all">
                                        {i}
                                      </li>
                                  ))}
                                </ul>
                            </div>
                            
                        </div>

                        <div className="text-neutral-400 text-sm lg:text-base">{item.duration}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}