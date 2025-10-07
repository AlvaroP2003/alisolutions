import React from "react";
import { MdPerson, MdLocationOn, MdSchool, MdWork, MdCode } from "react-icons/md";

export default function BasicInfo() {
  const aboutMeDetails = [
    {
      label: "Name",
      value: "Alvaro Placido",
      icon: <MdPerson className="text-neutral-200 text-2xl" />
    },
    {
      label: "Location",
      value: "Somserset West, South Africa",
      icon: <MdLocationOn className="text-neutral-200 text-2xl" />
    },
    {
      label: "Education",
      value: "Information Technology & Web Development",
      icon: <MdSchool className="text-neutral-200 text-2xl" />
    },
    {
      label: "Occupation",
      value: "Full Stack Developer",
      icon: <MdWork className="text-neutral-200 text-2xl" />
    },
    {
      label: "Skills",
      value: "UI/UX Design, SEO, Web Development",
      icon: <MdCode className="text-neutral-200 text-2xl" />
    }
  ];

  return (
    <div className=" p-4 rounded w-[400px] lg:w-[600px]">
      {/* About Me */}
      <h2 className="text-neutral-100 text-2xl font-bold mb-2">About Me</h2>
      <p className="text-neutral-400 mb-3">
       Hi, I’m Alvaro Placido — a software developer who loves turning ideas into clean, functional, and good-looking digital experiences. I build modern websites and web apps that don’t just work well, but actually make life easier for the people using them. I’m especially passionate about helping local businesses grow online — whether that means crafting a custom web app, building a sleek website, or fine-tuning a user interface that feels effortless. I like to keep things practical, creative, and fun — because great tech should feel that way too.
      </p>

      {/* About Me Details */}
      <div className="flex flex-wrap gap-2">
        {aboutMeDetails.map((item, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center w-[100%] lg:w-[49%] bg-neutral-900 border border-neutral-800 rounded p-2 hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <div className="w-[40px] h-[40px] bg-neutral-950 rounded flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-neutral-400 text-xs">{item.label}</p>
              <p className="text-neutral-200 text-xs">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}