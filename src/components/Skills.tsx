import { portfolioConfig } from "@/config/portfolio";

const Skills = () => {
  return (
    <>
      {portfolioConfig.skills && portfolioConfig.skills.length > 0 && (
        <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioConfig.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300 hover-lift"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
