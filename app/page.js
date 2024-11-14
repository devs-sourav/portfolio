import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Introduce from "@/components/Introduce";
import PortfolioSection from "@/components/PortfolioSection";
import Resume from "@/components/Resume";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";



export default function Home() {
  return (
    <>
      <Introduce/>
      <About/>
      <Resume/>
      <ServicesSection/>
      <SkillsSection/>
      <PortfolioSection/>
      <TestimonialSection/>
      <Contact/>
    </>
  );
}
