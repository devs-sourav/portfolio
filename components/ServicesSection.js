"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Sliders, Code, Blocks, Tangent, StretchHorizontal } from "lucide-react";
import Header from "./Header";

const ServicesSection = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Observe the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          // Component is more than 50% in the viewport
          setIsInViewport(true);
        } else {
          // Component is less than 50% in the viewport
          setIsInViewport(false);
        }
      });
    }, options);

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    return () => {
      if (servicesSectionRef.current) {
        observer.unobserve(servicesSectionRef.current);
      }
    };
  }, []);

  // Update the URL hash when isInViewport changes
  useEffect(() => {
    if (isInViewport) {
      window.location.hash = 'services';
    } 
  }, [isInViewport]);

  return (
    <section
      className="services-area page-section scroll-to-page py-24"
      id="services"
      data-section="services"
      ref={servicesSectionRef}
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <div className="flex mb-16">
              <Header title="Services" HomeIcon={StretchHorizontal} />
            </div>
            <h1 className="text-white text-5xl leading-tight font-light mb-8">
              My <span className="text-primary">Specializations</span>
            </h1>
          </div>

          <div className="services-items">
            <div className="service-item border border-gray-600 group hover:border-[#FFCC01] duration-100 transition-all ease-linear max-w-4xl rounded-lg p-11 mb-4   relative">
              <Tangent className="absolute text-primary text-6xl top-11 right-12 text-[#FFCC01]" />
              <h2 className="text-white text-2xl font-light mb-2">
                Website Design
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                I create digital products with unique ideas using Figma & Framer
              </p>
              <span className="projects text-sm text-white group-hover:underline transition-all ease-linear uppercase">
                24 Projects
              </span>
            </div>
            <div className="service-item border border-gray-600 max-w-4xl rounded-lg p-11 mb-4 hover:border-[#FFCC01] duration-100 transition-all ease-linear relative">
              <Code className="absolute text-primary text-6xl top-11 right-12 text-[#FFCC01]" />
              <h2 className="text-white text-2xl font-light mb-2">
                Development
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                I build websites and go live with Framer, Webflow, or WordPress
              </p>
              <span className="projects text-white text-sm uppercase group-hover:underline transition-all ease-linear">
                126 Projects
              </span>
            </div>
            <div className="service-item border border-gray-600 max-w-4xl rounded-lg p-11 mb-4 hover:border-[#FFCC01] duration-100 transition-all ease-linear relative">
              <Blocks className="absolute text-primary text-6xl top-11 right-12 text-[#FFCC01]" />
              <h2 className="text-white text-2xl font-light mb-2">
                SEO/Marketing
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                Increase the traffic for your website with SEO optimization
              </p>
              <span className="projects text-white text-sm uppercase group-hover:underline transition-all ease-linear">
                8 Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
