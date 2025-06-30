import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="mt-12 md:mt-20 lg:mt-28 2xl:mt-36">
      <div className="relative inline-block">
        <h1 className="text-xl text-gray-200 font-semibold md:text-2xl lg:text-3xl 2xl:text-4xl ">
          Projects
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
      <div className="mt-8 md:mt-6 lg:mt-10 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
          <figure>
            <img
              src="/Project-1.png"
              alt=""
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-200">Freelance Marketplace</h2>
            <p>
              A platform connecting clients and freelancers to post, bid, and
              manage freelance tasks with ease.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <h3 className="font-semibold mb-1 text-gray-300">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-3 text-2xl">
                  <SiHtml5 title="HTML5" className="text-orange-600" />
                  <SiCss3 title="CSS3" className="text-blue-600" />
                  <SiReact title="React" className="text-blue-400" />
                  <SiTailwindcss
                    title="Tailwind CSS"
                    className="text-teal-400"
                  />
                  <SiNodedotjs title="Node.js" className="text-green-600" />
                  <SiExpress
                    title="Express"
                    className="text-gray-800 dark:text-gray-300"
                  />
                  <SiMongodb title="MongoDB" className="text-green-700" />
                  <SiFirebase title="Firebase" className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div className="card-actions justify-between mt-4">
              <a
                href="https://assignment-10-authentica-cdfec.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/gaziraihan1/freelance-marketplace-client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
          <figure>
            <img
              src="/Project-2.png"
              alt=""
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-200">Blog Website</h2>
            <p>
              A responsive blog platform for reading and publishing articles
              with user-friendly features.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <h3 className="font-semibold mb-1 text-gray-300">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-3 text-2xl">
                  <SiHtml5 title="HTML5" className="text-orange-600" />
                  <SiCss3 title="CSS3" className="text-blue-600" />
                  <SiReact title="React" className="text-blue-400" />
                  <SiTailwindcss
                    title="Tailwind CSS"
                    className="text-teal-400"
                  />
                  <SiExpress
                    title="Express"
                    className="text-gray-800 dark:text-gray-300"
                  />
                  <SiNodedotjs title="Node.js" className="text-green-600" />
                  <SiMongodb title="MongoDB" className="text-green-700" />
                  <SiFirebase title="Firebase" className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div className="card-actions justify-between mt-4">
              <a
                href="https://assignment-11-firebase-auth.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/gaziraihan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
          <figure>
            <img
              src="/Project-3.png"
              alt=""
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-gray-200">Discover Local Events</h2>
            <p>
              A web app to browse and share local events, meetups, and community activities easily.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <h3 className="font-semibold mb-1 text-gray-300">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-wrap gap-3 text-2xl">
                  <SiHtml5 title="HTML5" className="text-orange-600" />
                  <SiCss3 title="CSS3" className="text-blue-600" />
                  <SiReact title="React" className="text-blue-400" />
                  <SiTailwindcss
                    title="Tailwind CSS"
                    className="text-teal-400"
                  />
                  <SiFirebase title="Firebase" className="text-yellow-500" />
                  
                </div>
              </div>
            </div>
            <div className="card-actions justify-between mt-4">
              <a
                href="https://b11-assignment-9-auth.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/gaziraihan1/local-event-manage.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
