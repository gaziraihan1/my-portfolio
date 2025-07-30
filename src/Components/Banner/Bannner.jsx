import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="mt-6 md:mt-10 lg:mt-14 2xl:mt-18 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-green-400/20 via-blue-500/10 to-purple-400/20 blur-3xl pointer-events-none"></div>

      <div
        className="
          relative z-10
          flex flex-col-reverse md:flex-row items-center justify-between
          mt-6 md:mt-10 lg:mt-14 2xl:mt-18
          lg:min-h-[40vh] lg:max-h-[90vh]
          max-w-8xl mx-auto px-6 py-12 gap-10 md:gap-10
        "
      >
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "300% 300%" }}
            className="text-3xl md:text-4xl xl:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 leading-tight"
          >
            Mohammad Raihan Gazi
          </motion.h1>

          <motion.p
            animate={{
              borderColor: [
                "#06b6d4",
                "#22c55e",
                "#eab308",
                "#ec4899",
                "#06b6d4",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mt-4 text-lg md:text-2xl font-semibold border-l-4 pl-4 py-1 rounded-sm text-gray-100"
          >
            MERN / Full Stack Developer
          </motion.p>

          <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
            I build fast, responsive, and visually appealing web apps with
            MongoDB, Express.js, React, and Node.js. My goal is to craft digital
            experiences that users love.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a
              href="https://github.com/gaziraihan1"
              target="_blank"
              aria-label="GitHub"
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-raihan-gazi"
              target="_blank"
              aria-label="LinkedIn"
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-blue-400 transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://x.com/cryptoosBoss"
              target="_blank"
              aria-label="Twitter"
              className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full text-gray-300 transition-all duration-300 shadow-md hover:scale-110"
            >
              <FaXTwitter size={22} />
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/resume-001.pdf"
              download
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-green-400/40 transition-transform"
            >
              
              View Resume
            </a>
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <img
              src="/profile-image.avif"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-transparent ring-4 ring-green-500 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -z-10 top-6 left-6 w-full h-full rounded-full bg-gradient-to-tr from-green-500/40 via-blue-400/30 to-purple-400/20 blur-2xl"
            ></motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        ↓ Scroll Down
      </div>
    </section>
  );
};

export default Banner;
