import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (selector = ".reveal-item", options = {}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(selector);

    // Initial state
    gsap.set(elements, { autoAlpha: 0, y: 20, willChange: "opacity, transform" });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: options.start || "top 95%",
        toggleActions: options.toggleActions || "play none none reverse",
      },
    });

    tl.to(elements, {
      autoAlpha: 1,
      y: 0,
      duration: options.duration || 0.6,
      ease: options.ease || "power2.out",
      stagger: options.stagger || 0.12,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, options]);

  return rootRef;
};

export default useScrollReveal;
