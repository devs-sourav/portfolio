import React, { useState, useEffect } from 'react';
import { BriefcaseBusiness,GraduationCap, GripVertical, Home, Mail, Shapes, StretchHorizontal, TextSelect, User } from "lucide-react";
import Link from 'next/link';

const navData = [
  { title: "Home", icon: Home, left: '-65', link: 'home' },
  { title: "About", icon: User, left: '-67', link: 'about' },
  { title: "Experience", icon: BriefcaseBusiness, left: '-97', link: 'experience' },
  { title: "Education", icon: GraduationCap, left: '-97', link: 'education' },
  { title: "Services", icon: StretchHorizontal, left: '-82', link: 'services' },
  { title: "Skills", icon: Shapes, left: '-62', link: 'skills' },
  { title: "Portfolio", icon: GripVertical, left: '-87', link: 'port' },
  // { title: "Portfolios", icon: GripVertical, left: '-87', link: 'portfolios' },
  { title: "Testimonial", icon: TextSelect, left: '-97', link: 'testimonial' },
  { title: "Contact", icon: Mail, left: '-77', link: 'contact' },
];

export default function NavbarStatic() {
  const [activeLink, setActiveLink] = useState('');

  // Set up IntersectionObserver to detect when a section comes into view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of the section must be visible for it to be considered active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Update the active link when a section is in view
        }
      });
    }, options);

    // Observe each section
    navData.forEach(item => {
      const section = document.getElementById(item.link);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul className='z-50 fixed right-12 border border-[#565656] group ease-linear transition-all w-[54px] py-6 rounded-full flex flex-col items-center gap-y-5'>
      {navData.map((item, index) => {
        const Icon = item.icon;
        return (
          <li
            key={index}
            className={`group cursor-pointer text-[#999999] ease-linear transition-all hover:text-[#FFCC01] relative ${activeLink === item.link ? 'text-[#FFCC01]' : ''}`}
          >
            <Link href={`#${item.link}`}>
              <h3 className='group/edit transition-all ease-linear'>
                <Icon className='w-5' />
                <span
                  style={{ left: item.left + 'px' }}
                  className='absolute text-[12px] rounded-md top-2/4 text-right px-2 py-1 -translate-y-1/2 text-white bg-[#404042] before:content-[""] before:w-[10px] before:h-[10px] before:bg-[#404042] before:-right-[3px] before:top-1/2 before:absolute before:-translate-y-1/2 before:rotate-[54deg] before:-skew-x-[8deg] before:-skew-y-[39deg] before:-z-10 hidden group-hover/edit:block transition-all ease-linear before:transition-all before:ease-linear'>
                  {item.title}
                </span>
              </h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
