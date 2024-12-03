import { portfolioConfig } from "@/config/portfolio";

const Extracurriculars = () => {
  return (
    <>
      {portfolioConfig.extracurricular && (
        <div
          className="mt-8 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Extracurricular Activities
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {portfolioConfig.extracurricular}
          </p>
        </div>
      )}
    </>
  );
};

export default Extracurriculars;
