import React, { useEffect, useState } from 'react';
import { BriefcaseBusiness, GripVertical, Home, Mail, Shapes, StretchHorizontal, TextSelect, User } from "lucide-react";
import Link from 'next/link';

const navData = [
  { title: "Home", icon: Home, left: '-65', link: 'home' },
  { title: "About", icon: User, left: '-67', link: 'about' },
  { title: "Experience", icon: BriefcaseBusiness, left: '-97', link: 'experience' },
  { title: "Services", icon: StretchHorizontal, left: '-82', link: 'services' },
  { title: "Skills", icon: Shapes, left: '-62', link: 'skills' },
  { title: "Portfolios", icon: GripVertical, left: '-87', link: 'portfolio' },
  { title: "Testimonial", icon: TextSelect, left: '-97', link: 'testimonial' },
  { title: "Contact", icon: Mail, left: '-77', link: 'contact' },
];

export default function NavbarStatic() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if window is available
      const handleHashChange = () => {
        setHash(window.location.hash); // Update state when hash changes
      };

      const handlePathnameChange = () => {
        setHash(window.location.hash); // Update hash state on pathname change as well
      };

      // Set up event listeners
      window.addEventListener('hashchange', handleHashChange);
      window.addEventListener('popstate', handlePathnameChange);

      // Set the initial hash on page load
      setHash(window.location.hash);

      // Clean up the event listeners when the component unmounts
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('popstate', handlePathnameChange);
      };
    }
  }, []); // Only runs on mount in the client

  const handleClick = (e, link) => {
    e.preventDefault();
    if (typeof window !== 'undefined') { // Ensure this runs only in the browser
      const target = document.getElementById(link);
      if (target) {
        window.location.hash = link; // Set the hash in the URL

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Scroll the section to the top of the viewport
          inline: 'nearest',
        });
      }
    }
  };

  return (
    <ul className='z-50 fixed right-12 border border-[#565656] group ease-linear transition-all w-[54px] py-6 rounded-full flex flex-col items-center gap-y-5'>
      {navData.map((item, index) => {
        const Icon = item.icon;
        return (
          <li
            key={index}
            className={`group cursor-pointer text-[#999999] ease-linear transition-all hover:text-[#FFCC01] relative ${hash === `#${item.link}` ? 'text-[#FFCC01]' : ''}`}
          >
            <Link href={`/#${item.link}`} onClick={(e) => handleClick(e, item.link)}>
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
