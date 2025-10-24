export default function Footer() {
  return (
    <footer className="p-18 border-t border-white/10 mt-20 py-10 bg-white/5 dark:bg-gray-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mazen Mahmoud</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Frontend Developer | Building experiences that matter.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="#about" className="hover:text-indigo-500 transition">About</a>
          <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
          <a href="#articles" className="hover:text-indigo-500 transition">Articles</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </div>

        
        <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-lg">
          <a href="https://github.com/mazenmahmoud" target="_blank" className="hover:text-indigo-500 transition"><i className="ri-github-fill"></i></a>
          <a href="https://linkedin.com/in/mazenmahmoud" target="_blank" className="hover:text-indigo-500 transition"><i className="ri-linkedin-fill"></i></a>
          <a href="mailto:mazen@example.com" className="hover:text-indigo-500 transition"><i className="ri-mail-line"></i></a>
        </div>
      </div>

      
      <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mazen Mahmoud. All rights reserved.
      </div>
    </footer>
  );
}
