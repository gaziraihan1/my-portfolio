import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 85 },
      { name: "ReactJS", icon: <FaReact size={40} className="text-cyan-300" />, level: 88 },
      { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" />, level: 82 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" />, level: 80 },
      { name: "Express.js", icon: <SiExpress size={40} className="text-gray-400" />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" />, level: 70 },
    ],
  },
  {
    title: "Tools & Hosting",
    skills: [
      { name: "GitHub", icon: <FaGithub size={40} className="text-white" />, level: 85 },
      { name: "Vercel", icon: <SiVercel size={40} className="text-black dark:text-white" />, level: 80 },
      { name: "Netlify", icon: <SiNetlify size={40} className="text-teal-400" />, level: 78 },
      { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" />, level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="mt-8 md:mt-14 lg:mt-20 2xl:mt-28">
      <h2 className="text-center text-3xl font-bold text-white mb-10">💡 My Skills</h2>

      {skillCategories.map(({ title, skills }, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-blue-500 w-max">
            {title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {skills.map(({ name, icon}, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10 flex flex-col items-center gap-4 cursor-pointer hover:shadow-blue-500/40 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-white/10">{icon}</div>
                <h4 className="text-white font-medium">{name}</h4>
                
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
