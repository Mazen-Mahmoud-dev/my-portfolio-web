import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../sections/Hero";
import Articles from "../sections/Articles";
import Achievements from "../sections/Achievments";
import Certifications from "../sections/Certifications";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import FrontEndSkills from "../sections/FrontEndSkills";

export default function Home() {
  

  return (
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
        <Footer />
      </div>
      

      
    </div>
  );
}
