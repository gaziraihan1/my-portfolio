import React from 'react';
import {motion} from 'framer-motion';

const logos = 
[
    {logo: "/html.png", name: 'HTML'},
    {logo: "/css.png", name: 'CSS'},
    {logo: "/javascript.png", name: 'JavaScript'},
    {logo: "/react-2.svg", name: 'React'},
    {logo: "/nodejsLight.svg", name: "Node JS"},
    {logo: "/mongodb-logo.png", name: "MongoDB"},
    {logo: "/github-logo.png", name: 'Github'},
    {logo: "/firebase-logo.png", name: 'Firebase'}
]

const Skills = () => {
    console.log(logos)
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
        <div className='flex flex-wrap items-stretch justify-center gap-16 bg-base-200 bg-opacity-30 backdrop-blur-lg border px-8 py-16 border-gray-700 rounded shadow-[1px_1px_10px] shadow-gray-800'>
          {
            logos.map((logo, i) => <div key={i} className='flex-col p-4 gap-2 border border-gray-800 bg-base-200 bg-opacity-30 backdrop-blur-md rounded-lg flex items-center justify-between w-[150px] shadow-[1px_1px_20px_black] '><img className='w-22 flex justify-center items-center object-center  aspect-square' src={logo.logo} alt="" /> <span className='text-lg lg:text-xl font-bold text-green-500'>{logo.name}</span></div>)
          }
        </div>
      </div>
        </div>
    );
};

export default Skills;