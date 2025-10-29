import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LearningJourney() {
  const sectionRef = useRef(null);

  const journey = [
    {
      date: "August 2024",
      title: "Beginning My Coding Journey",
      desc: "Started learning HTML, CSS, and JavaScript fundamentals through online courses and tutorials. Built my first static websites and began to understand the basics of web development.",
      tags: ["HTML", "CSS", "JavaScript Basics"],
    },
    {
      date: "November 2024",
      title: "Diving into React",
      desc: "After building a foundation with vanilla JavaScript, I began learning React. Started with the core concepts like components, props, and state, then moved on to hooks and more advanced patterns.",
      tags: ["React", "Components", "Hooks"],
    },
    {
      date: "April 2025",
      title: "Exploring Next.js & Tailwind",
      desc: "Expanded my skills to include Next.js for its server-side rendering capabilities and Tailwind CSS for rapid UI development. Started building more complex projects with these technologies.",
      tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      date: "Present",
      title: "Continuous Learning & Building",
      desc: "Currently focused on deepening my understanding of React and Next.js while exploring TypeScript and state management solutions. Building projects to apply what I’ve learned and discover new challenges.",
      tags: ["TypeScript", "State Management", "Project Building"],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".journey-card");

    gsap.set(cards, { autoAlpha: 0, y: 50 });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    }).to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.25,
    });
  }, []);

  return (
    <section ref={sectionRef} className="my-20 max-w-6xl mx-auto  px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-gray-500 mb-2 uppercase tracking-widest">
          My Learning Path
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100">
          My Learning Journey
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-cyan-300"></div>

        <div className="space-y-16">
          {journey.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`journey-card relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-slate-100 dark:bg-gray-900 z-10">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-cyan-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                </div>

                {/* Card */}
                <div className="md:w-[46%] w-full bg-slate-100 dark:bg-gray-900 border border-slate-100 rounded-xl p-6 md:px-12 md:mx-5 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="text-sm text-cyan-500 font-medium mb-2 dark:text-cyan-500">
                    {step.date}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-slate-100">{step.title}</h3>
                  <p className="text-gray-600 dark:text-slate-100 mb-4 ">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-cyan-50 dark:bg-cyan-50 dark:hover:bg-cyan-200 font-semibold text-gray-900 border border-cyan-200 hover:bg-cyan-100 text-sm px-3 py-0.5 rounded-full transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
