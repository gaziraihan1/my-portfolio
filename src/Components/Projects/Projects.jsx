import React from "react";
import { motion } from "framer-motion";
import projects from "../../assets/projects.json";
import * as SiIcons from "react-icons/si";
import { Link } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="mt-8 md:mt-14 lg:mt-20 2xl:mt-28 px-6">
        <h1 className="text-center text-3xl font-bold text-white mb-10">
          🚀 Projects
        </h1>
      <div className="mt-8 md:mt-6 lg:mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
           <motion.div
            key={project.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <Link to={`/project-details/${project.id}`}>
            
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4">
                <h4 className="text-gray-400 text-sm mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-3 text-xl">
                  {project.technologies.map((tech, i) => {
                    const IconComp = SiIcons[tech.icon];
                    return IconComp ? (
                      <div
                        key={i}
                        className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        title={tech.name}
                      >
                        <IconComp className={`${tech.color}`} />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              
            </div>
            </Link>
            <div className="flex gap-4 px-5 pb-5">   
                  
                    <a href={project.links.live} className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition" > Live Demo <FaExternalLinkAlt /></a> 
                  <a
                    href={project.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="flex items-center gap-1 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
