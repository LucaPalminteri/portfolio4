import { portfolioConfig } from "@/config/portfolio";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <>
      {portfolioConfig.projects && portfolioConfig.projects.length > 0 && (
        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Projects
          </h3>
          <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {portfolioConfig.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-all duration-200 hover:shadow-md hover-lift"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-600 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 hover-scale"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline hover-scale"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
