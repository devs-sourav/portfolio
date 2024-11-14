"use client";
import React, { useEffect, useRef, useState } from 'react';
import HeadNav from './HeadNav';
import BannerHomeType from './BannerHomeType';
import CounterType from './CounterType';

export default function Introduce() {
  const [isInViewport, setIsInViewport] = useState(false);
  const introduceSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Observe the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry.intersectionRatio); // Log intersection ratio for debugging
        if (entry.intersectionRatio >= 0.2 && entry.intersectionRatio <= 0.8) {
          // Component is more than 50% in the viewport
          setIsInViewport(true);
        } else {
          // Component is less than 50% in the viewport
          setIsInViewport(false);
        }
      });
    }, options);

    if (introduceSectionRef.current) {
      observer.observe(introduceSectionRef.current);
    }

    return () => {
      if (introduceSectionRef.current) {
        observer.unobserve(introduceSectionRef.current);
      }
    };
  }, []);

  // Update the URL hash when isInViewport changes
  useEffect(() => {
    if (isInViewport) {
      window.location.hash = 'home';
    }
  }, [isInViewport]);

  return (
    <section data-section="home" className='pb-28' id="home" ref={introduceSectionRef}>
      <HeadNav/>
      <BannerHomeType/>
      <CounterType/>
    </section>
  );
}
