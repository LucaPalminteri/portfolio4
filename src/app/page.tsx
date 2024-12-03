import Skills from "@/components/Skills";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import SocialLinks from "@/components/SocialLinks";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Educations from "@/components/Educations";
import Extracurriculars from "@/components/Extracurriculars";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <main className="md:py-4 md:px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-xl md:rounded-lg overflow-hidden transition-colors duration-200">
          <div className="px-6 py-8">
            <Header />
            <SocialLinks />
            <ProfessionalSummary />
            <Skills />
            <Projects />
            <Experience />
            <Educations />
            <Extracurriculars />
          </div>
        </div>
      </main>
    </div>
  );
}
