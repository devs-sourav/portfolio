import { BriefcaseBusiness } from "lucide-react";
import Header from "./Header";
import Link from "next/link";

const Education = () => {
  // Directly define resumeData here
  const resumeData = {
    header: {
      subtitle: "Resume",
      title: "Work Experience",
    },
    timeline: [
      {
        id: 1,
        date: "December, 2019 - January, 2024",
        roles: [
          {
            title: "BSc in Computer Science & Engineering",
            company: "Stamford University of Bangladesh",
            link: "https://www.stamforduniversity.edu.bd/",
            description:
              "Successfully completed a Bachelor of Science in Computer Science & Engineering with a focus on software development, web technologies, and UI/UX design.",
            cgpa: "3.60 out of 4.00", // CGPA
            gpaGrade: "First Class", // GPA Grade
          },
        ],
      },
      {
        id: 2,
        date: "January, 2017 - November, 2019",
        roles: [
          {
            title: "HSC (Higher Secondary Certificate)",
            company: "Ispahani Public School & College",
            link: "https://www.ipsc.edu.bd/",
            description:
              "Completed studies in Science, with a focus on Physics, Mathematics, Chemistry, Biology and Information Communication & Technology",
            cgpa: "5.00 out of 5.00", // CGPA
            gpaGrade: "A+" // GPA Grade
          },
        ],
      },
      {
        id: 3,
        date: "January, 2015 - December, 2016",
        roles: [
          {
            title: "SSC (Secondary School Certificate)",
            company: "Hajiganj Pilot High School & College",
            link: "https://maps.app.goo.gl/GPsCb3F4APhGepq4A",
            description:
              "Completed studies in Science, with a focus on Physics, Mathematics, Chemistry, Biology and Information Communication & Technology",
            cgpa: "5.00  out of 5.00", // CGPA
            gpaGrade: "A+" // GPA Grade
          },
        ],
      },
    ],
  };

  return (
    <section
      id="education"
      data-section="education"
      className="resume-area page-section py-24 overflow-hidden transition-colors"
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
      Education <span className="text-[#FFCC01]">Qualification</span>
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
    {/* Display CGPA and GPA Grade */}
    <div className="mt-2">
      <p className="text-gray-600 dark:text-gray-400 text-base">
        CGPA: <strong>{role.cgpa}</strong>
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-base">
        GPA Grade: <strong>{role.gpaGrade}</strong>
      </p>
    </div>
  </div>
);

export default Education;
