import { portfolioConfig } from "@/config/portfolio";
import React from "react";

const ProfessionalSummary = () => {
  return (
    <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Professional Summary</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{portfolioConfig.summary}</p>
    </div>
  );
};

export default ProfessionalSummary;
