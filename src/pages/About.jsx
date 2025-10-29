import Footer from "../sections/Footer";
import Approach from "../components/Approach";
import LearningPath from "../components/LearningPath";
import LearningJourney from "../components/learningJourney";
import Hero from "../sections/Hero";

const About = () => {


  return (
    <div className="min-h-screen flex overflow-x-hidden dark:bg-gray-900">

      {/* THIS wrapper must have min-w-0 so flex children can shrink on small screens */}
      <div className="flex-1 min-w-0">
        

        <main className="p-[20px] mt-14 sm:mt-16">
          <Hero />
          <Approach />
          <LearningPath />
          <LearningJourney />
        </main>
      </div>
    </div>
  );
};

export default About;
