import React, { useEffect, useState, useRef } from 'react';
import { useDimensions } from '../hooks/useDimensions';
import { motion } from 'framer-motion';

export default function BurgerMenu() {

  const [activeMenu, setActiveMenu] = useState(false);
  const containerRef = useRef(null);
  const {width, height} = useDimensions(containerRef);

  // refactor with a ref to the circle 
  const sidebar = {
    open: ({height = 1000, width = 1000}) => ({
      clipPath: `circle(${height * 2}px at ${width - 54}px 86px)`,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: ({height = 1000, width = 1000}) => ({
      clipPath: `circle(23px at ${width - 54}px 86px)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    })
  };

  function handleClick() {
    setActiveMenu(!activeMenu);
  }

  const menu = (
    <nav className="fixed left-0 top-0 w-full h-[100lvh]">
        <div className='h-[100svh] flex justify-center items-center'>
          <ul className='w-full'>
            <li className="menu-item"><a onClick={handleClick}>Carrera de Ingenieria de<br/> Software</a></li>
            <li className="menu-item"><a onClick={handleClick}>Docentes</a></li>
            <li className="menu-item"><a onClick={handleClick}>Laboratorio Bigatic</a></li>
            <li className="menu-item"><a onClick={handleClick}>Semillero Laboratorio Bigatic</a></li>
            <li className="menu-item"><a onClick={handleClick}>Eventos</a></li>
            <li className="menu-item"><a onClick={handleClick}>Contactanos</a></li>
          </ul>
        </div>
    </nav>
  );

  return(
    <motion.div 
      className='fixed top-0 right-0 w-full h-full backdrop-blur-md bg-black/[0.05]'
      initial={"closed"}
      animate={activeMenu ? "open" : "closed"}
      custom={{height, width}}
      ref={containerRef}
      variants={sidebar}
    >
      <motion.a className='absolute top-16 right-[2rem] z-10' onClick={handleClick}>
        <motion.img className='rounded-full float-right' src="/bar-menu.svg" alt="Menu"/>
      </motion.a>
      {activeMenu && menu}
    </motion.div>
  );
}