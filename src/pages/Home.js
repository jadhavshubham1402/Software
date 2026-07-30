import CTA from "./CTA";
import DevelopmentProcess from "./DevelopmentProcess";
import FAQ from "./FAQ";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import Industries from "./Industries";
import LatestBlogs from "./LatestBlogs";
import Services from "./Services";
import SoftwareSolutions from "./SoftwareSolution";
import TechnologyStack from "./TechnologyStack";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TechnologyStack />
      <Industries />
      <DevelopmentProcess />
      <FeaturedProjects />
      <SoftwareSolutions />
      <FAQ />
      <Testimonials />
      <LatestBlogs />
      <CTA />
      {/* Hero Section */}
    </>
  );
};

export default Home;
