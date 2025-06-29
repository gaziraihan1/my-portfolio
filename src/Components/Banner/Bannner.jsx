import React from 'react';
import { motion } from "framer-motion";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Bannner = () => {
    return (
        <div className='flex flex-col-reverse items-center md:flex-row my-6 md:my-10 lg:my-14 2xl:my-18 lg:min-h-[40%] lg:max-h-[60%] gap-6 md:gap-8 lg:gap-12'>
            <div className='text-center md:text-left md:w-[60%] '>
        <motion.h2 animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "300% 300%",
      }} className="text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500">
            Mohammad Raihan Gazi
        </motion.h2>
        <motion.h4 animate={{
        borderColor: [
          "#ff0000", // Red
          "#ff9900", // Orange
          "#ffff00", // Yellow
          "#00ff00", // Green
          "#00ffff", // Cyan
          "#ff0000", // Red again to loop
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }} className='text-lg md:text-xl xl:text-2xl font-medium mt-4 inline-block pl-0.5 border-s-2 rounded-full '>
            Mern/Full stack Developer
        </motion.h4>
        <p className='text-sm md:text-base xl:text-lg text-gray-200 my-2 lg:my-4'>
            I'm a passionate MERN stack developer crafting modern, responsive web applications using MongoDB, Express.js, React, and Node.js. I love building fast, clean, and user-focused digital experiences.
        </p>
        <ul className='flex my-4 lg:my-6 gap-8 justify-center md:justify-start'>
            <li>
                <a href="">
                    <FaGithub size={24}/>
                </a>
            </li>
            <li>
                <a href="">
                    <FaLinkedin size={24}/>
                </a>
            </li>
            <li>
                <a href="
                ">
                <FaXTwitter size={24}/>
                </a>
            </li>
        </ul>
            </div>
            <div className='flex-1 w-3/5 sm:w-4/5 md:w-11/12 lg:w-4/5 object-cover mx-auto relative'>
                <img className='p-2 md:p-4 border-b-2 border-yellow-500 lg:border-green-600 rounded-full' src="\portfolio-image_1.png" alt="" />
                <div className='absolute top-12 skew-2 rotate-12 -z-10 rounded-t-full rounded-b-full left-6 w-[90%] h-[60%] bg-gradient-to-tl from-gray-200  to-green-500'>
                </div>
                
            </div>
        </div>
    );
};

export default Bannner;