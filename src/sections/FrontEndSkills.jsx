import useScrollReveal from "../hooks/useScrollReveal";


const frontEndSkills = [
  { name: "React.js", role: "Framework", icon: "https://xnuaqhaffihsznkcddiy.supabase.co/storage/v1/object/public/skills//react.svg" },
  { name: "Redux Toolkit", role: "State Management", icon: "https://xnuaqhaffihsznkcddiy.supabase.co/storage/v1/object/public/skills//redux.svg" },
  { name: "JavaScript", role: "Interaction", icon: "https://xnuaqhaffihsznkcddiy.supabase.co/storage/v1/object/public/skills//js.svg" },
  { name: "HTML5", role: "Markup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
  { name: "CSS3", role: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  { name: "Tailwind CSS", role: "Utility-First CSS", icon: "https://img.jsdelivr.com/github.com/tailwindlabs.png" },
  { name: "Bootstrap", role: "CSS Framework", icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
];

export default function FrontEndSkills() {
  const rootRef = useScrollReveal(".skill-card", { start: "top 80%", stagger: 0.2 });


  return (
    <section id="skills" ref={rootRef} className="my-16 px-4 md:ml-28">
      <div className="text-center mb-12">
        <h5 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">What Skills I Have</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">My Front-End Experience</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {frontEndSkills.map((skill) => (
          <article
            key={skill.name}
            className="skill-card flex items-center gap-4 p-6 rounded-2xl
                       bg-gray-100 dark:bg-zinc-900 border border-transparent
                       hover:bg-transparent hover:border-emerald-500 hover:!scale-[1.05]
                       transition-all duration-300"
            
            aria-label={`${skill.name} — ${skill.role}`}
          >
            <img src={skill.icon} alt={skill.name} width={48} height={48} className="flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold dark:text-white">{skill.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">{skill.role}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a href="/all-skills">
          <button
            aria-label="View all skills"
            className="border border-gray-400 cursor-pointer dark:text-white dark:border-gray-500 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:text-black transition-colors duration-300 group"
          >
            All Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-700 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
}
