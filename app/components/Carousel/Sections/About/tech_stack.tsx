import React from "react";

export default function TechStack() {
  const techStack = [
    {
      category: "Frontend",
      stack: ["React", "React Native", "Next.js", "Expo", "Tailwind CSS", "HTML5", "CSS3", "Vite", "JavaScript", "TypeScript", "Figma"]
    },
    {
      category: "Backend / Database",
      stack: ["Supabase", "PostgreSQL"]
    },
    {
      category: "DevOps / Deployment",
      stack: ["Git", "GitHub", "Vercel", "Netlify"]
    },
    {
      category: "E-commerce",
      stack: ["Shopify"]
    }
  ];

  return (
    <div className="p-4 rounded w-[600px]">
      <h2 className="text-neutral-200 text-2xl font-bold mb-4">Tech Stack</h2>
      {techStack.map((item, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-neutral-300 mb-2">{item.category}</h3>
          <div className="flex gap-2.5 flex-wrap">
            {item.stack.map((tech, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-full px-4 py-1 text-sm text-neutral-400 cursor-pointer hover:bg-neutral-800 hover:text-white transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
