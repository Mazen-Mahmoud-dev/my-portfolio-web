import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Articles from "./sections/Articles";
import Achievements from "./sections/Achievments";
import Certifications from "./sections/Certifications";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    return window.innerWidth >= 640; // true if large (≥1024px), false otherwise
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex overflow-x-hidden dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* THIS wrapper must have min-w-0 so flex children can shrink on small screens */}
      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-[20px] mt-14 sm:mt-16">
          <Hero />
          <Articles />
          <Achievements />
          <Certifications />
        </main>
      </div>

      {/* mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 sm:hidden z-40" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
