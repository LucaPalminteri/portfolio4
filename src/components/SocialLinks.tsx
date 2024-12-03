import { portfolioConfig } from "@/config/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div
      className="mt-6 flex space-x-4 animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <a
        href={portfolioConfig.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover-scale"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={portfolioConfig.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover-scale"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href={`mailto:${portfolioConfig.contact.email}`}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover-scale"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
