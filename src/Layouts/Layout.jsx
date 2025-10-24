import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = ( { children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    return window.innerWidth >= 640;
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
    <div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div>
        {children}
      </div>
      {/* mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 sm:hidden z-40" onClick={() => setSidebarOpen(false)} />}
    </div>
  )
}

export default Layout
