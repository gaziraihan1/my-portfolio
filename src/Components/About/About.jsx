import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="mt-16 md:mt-20 lg:mt-28 mx-auto">
      <motion.h1
        className="text-center text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👤 About Me
      </motion.h1>

      <motion.div
        className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Hi! I’m <span className="font-semibold text-white">Mohammad Raihan Gazi</span>, 
          a passionate front-end developer from Dhaka, Bangladesh. I enjoy 
          creating beautiful, responsive web apps using{" "}
          <span className="text-green-400 font-medium">React</span> and{" "}
          <span className="text-green-400 font-medium">Tailwind CSS</span>. My
          goal is to build fast, accessible, and visually pleasing websites that
          provide value to users.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Currently expanding my skills in{" "}
          <span className="font-medium text-yellow-400">Node.js</span> and{" "}
          <span className="font-medium text-yellow-400">MongoDB</span> to become
          a full-stack developer. I’m open to freelance projects, internships,
          or junior roles where I can grow and contribute.
        </p>

        <motion.h2
          className="text-xl font-semibold text-blue-400 mt-8 mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fun Facts
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "I started coding at 20 and built my first game using plain JavaScript.",
            "I'm a night owl — most of my coding happens after midnight!",
            "When I'm not coding, I love to play football and exploring design inspirations.",
          ].map((fact, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-white/10 rounded-lg p-4 text-gray-300 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {fact}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact">
            <motion.button
              className="btn btn-secondary px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Connect
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
