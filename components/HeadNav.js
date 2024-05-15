import React from 'react'
import { Download, Equal, HomeIcon, Mail } from "lucide-react";
import Header from './Header';
import NavbarEqual from './NavbarEqual';

export default function HeadNav() {
  return (
    <>
      <section className="flex justify-between items-center mb-16">
        <Header title="introduce" HomeIcon={<HomeIcon className="w-4"/>}/> 
        <NavbarEqual className="w-[54px]"/>
      </section>
    </>
  )
}
