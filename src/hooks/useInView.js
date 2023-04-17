import React, { useState, useEffect, useRef } from 'react';

// This component makes the nuestroEquipo section to stop working
export const useInView = (arrRef) => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  
  // useEffect(() => {
  //   //create new instance and pass a callback function
  //   observer.current = new IntersectionObserver((entries) => {
  //     const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;

  //     // Update state with the visible section ID
  //     if (visibleSection) {
  //       // const index = arrRef.findIndex(element => element.current == visibleSection);
  //       // setActiveSection(index);
  //     }
  //   });
  
  //   // Get custom attribute data-section from all sections
  //   // const sections = document.querySelectorAll('[data-section]');

  //   arrRef.forEach((section) => {
  //     observer.current.observe(section.current);
  //   });

  //   // Cleanup function to remove observer
  //   return () => {
  //     arrRef.forEach((section) => {
  //       observer.current.unobserve(section.current);
  //     });
  //   };
  // }, []);

  return activeSection;
}

