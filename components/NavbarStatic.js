import React, { useState, useEffect, useRef } from 'react';
import { BriefcaseBusiness, ClipboardCheck, Download, GripVertical, Home, Mail, Shapes, StretchHorizontal, TextSelect, User } from "lucide-react";
import Link from 'next/link';

const navData = [
  {
    title: "Home",
    icon: Home,
    left: '-65',
    link:'home'
  },
  {
    title: "About",
    icon: User,
    left: '-67',
    link:'about'
  },
  {
    title: "Resume",
    icon: BriefcaseBusiness,
    left: '-78',
    link:'resume'
  },
  {
    title: "Services",
    icon: StretchHorizontal,
    left: '-82',
    link:'services'
  },
  {
    title: "Skills",
    icon: Shapes,
    left: '-62',
    link:'skills'
  },
  {
    title: "Portfolios",
    icon: GripVertical,
    left: '-87',
    link:'portfolios'
  },
  {
    title: "Testimonial",
    icon: TextSelect,
    left: '-97',
    link:'testimonial'
  },
  {
    title: "Contact",
    icon: Mail,
    left: '-77',
    link:'contact'
  },
];

export default function NavbarStatic() {

  const [activeSection, setActiveSection] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const activeStyle = {
    color: '#FFCC01',
    textDecoration: 'underline',
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <ul className='fixed right-12 border border-[#565656] group ease-linear transition-all w-[54px] py-6 rounded-full flex flex-col items-center gap-y-5'>
          {navData.map((item, index) => {
            const Icon = item.icon;
            return (
              <li className={activeSection === item.link ? 'active group cursor-pointer ease-linear transition-all relative' : 'group cursor-pointer text-[#999999] ease-linear transition-all hover:text-[#FFCC01] relative'}  key={index}>
                <Link href={`#${item.link}`}>
                  <h3 className='group/edit transition-all ease-linear' style={activeSection === item.link || activeLink === item.link ? activeStyle : {}} onClick={() => handleClick(item.link)}>
                    <Icon className='w-5' />
                    <span style={{ left: item.left + 'px' }} className='absolute text-[12px] rounded-md top-2/4 text-right px-2 py-1 -translate-y-1/2 text-white bg-[#404042] before:content-[""] before:w-[10px] before:h-[10px] before:bg-[#404042] before:-right-[3px] before:top-1/2 before:absolute before:-translate-y-1/2 before:rotate-[54deg] before:-skew-x-[8deg] before:-skew-y-[39deg] before:-z-10 hidden group-hover/edit:block transition-all ease-linear before:transition-all before:ease-linear'>
                      {item.title}
                    </span>
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
    </>
  )
}
