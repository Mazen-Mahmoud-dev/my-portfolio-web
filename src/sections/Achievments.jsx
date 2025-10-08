import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const rootRef = useRef(null);

  const stats = [
    { number: 20, label: "Completed Projects" },
    { number: 3500, label: "LinkedIn Followers" },
    { number: 3, label: "Years of Learning" },
    { number: 10, label: "Tech Tools Mastered" },
  ];

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    const subtitle = root.querySelector(".achievements-subtitle");
    const title = root.querySelector(".achievements-title");
    const cards = root.querySelectorAll(".achievement-card");
    const numbers = root.querySelectorAll(".achievement-number");

    gsap.set([subtitle, title, cards], { autoAlpha: 0, y: 30 });
    gsap.set(numbers, { innerText: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(subtitle, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }).to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
    }, "-=0.4");

    numbers.forEach((num, i) => {
      const endValue = stats[i].number;

      gsap.to(num, {
        innerText: endValue,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          num.innerText = `+${Math.floor(num.innerText)}`;
        },
        scrollTrigger: {
          trigger: num,
          start: "top 90%",
          once: true,
        },
        onComplete: () => {
          gsap.to(num, { scale: 1.2, duration: 0.2, ease: "power1.out" });
          gsap.to(num, { scale: 1, duration: 0.4, ease: "bounce.out", delay: 0.2 });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="achievements"
      ref={rootRef}
      className="achievements-section py-20 mb-40 bg-gray-50 dark:bg-zinc-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h5 className="achievements-subtitle text-subtitle">
            Milestones that shaped my journey
          </h5>
          <h2 className="achievements-title text-title">
            My Latest Achievements 🚀
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="achievement-card flex flex-col items-center justify-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="achievement-number text-5xl font-extrabold text-emerald-500 mb-2">
                +0
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
