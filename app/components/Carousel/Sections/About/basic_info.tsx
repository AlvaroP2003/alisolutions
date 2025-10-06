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
    <div className=" p-4 rounded w-[600px]">
      {/* About Me */}
      <h2 className="text-neutral-100 text-2xl font-bold mb-2">About Me</h2>
      <p className="text-neutral-400 mb-3">
        Hi, I'm Alvaro Placido. I’m a software developer who loves writing clean, scalable code
        that actually solves problems. I enjoy diving into modern technologies and frameworks,
        but what really drives me is helping local businesses grow and thrive online. From
        building custom web apps to designing smooth, user-friendly interfaces, I focus on
        creating solutions that make a real difference for the people and communities I work with.
      </p>

      {/* About Me Details */}
      <div className="flex flex-wrap gap-2">
        {aboutMeDetails.map((item, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center w-[49%] bg-neutral-900/40 border border-neutral-900 rounded p-2 hover:bg-neutral-800 transition-all cursor-pointer"
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
