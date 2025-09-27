import React, { useRef, useState } from "react";
import {
  House,
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavItem = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="
      my-2 w-full flex items-center gap-4
      px-3 py-2 rounded-lg cursor-pointer
      text-gray-600 dark:text-gray-300
      hover:bg-gray-200 dark:hover:bg-gray-700
      transition-colors
    "
  >
    <Icon className="w-6 h-6" />
    <span className="inline md:group-hover:inline md:hidden font-medium">{label}</span>
  </a>
);

export default function Sidebar({ isOpen, onClose }) {
  const [darkMode, setDarkMode] = useState(false);
  const asideRef = useRef(null);

  // Dark mode toggle
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode((d) => !d);
  };

  // Animate sidebar entrance
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        asideRef.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    isOpen && (
      <aside
      ref={asideRef}
      className={`
        group fixed top-0 left-0 z-50
        flex flex-col h-screen md:w-20 w-56 hover:w-56
        bg-white dark:bg-black
        transition-all duration-300 ease-in-out
        border-r border-gray-200 dark:border-gray-700
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 sm:static sm:block
      `}
    >
      {/* Profile */}
      <div className="flex flex-row items-center py-4 border-b-1 border-gray-200">
        <img src="/src/assets/profile-image.jpg" alt="Profile" width={40} height={40} className="rounded-sm md:mx-auto ml-3" />
        <button
          className="absolute top-4 right-4 sm:hidden hover:bg-gray-200 cursor-pointer px-3 py-2 rounded-lg dark:text-white"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center lg:items-start px-2 mb-5">
        <NavItem href="#home" icon={House} label="Home" />
        <NavItem href="#about" icon={User} label="About" />
        <NavItem href="#portfolio" icon={Briefcase} label="Portfolio" />
        <NavItem href="#contact" icon={Mail} label="Contact" />
      </nav>

      {/* Theme toggle */}
      <div className="flex justify-center mb-3">
        <button
          onClick={toggleDark}
          className="w-8 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="text-white" /> : <Moon />}
        </button>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center space-y-3 mb-4">
        <a href="https://wa.me/201148824619" className="text-green-500 text-2xl"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/mazen-mahmoud-dev" className="text-blue-500 text-2xl"><FaLinkedin /></a>
        <a href="https://github.com/mazen-mahmoud-dev" className="text-black dark:text-white text-2xl"><FaGithub /></a>
      </div>
    </aside>
    )
  );
}
