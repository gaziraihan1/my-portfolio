import React from 'react';
import {motion} from 'framer-motion';
// Frameworks, Tools & Languages Icons
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
  // { name: 'VS Code', icon: <SiVisualstudio className="text-blue-500" /> },
  { name: 'Firebase', icon: <SiFirebase size={64} className="text-yellow-500" /> }
];


const Skills = () => {
    return (
        <div className="mt-12 md:mt-20 lg:mt-28 2xl:mt-36">
            <div className="relative inline-block">
        <h1 className="text-xl text-gray-200 font-semibold md:text-2xl lg:text-3xl 2xl:text-4xl ">
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
      <div className='mt-8 md:mt-6 lg:mt-10'>
        <p className='lg:text-lg 2xl:text-xl mb-4'>
            I have skill and knowledge on several technology related web development, hosting, and other tools. 
        </p>
        <div className='flex flex-wrap items-stretch justify-center gap-8 md:gap-16 bg-base-200 bg-opacity-30 backdrop-blur-lg border px-4 md:px-8 py-8 md:py-16 border-gray-700 rounded shadow-[1px_1px_10px] shadow-gray-800'>
          {
            techStack.map((logo, i) => <div key={i} className='flex-col p-4 gap-2 border border-gray-800 bg-base-200 bg-opacity-30 backdrop-blur-md rounded-lg flex items-center justify-between w-[90px] md:w-[150px] shadow-[1px_1px_20px_black] '> <span className='w-12 lg:w-14 flex justify-center items-center'>{logo.icon}</span> <span className='text-base lg:text-lg font-bold text-green-500 text-center py-0.5'>{logo.name}</span></div>)
          }
        </div>
      </div>
        </div>
    );
};

export default Skills;