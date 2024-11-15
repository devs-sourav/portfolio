"use client";
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" data-section="about"  className="py-20" >
      <div className="flex">
        <Header title="about" HomeIcon={User} />
      </div>
      <div className="pt-14">
        <h2 className="text-5xl font-light leading-[60px] max-w-[740px] mb-10">
          Every great design begins with an even <span className="text-[#FFCC01]">better story</span>
        </h2>
        <p className="mt-4 text-base max-w-4xl text-[#999] justify-between">
          My journey began a few years ago, I found myself drawn to the dynamic world of web development. Since then, I&apos;ve leveraged the power of the MERN stack—MongoDB, Express.js, React.js, and Node.js—to bring digital visions to life.
        </p>
        <p className="mt-4 text-base max-w-4xl text-[#999] justify-between">
          Central to my approach is a quiet confidence—a belief in my ability to tackle any design problem that comes my way. Coupled with a natural curiosity, I&apos;m constantly pushing the boundaries of what&apos;s possible, seeking out new challenges and refining my skills with each project.
        </p>
        <p className="mt-4 text-base max-w-4xl text-[#999] justify-between">
          But development isn&apos;t just about code—it&apos;s about collaboration. Throughout my journey, I&apos;ve had the pleasure of working alongside incredibly talented individuals, pooling our collective expertise to create digital products that make a lasting impact. So whether you&apos;re a startup looking to disrupt the market or an agency in need of a development partner, I&apos;m here to help. Let&apos;s collaborate, innovate, and create something extraordinary together.
        </p>
      </div>
    </section>
  );
}
