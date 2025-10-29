import React from "react";
import FrontEndSkills from "../sections/FrontEndSkills";
import Projects from "../sections/Projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {
  useGSAP(() => {
    gsap.from(".portfolio-hero", {
      autoAlpha: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="min-h-screen pt-24 md:px-8 max-w-7xl mx-auto">
      {/* 🌟 Hero Section */}
      <section className="portfolio-hero text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 mb-4">
          My Portfolio
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg ml-5">
          A collection of my projects, skills, and achievements — showing how I build, learn, and grow.
        </p>
      </section>

      {/* 💡 Skills Section */}
      <FrontEndSkills hideAllButton />

      {/* 🧱 Projects Section */}
      <Projects hideAllButton />

      {/* 📞 Contact CTA */}
      <section className="mt-24 text-center py-16 border-t border-gray-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
          Let’s Build Something Great Together 🚀
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Have an idea or project in mind? I’d love to collaborate.
        </p>
        <a href="/contact" className="group">
          <button className="border dark:text-slate-100 border-gray-400 dark:border-slate-100 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:text-black transition-colors duration-300 mx-auto cursor-pointer">
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-900 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </section>
      
    </main>
  );
}
