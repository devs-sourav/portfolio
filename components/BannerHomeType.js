'use client'
import React from 'react';
import {  BriefcaseBusiness, ClipboardCheck, Download, GripVertical, Home, Mail, MoveDown, Shapes, StretchHorizontal, TextSelect, User } from "lucide-react";
import TypeWrite from './TypeWrite';
import NavbarStatic from './NavbarStatic';
import Image from 'next/image';
import CountUp from 'react-countup';

const navData = [
  {
    title: "Home",
    icon: Home,
    left: '-65'
  },
  {
    title: "About",
    icon: User,
    left: '-67'
  },
  {
    title: "Resume",
    icon: BriefcaseBusiness,
    left: '-78'
  },
  {
    title: "Services",
    icon: StretchHorizontal,
    left: '-82'
  },
  {
    title: "Skills",
    icon: Shapes,
    left: '-62'
  },
  {
    title: "Portfolios",
    icon: GripVertical,
    left: '-87'
  },
  {
    title: "Testimonial",
    icon: TextSelect,
    left: '-97'
  },
  {
    title: "Contact",
    icon: Mail,
    left: '-77'
  },
];

export default function BannerHomeType() {
  return (
    <section>
      <NavbarStatic/>
      <h2 className="text-base sm:text-2xl md:text-4xl font-light mb-5 sm:mb-0 leading-[30px] md:leading-[60px]">Welcome from <span className="text-[#FFCC01] ">Sourav</span>,</h2>
      <h2 className="text-[20px] sm:text-[32px] md:text-[60px] font-light leading-[30px] md:leading-[90px] max-w-[800px]"><TypeWrite /></h2>
      <p className="text-[#999] font-normal max-w-[480px] text-sm sm:text-base pt-5 sm:pt-8 leading-5 sm:leading-8">I develop and design code beautifully simple things and I love what I do. Just simple like that!</p>
      <div className='flex  w- justify-between items-center mt-8 sm:mt-24'>
        <button className="flex gap-x-3 px-6 sm:px-10 py-2 sm:py-3 border-2 border-[#FFCC01] hover:bg-transparent rounded-full text-black bg-[#FFCC01] group ease-linear transition-all ">
          <Download className="group-hover:text-[#FFCC01] ease-linear transition-all" />
          <span className="uppercase text-sm group-hover:text-[#FFCC01] ease-linear transition-all">Download CV</span>
        </button>
        <div className='relative right-24 top-20 sm:top-10 w-20 md:w-40'>
          <Image className="w-40 cursor-pointer moveDownShape" width={200} height={200} src={'/portfolioCircle.png'} alt="Portfolio Circle"/>
          <MoveDown className='cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
      </div>
      <div className='grid grid-cols-12 mr-0 sm:mr-14 mt-24 gap-y-10 sm:gap-y-0 gap-x-0 sm:gap-x-20 '>
        <div className='col-span-12 sm:col-span-6  text-center px-10 py-6 border rounded-2xl border-[#FFCC01]'>
          <h2 className='text-[72px] text-[#FFCC01]'><CountUp end={3} duration={5} enableScrollSpy/><span>+</span></h2>
          <p className='text-[14px] uppercase text-[#999]'>Years of Experience</p>
        </div>
        <div className='col-span-12 sm:col-span-6  text-center px-10 py-6 border rounded-2xl border-[#FFCC01]'>
          <h2 className='text-[72px] text-[#FFCC01]'>28<span>+</span></h2>
          <p className='text-[14px] uppercase text-[#999]'>Project Completed</p>
        </div>
      </div>

    </section>
  );
}
