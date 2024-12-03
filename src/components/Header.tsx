import { portfolioConfig } from "@/config/portfolio";

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        {portfolioConfig.name}
      </h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-400 mt-2 animate-fade-in">
        {portfolioConfig.title}
      </h2>
      <p
        className="text-gray-600 dark:text-gray-400 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        {portfolioConfig.subtitle}
      </p>
    </>
  );
};

export default Header;
