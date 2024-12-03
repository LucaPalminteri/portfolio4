import { portfolioConfig } from "@/config/portfolio";
import { TimelineItem } from "./TimelineItem";

const Experience = () => {
  return (
    <>
      {portfolioConfig.experience && portfolioConfig.experience.length > 0 && (
        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {portfolioConfig.experience.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.company}
                subtitle={exp.position}
                period={exp.period}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {exp.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-none space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start hover-lift">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
