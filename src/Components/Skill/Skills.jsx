import React from 'react';
import {motion} from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiVercel, SiNetlify,  SiFirebase } from 'react-icons/si';


const techStack = [
  { name: 'HTML5', icon: <FaHtml5 size={64} className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={64} className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} className="text-cyan-500" /> },
  { name: 'JavaScript', icon: <SiJavascript size={64} className="text-yellow-400" /> },
  { name: 'ReactJS', icon: <FaReact size={64} className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={64} className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress size={64} className="text-gray-600" /> },
  { name: 'MongoDB', icon: <SiMongodb size={64} className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub size={64} className="text-white rounded-full p-1" /> },
  { name: 'Vercel', icon: <SiVercel size={64} className="text-black" /> },
  { name: 'Netlify', icon: <SiNetlify size={64} className="text-teal-400" /> },
  { name: 'Firebase', icon: <SiFirebase size={64} className="text-yellow-500" /> }
];


const Skills = () => {
    return (
        <div className="mt-8 md:mt-14 lg:mt-20 2xl:mt-28">
  <div className="relative inline-block">
    <h1 className="text-xl text-gray-200 font-semibold md:text-2xl lg:text-3xl 2xl:text-4xl">
      Skills
    </h1>
    <motion.span
      className="absolute w-full h-[2px] -bottom-3 left-0 bg-blue-500 rounded-full"
      animate={{
        backgroundColor: ["#6b7280", "#3b82f6", "#6b7280"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  </div>

  <div className="mt-8 md:mt-6 lg:mt-10">
    <p className="lg:text-lg 2xl:text-xl mb-6 text-gray-300 text-center">
      I have skills and knowledge in various technologies for web development, hosting, and tools.
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 border px-4 md:px-8 py-8 md:py-16 border-gray-700 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.4)]">
      {techStack.map((logo, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-center p-3 rounded-lg transition-all duration-300 group"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-700/50 to-gray-800/50 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
            <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
              {logo.icon}
            </span>
          </div>
          <span className="mt-3 text-sm md:text-base font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    );
};

export default Skills;