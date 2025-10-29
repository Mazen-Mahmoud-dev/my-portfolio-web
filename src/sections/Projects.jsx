import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Darssy Website 🌐",
    description: `A modern e-learning platform built with React & Supabase
Designed to make online education engaging, flexible, and student-focused.`,
    image: "/assets/projects/cover-project-1.PNG",
    url: "https://darssy.netlify.app/",
    tags: ["React", "Tailwind", "supabase", "API Integration"],
  },
  {
    id: 2,
    title: "EDUQUEST Platform ✅",
    description: `Here in this project you can start you learning carrer with EDUQUEST platform that will make you get the full mark`,
    image: "/assets/projects/cover-project-EduQuest.png",
    url: "https://eduquest-platform.netlify.app/",
    tags: ["JS", "Tailwind", "UI/UX"],
  },
  {
    id: 3,
    title: "Food Recipe☀️",
    description: `Here In this project you can search for food recipes and add them to wishlist using Reactjs and css`,
    image: "/assets/projects/cover-project-FoodRecipe.png",
    url: "https://mazen-food-recipe.netlify.app/",
    tags: ["API Integration", "React", "Frontend"],
  },
  {
    id: 3,
    title: "Heart Disease Prediction",
    description: `An end-to-end machine-learning pipeline to predict heart disease presence using the UCI Heart dataset.
The project demonstrates data preprocessing, dimensionality reduction, feature selection, supervised & unsupervised learning, hyperparameter tuning, and a Streamlit web app for deployment.`,
    image: "/assets/projects/cover-project-HeartDiseasePrediction.PNG",
    url: "https://github.com/Mazen-Mahmoud-dev/Heart_Disease_Project",
    tags: ["Python", "Scikit Learn", "Pandas", "Data Science"],
  },
];

const truncateByWords = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Projects = ({ hideAllButton = false }) => {
  const rootRef = useScrollReveal(".project-card", {
    start: "top 80%",
    stagger: 0.2,
  });

  return (
    <section
      className="my-16 md:px-8 max-w-7xl mx-auto md:ml-28"
      ref={rootRef}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h5 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">
          What I Have Built
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200">
          My Projects
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card w-full group relative grid gap-8 xl:grid-cols-2 overflow-hidden rounded-xl border border-zinc-200 bg-white p-1 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3
                    className="text-2xl font-bold tracking-tight dark:text-white"
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-zinc-600 dark:text-zinc-300 mt-8"
                  >
                    {truncateByWords(project.description, 30)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-50 dark:bg-gray-800 dark:text-slate-100 font-semibold  text-gray-700 border border-gray-600 py-0.5 px-3 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-between gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 dark:text-slate-100 hover:underline"
                >
                  View Project
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
                    className="lucide lucide-arrow-up-right h-4 w-4"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!hideAllButton && <div className="flex justify-center mt-12">
        <a href="/projects">
          <button className="border border-gray-400 cursor-pointer dark:border-gray-500 dark:text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:text-black transition-colors duration-300 group">
            All Projects
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
              className="ml-1 text-gray-500 dark:text-gray-300 transition-transform duration-300 group-hover:translate-x-1 dark:group-hover:text-gray-700"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div> }
    </section>
  );
};

export default Projects;
