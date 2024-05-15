'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypeWrite() {
  return (
    <>
        <Typewriter
        onInit={(typewriter) => {
            typewriter
              .typeString("I'm ")
              .typeString('<b style="color: #FFCC01;" >MERN Stack Developer</b>')
              .pauseFor(3000)
              .deleteChars(20)
              .pauseFor(1000)
              .typeString('<b style="color: #FFCC01;" >Fullstack Developer</b>')
              .pauseFor(3000)
              .deleteChars(19)
              .pauseFor(1000)
              .typeString('<b style="color: #FFCC01;" >Frontend Developer</b>')
              .pauseFor(3000)
              .deleteChars(18)
              .pauseFor(1000)
              .typeString('<b style="color: #FFCC01;" >Ui/Ux Designer</b>')
              .pauseFor(1000)
              .deleteChars(14)
              .pauseFor(1000)
              .typeString('<b style="color: #FFCC01;" >Next Js Developer</b>')
              .pauseFor(2500)
              .deleteChars(17)
              .pauseFor(1000)
              .typeString(' <b style="color: #FFCC01;" >React Js Developer</b>')
              .pauseFor(2500)
              .deleteAll()
              .start();
            }}
            options={{
                // strings: ['Fullstack Developer', 'Frontend Developer','Ui/Ux Designer','React Js Developer', 'Next Js Developer'],
                autoStart: true,
                loop: true,
            }}
        />
    </>

  )
}
