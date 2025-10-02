import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Bookmark } from "lucide-react";
import FrontEndSkills from "../components/FrontEndSkills";


const Hero = () => {
  useGSAP(() => {
  gsap.from(".hero-fade", { opacity: 0, y: 40, duration: 1.2, stagger: 0.2, ease: "power3.out" });
  gsap.from(".hero-btn",  { opacity: 0, y: 30, duration: 1,   stagger: 0.2, ease: "power3.out" });
});

  return (
    <div>
      <div className="hero-fade">
        <h2 className='text-3xl font-bold text-center sm:text-left dark:text-white hero-fade'><span className='text-4xl' >Hello!</span> I'm Mazen Mahmoud <span className="text-5xl">👋</span></h2>
      <h2 className="text-3xl font-bold text-center sm:text-left mt-5 text-gray-500 hero-fade dark:text-white">Front End Developer | React.js | Data Scientist</h2>
      <p className=" max-w-5xl text-[#666666] text-lg md:w-3/4 dark:text-[#FFFFFF]/60 hero-fade mt-5">As a passionate Front-end Developer, I love crafting responsive, visually engaging, and user-friendly web experiences with React.js and Tailwind CSS.
        I’m also building my skills in data science, using Python, pandas, NumPy, scikit-learn, and Seaborn to analyze data and uncover insights.</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-start gap-5 mt-10 w-full">
        {/* My Projects Button */}
        <div>
          <a className="w-full sm:w-auto" href="/portfolio">
            <button
              aria-label="Go to Projects page"
              className="hero-btn w-full cursor-pointer text-black dark:text-white
                        bg-[#AEB1B7]/30 hover:bg-gray-200 dark:hover:text-black
                        py-2 px-6 rounded-md text-lg"
            >
              My Projects
            </button>
          </a>
        </div>

        {/* Download CV Button */}
        <a
          className="hero-btn w-full sm:w-auto justify-center group cursor-pointer flex items-center
                    hover:bg-gray-100 dark:hover:text-black gap-2 border-2 py-1 px-6 text-lg
                    border-[#AEB1B7] rounded-md"
          href="/cv/MazenMahmoudCV.pdf"
          download="Mazen_Mahmoud_CV.pdf"
        >
          {/* Icon (Lucide-React Bookmark) */}
          <Bookmark className="w-5 h-5 text-[#AEB1B7] dark:group-hover:text-black" />

          Get My CV
        </a>
      </div>
      <FrontEndSkills />
    </div>
  )
}

export default Hero
