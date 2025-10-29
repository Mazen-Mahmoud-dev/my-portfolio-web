import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Code,
  Rocket,
  TrendingUp,
  Cpu,
  Globe,
  Database,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LearningPath() {
  const sectionRef = useRef(null);

  const steps = [
  {
    icon: <BookOpen className="w-9 h-9 text-purple-500" />,
    title: "Getting Started",
    desc: "Began learning Python and joined Deci, reaching Level 4 while building strong communication and coding skills.",
  },
  {
    icon: <Cpu className="w-9 h-9 text-red-500" />,
    title: "Building the Core",
    desc: "Dived into C++, data structures, and algorithms, mastering problem-solving and logical thinking.",
  },
  {
    icon: <Globe className="w-9 h-9 text-blue-500" />,
    title: "Web Foundations",
    desc: "Learned HTML, CSS, JavaScript, and responsive design with Bootstrap to craft clean, modern interfaces.",
  },
  {
    icon: <Rocket className="w-9 h-9 text-yellow-500" />,
    title: "React & Beyond",
    desc: "Discovered React.js and built multiple projects while exploring data science with Pandas, NumPy, and Scikit-learn.",
  },
  {
    icon: <Database className="w-9 h-9 text-green-500" />,
    title: "Modern Tools",
    desc: "Expanded into Supabase and Tailwind CSS to build full-stack, scalable applications.",
  },
  ];


  useEffect(() => {
    const section = sectionRef.current;
    const cards = section.querySelectorAll(".learning-card");

    gsap.set(cards, { autoAlpha: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    tl.to(section.querySelector(".title-block"), {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }).to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    }, "-=0.3");
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-10 overflow-hidden">
      <div className="container max-w-5xl mx-auto text-center">
        {/* Title Section */}
        <div className="title-block opacity-0 translate-y-6 mb-10">
          <p className="text-gray-500 dark:text-slate-100 text-sm uppercase tracking-widest mb-2">
            My Learning Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-play dark:text-slate-100">
            How I Started
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 text-start">
          {steps.map((step, i) => (
            <div
              key={i}
              className="learning-card bg-slate-100  dark:bg-zinc-900 border border-transparent hover:border-gray-500 rounded-2xl p-6 shadow-md space-y-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] opacity-0"
            >
              <div>{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-100">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
