import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-12 md:mt-20 lg:mt-28 2xl:mt-36">
      <div className="relative inline-block">
        <h1 className="text-xl text-gray-200 font-semibold md:text-2xl lg:text-3xl 2xl:text-4xl ">
          About Me
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
      <div className="mt-8 md:mt-6 lg:mt-10 flex flex-col-reverse items-start lg:flex-row justify-between gap-12 md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-22">
        <div className="flex-1">
          <p className="text-base-content text-lg leading-relaxed mb-4">
            Hi! I’m <span className="font-semibold">Mohammad Raihan Gazi</span>,
            a passionate front-end developer from Dhaka, Bangladesh. I enjoy
            creating beautiful, responsive web apps using{" "}
            <span className="text-green-500 font-medium">React</span> and{" "}
            <span className="text-green-500 font-medium">Tailwind CSS</span>. My
            goal is to build fast, accessible, and visually pleasing websites
            that provide value to users.
          </p>
          <p className="text-base-content text-lg leading-relaxed">
            Currently expanding my skills in{" "}
            <span className="font-medium text-yellow-500">Node.js</span> and{" "}
            <span className="font-medium text-yellow-500">MongoDB</span> to
            become a full-stack developer. I’m open to freelance projects,
            internships, or junior roles where I can grow and contribute.
          </p>
          <h2 className="relative text-gray-300 inline-block text-lg font-semibold mt-8 mb-3 py-1">
      Fun Facts

      {/* Full underline sliding in from left */}
      <motion.span
        className="absolute w-full h-[2px] bg-gray-300 bottom-0 right-0"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* 50% underline scaling from right */}
      <motion.span
        className="absolute w-[50%] h-[2px] bg-gray-300 -bottom-2 right-0 origin-right"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
    </h2>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>
              I started coding at 18 and built my first game using plain
              JavaScript.
            </li>
            <li>I'm a night owl — most of my coding happens after midnight!</li>
            <li>
              When I'm not coding, I love to play games like football and exploring design
              inspirations.
            </li>
          </ul>

          <div className="mt-6">
            <a href="#contact">
              <button className="btn btn-secondary">Let’s Connect</button>
            </a>
          </div>
        </div>
         <div className="flex-1 md:w-5/6 mx-auto">
      
      <img
        src="/portfolio-image.jpg"
        alt="Profile"
        className="object-cover w-full md:w-5/7 2xl:w-5/8 mx-auto p-2 border-4 border-gray-600 rounded-xl hover:shadow-[1px_1px_30px] shadow-gray-800"
      />
    </div>
      </div>
    </div>
  );
};

export default About;
