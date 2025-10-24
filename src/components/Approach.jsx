import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = root.querySelectorAll(".approach-card");

    gsap.set(cards, { autoAlpha: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const data = [
    {
      color: "text-yellow-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lightbulb"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      text: "I write efficient, maintainable, and modern code.",
    },
    {
      color: "text-purple-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-brain"
        >
          <path d="M12 18V5" />
          <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
          <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
          <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
          <path d="M18 18a4 4 0 0 0 2-7.464" />
          <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
          <path d="M6 18a4 4 0 0 1-2-7.464" />
          <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
        </svg>
      ),
      text: "I focus on building data-driven and user-friendly applications.",
    },
    {
      color: "text-blue-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <path d="M16 3.128a4 4 0 0 1 0 7.744" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
      text: "I focus on performance, usability, and scalability.",
    },
    {
      color: "text-green-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-smartphone"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      text: "I’m always learning and pushing my skills further",
    },
  ];

  return (
    <section
      ref={rootRef}
      id="approach"
      className="py-20 mt-16 bg-gray-50 rounded-2xl dark:bg-zinc-900 transition-colors duration-500"
    >
      <div className="container max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-2">
          More than just code
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 font-play mb-10 sm:mb-12">
          My Approach
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="approach-card flex flex-col items-start text-left p-6 sm:p-8 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${item.color} mb-4 text-3xl sm:text-4xl`}>
                {item.icon}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
