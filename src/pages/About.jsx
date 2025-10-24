import Footer from "../sections/Footer";
import Approach from "../components/Approach";
import LearningPath from "../components/LearningPath";
import LearningJourney from "../components/learningJourney";
import Hero from "../sections/Hero";

const About = () => {


  return (
    <div className="flex-1 mt-14 sm:mt-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 sm:ml-20">
        <Hero />
        <Approach />
        <LearningPath />
        <LearningJourney />
        <Footer />
    </div>
  );
};

export default About;
