import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
    <div className="flex dark:bg-gray-900">
      {/* Navbar only on small screens */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Page content */}
      <main className="flex-1 ml-0 sm:ml-20 p-6 mt-14 sm:mt-0 dark:bg-gray-900 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Resize the window to see the responsive sidebar behavior.</p>
      </main>

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 sm:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
