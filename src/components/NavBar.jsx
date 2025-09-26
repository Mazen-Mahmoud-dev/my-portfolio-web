import React from "react";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between flex-row-reverse bg-white dark:bg-black shadow px-4 h-14 sm:hidden">
      <button
        onClick={onMenuClick}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>
      <span>
        <img src="/me.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
      </span>
    </header>
  );
}
