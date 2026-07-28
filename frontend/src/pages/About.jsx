import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import MissionVision from "../components/about/MissionVision";
import WhyChoose from "../components/about/WhyChoose";
import CraftProcess from "../components/about/CraftProcess";
import Statistics from "../components/about/Statistics";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <>
      <AboutHero />
      <Story />
       <MissionVision />
        <WhyChoose />
         <CraftProcess />
          <Statistics />
          <AboutCTA />
    </>
  );
}

export default About;