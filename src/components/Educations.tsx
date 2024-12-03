import { portfolioConfig } from "@/config/portfolio";
import { TimelineItem } from "./TimelineItem";

const Educations = () => {
  return (
    <>
      {portfolioConfig.education && portfolioConfig.education.length > 0 && (
        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Education
          </h3>
          <div className="space-y-8">
            {portfolioConfig.education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Educations;
