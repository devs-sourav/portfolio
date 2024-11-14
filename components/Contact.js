"use client";
import React, { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  const [isInViewport, setIsInViewport] = useState(false);
  const contactSectionRef = useRef(null);

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

    const currentRef = contactSectionRef.current; // Store the ref in a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local variable for cleanup
      }
    };
  }, []);

  // Update the URL hash when isInViewport changes
  useEffect(() => {
    if (isInViewport) {
      window.location.hash = 'contact';
    }
  }, [isInViewport]);

  return (
    <section className="contact-area page-section scroll-content py-24 max-w-4xl" id="contact" ref={contactSectionRef}>
      <ContactForm/>
    </section>
  );
}
