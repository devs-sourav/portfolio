"use client";
import React, { useEffect, useState } from "react";
import { Shapes } from "lucide-react"; // Import Lucide icons
import Header from "./Header";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Fetch skills data from the API
    const fetchSkillsData = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error(`Failed to fetch skills data: ${response.status}`);
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkillsData();
  }, []);


  if (error) return <p className="text-red-500 text-center">{error}</p>;


  return (
    <section
      id="skills"
      data-section="skills"
      className="skills-area page-section scroll-to-page py-24"
    >
      <div className="custom-container">
        <div className="flex mb-16">
          <Header title="Skills" HomeIcon={Shapes} />
        </div>
        <div>
          <div className="section-header mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-white leading-tight mb-16">
              My All <span className="text-[#FFCC01]">Expertise</span>
            </h1>
          </div>

          <div className="row skills max-w-4xl grid grid-cols-1 md:grid-cols-6 gap-5 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill border border-gray-600 group hover:border-[#FFCC01] transition-all ease-linear duration-100 py-7 rounded-3xl"
              >
                <div className="skill-inner">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="mx-auto mb-4 w-7"
                  />
                </div>
                <p className="name text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
