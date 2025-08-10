import React from "react";
import { motion } from "framer-motion";
import projects from "../../assets/projects.json";
import * as SiIcons from "react-icons/si";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div className="mt-8 md:mt-14 lg:mt-20 2xl:mt-28">
        <h1 className="text-center text-3xl font-bold text-white mb-10">
          🚀 Projects
        </h1>
      <div className="mt-8 md:mt-6 lg:mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
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

              <div className="mt-6 flex justify-between items-center flex-wrap">
                <Link to={`/project-details/${project.id}`} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                Details
                </Link>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Live Demo
                </a>
                <div className="flex gap-2">

                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Client
                </a>
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Server
                </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
