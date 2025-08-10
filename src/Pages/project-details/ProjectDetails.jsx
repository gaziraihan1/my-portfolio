import React from "react";
import { useParams, Link } from "react-router";
import projectsData from "../../assets/projects.json"; 
import { IconContext } from "react-icons";
import * as SiIcons from "react-icons/si";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Project Not Found</h2>
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-300">{project.description}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{feature.name}</h3>
              <p className="text-gray-400">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Technologies & Reason</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.technologies.map((tech, index) => {
            const IconComponent = SiIcons[tech.icon] || null;
            return (
              <div
                key={index}
                className="p-4 border rounded-xl shadow hover:shadow-lg transition space-y-2"
              >
                <div className="flex items-center gap-2">
                  <IconContext.Provider
                    value={{ className: `${tech.color} text-2xl` }}
                  >
                    {IconComponent && <IconComponent />}
                  </IconContext.Provider>
                  <span className="font-semibold">{tech.name}</span>
                </div>
                <p className="text-gray-300 text-sm">{tech.reason}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Links</h2>
        <div className="flex flex-wrap gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Live Site
            </a>
          )}
          {project.links.client && (
            <a
              href={project.links.client}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Client Repo
            </a>
          )}
          {project.links.server && (
            <a
              href={project.links.server}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Server Repo
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
