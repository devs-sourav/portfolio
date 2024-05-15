'use client'
import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Equal,BriefcaseBusiness, ClipboardCheck, Download, GripVertical, Home, Mail, Shapes, StretchHorizontal, TextSelect, User, Twitter, Github, Linkedin, Facebook, Instagram, Code } from "lucide-react";



export default function NavbarEqual() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
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

  const socialData = [
    {
      title:'Twitter',
      link:'',
      icon:Twitter
    },
    {
      title:'github',
      link:'',
      icon:Github
    },
    {
      title:'LinkedIn',
      link:'',
      icon:Linkedin
    },
    {
      title:'Facebook',
      link:'',
      icon:Facebook
    },
    {
      title:'Instragram',
      link:'',
      icon:Instagram
    },
    {
      title:'CodeForces',
      link:'',
      icon:Code
    },
  ]

  return (
    <>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size={345}
            overlayColor="#565656"
            overlayOpacity={0.5}
            className='bla bla bla bg-black py-14 px-24'
        >
            <div className=''>
              <div className='mb-4'>
                <h3 className='text-lg text-[#999999]'>Menu</h3>
              </div>
              <ul className='py-6 flex flex-col gap-y-5'>
                {
                    navData.map((item,index)=>{
                      let title = item.title
                      let Icon = item.icon
                      return(
                        <li key={index} className='flex gap-x-3 group cursor-pointer items-center'>
                          <Icon className='w-[18px] group-hover:text-[#FFCC01] text-[#999999]'/>
                          <span className='text-[13px] group-hover:text-white text-[#999999]'>{title}</span>
                        </li>                        
                      )
                      
                    })
                }

              </ul>
              <div className='mt-10'>
                <h3 className='text-base text-[#999999]'>Social</h3>
                <ul className='flex mt-3 gap-x-4'>
                  {
                    socialData.map((item,index)=>{
                      let Icon = item.icon
                      return(
                        <li key={index} className='cursor-pointer text-[#999999] hover:text-[#FFCC01]'><Icon className='w-[14px]'/></li>
                      )
                    })
                    

                  }
                </ul>
              </div>
            </div>
        </Drawer>
        <div onClick={toggleDrawer} className="border border-[#565656] group ease-linear transition-all w-[54px] h-[54px] rounded-full flex items-center justify-center cursor-pointer group hover:border-[#FFCC01]">
          <Equal className="group-hover:text-[#FFCC01] ease-linear transition-all"/>
        </div>
    </>
  )
}
