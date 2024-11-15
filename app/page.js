"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Introduce from "@/components/Introduce";
import Portfolio from "@/components/Portfolio";
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
      <Education/>
      <ServicesSection/>
      <SkillsSection/>
      {/* <PortfolioSection/> */}
      <Portfolio/>
      <TestimonialSection/>
      <Contact/>
    </>
  );
}
