import React, { useEffect, useState, useRef } from 'react';
import { useDimensions } from '../hooks/useDimensions';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';

export default function BurgerMenu(props) {

  const { activeSection, arrRef } = props;
  const [activeMenu, setActiveMenu] = useState(false);
  const containerRef = useRef(null);
  const { width, height } = useDimensions(containerRef);

  // refactor with a ref to the circle 
  const sidebar = {
    open: ({height, width}) => ({
      clipPath: `circle(${height * 2}px at ${width - 54}px 86px)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: ({height, width}) => ({
      clipPath: `circle(23px at ${width - 54}px 86px)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    })
  };

  const sections = ['Carrera de Ingenieria de Software','Docentes','Semillero Laboratorio Bigatic', 'Eventos', 'Contactanos'].map((section, i) => {

    return (
    <li
      className='menu-item'
      key={nanoid()}
    >
      <a
        className={(activeSection == i ? 'text-gray-400' : 'text-white')}
        onClick={() => handleClick(i)}>
        {section}
      </a>
    </li>
    );
    });

  const menu = (
    <motion.nav
      className="fixed left-0 top-0 w-full h-[100lvh]"
      key={nanoid()}
      >
        <div className='h-[100svh] flex justify-center items-center'>
          <ul className='w-full'>
            {sections}
          </ul>
        </div>
    </motion.nav>
  );

  function handleClick(section) {
    const content = arrRef[section].current;
    setActiveMenu(!activeMenu);
    content.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return(
    <motion.div
      className='fixed top-0 right-0 w-full h-full bg-black z-10'
      initial={{opacity: 0}}
      animate={activeMenu ? "open" : "closed"}
      custom={{height, width}}
      variants={sidebar}
      ref={containerRef}
    >
      <motion.a className='absolute top-16 right-[2rem] z-10' onClick={() => {setActiveMenu(!activeMenu)}}>
        <motion.img className='rounded-full float-right' src="/bar-menu.svg" alt="Menu"
        />
      </motion.a>
      {menu}
    </motion.div>
  );
}