import { Helmet } from "react-helmet-async";
import Hero from "../sections/Hero";
import Articles from "../sections/Articles";
import Achievements from "../sections/Achievments";
import Certifications from "../sections/Certifications";
import Projects from "../sections/Projects";
import FrontEndSkills from "../sections/FrontEndSkills";
import SEO from "../components/Seo";

export default function Home() {
  

  return (
    <>

      <SEO title={"Mazen Mahmoud | Front-End Developer & Data Scientist"} description={"As a passionate Front-end Developer, I craft responsive and visually engaging web experiences with React.js and Tailwind CSS. Also exploring Data Science with Python, pandas, and scikit-learn."} />
      <div className="min-h-screen flex overflow-x-hidden dark:bg-gray-900">

      {/* THIS wrapper must have min-w-0 so flex children can shrink on small screens */}
      <div className="flex-1 min-w-0">
        

        <main className="p-[20px] mt-14 sm:mt-16">
          <Hero />
          <FrontEndSkills />
          <Articles />
          <Achievements />
          <Certifications />
          <Projects />
        </main>
      </div>
      

      
      </div>
    </>
    
  );
}
