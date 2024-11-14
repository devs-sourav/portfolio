"use client";

import React, { useState, useRef, useEffect } from "react";
import { BriefcaseBusiness } from "lucide-react";
import Header from "./Header";
import Link from "next/link";

const Resume = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const resumeRef = useRef(null);

  // Directly define resumeData here
  const resumeData = {
    header: {
      subtitle: "Resume",
      title: "Work Experience",
    },
    timeline: [
      {
        id: 1,
        date: "01 June, 2024 - Present",
        roles: [
          {
            title: "Associated Software Engineer",
            company: "Okobiz",
            link: "http://www.okobiz.com",
            description:
              "Responsible for designing and developing UI components in Framer.",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const options = {
      root: null, // Observe the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 10% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio); // Log intersection ratio for debugging
        if (entry.intersectionRatio >= 0.5) {
          // Component is more than 10% in the viewport
          setIsInViewport(true);
        } else {
          // Component is less than 10% in the viewport
          setIsInViewport(false);
        }
      });
    }, options);

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  // Update the URL hash when isInViewport changes
  useEffect(() => {
    if (isInViewport) {
      window.location.hash = "experience";
    } 
  }, [isInViewport]);

  return (
    <section
      id="experience"
      data-section="about"
      className="resume-area page-section py-24 overflow-hidden  transition-colors"
      ref={resumeRef}
    >
      <div className=" ">
        <div className="flex mb-16">
          <Header title="Work Experience" HomeIcon={BriefcaseBusiness} />
        </div>
        <div className="resume-content mx-auto">
          {/* Section Header */}
          <SectionHeader header={resumeData.header} />

          {/* Timeline */}
          <div className="resume-timeline space-y-0 relative ">
            {resumeData.timeline.map((item, index) => (
              <TimelineItem
                key={item.id}
                index={index}
                length={resumeData.timeline.length}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Component for Section Header
const SectionHeader = ({ header }) => (
  <div className="section-header">
    <h1 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-white leading-tight mb-16">
      Work <span className="text-[#FFCC01]">Experience</span>
    </h1>
  </div>
);

// Component for each Timeline Item
const TimelineItem = ({ item, index, length }) => {
  return (
    <div
      className={`item relative group pl-20 ${
        index + 1 !== length ? "pb-16" : "pb-1"
      } `}
    >
      <span className="date text-gray-600 dark:text-gray-400 mb-6 block group-hover:text-[#FFCC01] transition-all ease-linear duration-100">
        {item.date}
      </span>
      {item.roles.map((role, index) => (
        <RoleItem key={index} role={role} />
      ))}
      <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-600 group-hover:bg-[#FFCC01] transition-all ease-linear duration-100 rounded-full left-5 top-1.5"></div>
      <div className="absolute bg-gray-300 dark:bg-gray-700 w-[1px] group-hover:bg-[#FFCC01] h-full left-[26px] top-4 z-[-2]"></div>
      <div className="absolute w-[1px] bg-[#FFCC01] h-[0px] group-hover:h-full transition-all duration-300 left-[26px] -bottom-4 z-[-1]"></div>
    </div>
  );
};

// Component for each Role within a Timeline Item
const RoleItem = ({ role }) => (
  <div className="mt-4">
    <h2 className="text-2xl font-light text-gray-800 dark:text-white mb-1">
      {role.title}
    </h2>
    {role.link ? (
      <Link
        href={role.link}
        target="_blank"
        className="text-gray-500 hover:text-[#FFCC01] translate-all ease-linear dark:text-gray-400 text-base mt-1.5"
      >
        {role.company}
      </Link>
    ) : (
      <p className="text-gray-500 dark:text-gray-400 text-base mt-1.5">
        {role.company}
      </p>
    )}
    <p className="text-gray-500 dark:text-gray-400 text-base mt-3 max-w-2xl">
      {role.description}
    </p>
  </div>
);

export default Resume;
