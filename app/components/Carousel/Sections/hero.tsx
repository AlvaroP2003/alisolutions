import Image from "next/image";


export default function Hero() {

    return (
        <section id='home' className="relative h-[85vh] flex lg:flex-row flex-col-reverse items-center">
            <Image src='/gradient.png' fill alt="bg-gradient" className="absolute inset-0 opacity-50 z-0"/>

            {/* BLur Effect */}
            <div className="h-0 w-[40rem] absolute top-[30%] right-[-5%] shadow-[0_0_900px_20px_#00C48C] -rotate-[30deg]"></div>

            <div className="z-10">
              <h1 className="title text-5xl lg:text-8xl text-neutral-50 mb-1">Ali Solutions</h1>
              <h2 className="subtitle text-lg lg:text-4xl mb-2 text-neutral-200">SOFTWARE DEVELOPER</h2> {/* Animate to swtich between different h2*/}
              {/* <h2 className="subtitle text-4xl mb-2 text-neutral-300">WEB DESIGNER</h2>
              <h2 className="subtitle text-4xl mb-2 text-neutral-300">CREATOR</h2>
              <h2 className="subtitle text-4xl mb-2 text-neutral-300">ENTREPRENEUR</h2> */}
              <p className="hero-text text-xs lg:text-base text-neutral-400 mb-10">"Talk is cheap. Show me the code." — Linus Torvalds (Creator of Linux)</p>
                <div className="flex gap-2 mb-4">
                    <button className="w-[180px] h-[45px] hero-button text-sm hero-button bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg shadow-white hover:border-white hover:bg-white hover:shadow-md hover:text-neutral-950 transition-all cursor-pointer">Let's build together</button>
                    <button className="w-[180px] h-[45px] text-sm border border-neutral-800 text-neutral-300 rounded-lg hover:border-neutral-300 hover:text-white transition-all cursor-pointer">Browse Portfolio</button>
                </div>
            </div>

            <div className="flex flex-1 justify-center h-fit">
            </div>
      </section>

    )
}