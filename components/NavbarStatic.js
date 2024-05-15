import React from 'react'
import { BriefcaseBusiness, ClipboardCheck, Download, GripVertical, Home, Mail, Shapes, StretchHorizontal, TextSelect, User } from "lucide-react";

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

export default function NavbarStatic() {
  return (
    <>
        <ul className='fixed right-16 border border-[#565656] group ease-linear transition-all w-[54px] py-6 rounded-full flex flex-col items-center gap-y-5'>
        {navData.map((item, index) => {
          const Icon = item.icon;
          return (
            <li className='group cursor-pointer text-[#999999] ease-linear transition-all hover:text-[#FFCC01] relative' key={index}>
              <div className='group/edit transition-all ease-linear'>
                <Icon className='w-5 ' />
                <span style={{ left: item.left + 'px' }} className='absolute text-[12px] rounded-md top-2/4 text-right px-2 py-1 -translate-y-1/2 text-white bg-[#404042] before:content-[""] before:w-[10px] before:h-[10px] before:bg-[#404042] before:-right-[3px] before:top-1/2 before:absolute before:-translate-y-1/2 before:rotate-[54deg] before:-skew-x-[8deg] before:-skew-y-[39deg] before:-z-10 hidden group-hover/edit:block transition-all ease-linear before:transition-all before:ease-linear'>
                  {item.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  )
}
