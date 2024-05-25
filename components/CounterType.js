'use client'
import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

export default function CounterType() {
    // useCountUp({
    //     ref: 'counter',
    //     end: 1234567,
    //     enableScrollSpy: true,
    //     scrollSpyDelay: 1000,
    //   });
  return (
    <div>
        <div className='grid grid-cols-12 mr-0 sm:mr-14 mt-16 gap-y-10 sm:gap-y-0 gap-x-0 sm:gap-x-10 '>
            <div className='col-span-12 sm:col-span-3  text-center    rounded-2xl '>
                <h2 className='text-[72px] text-[#FFCC01]'><CountUp end={3} duration={2} enableScrollSpy/><span>+</span></h2>
                <p className='text-[14px] uppercase text-[#999]'>Years of Experience</p>
            </div>
            <div className='col-span-12 sm:col-span-3  text-center rounded-2xl '>
                <h2 className='text-[72px] text-[#FFCC01]'><CountUp end={28} duration={3} enableScrollSpy/><span>+</span></h2>
                <p className='text-[14px] uppercase text-[#999]'>Project Completed</p>

            </div>
        </div>
    </div>
  )
}
