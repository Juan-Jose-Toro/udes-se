import React, { useEffect, useState, useRef } from 'react';
import { useDimensions } from '../hooks/useDimensions';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';

export default function BurgerMenu() {

  const [activeMenu, setActiveMenu] = useState(false);
  const containerRef = useRef(null);
  const {width, height} = useDimensions(containerRef);

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

  function handleClick() {
    setActiveMenu(!activeMenu);
  }

  const menu = (
    <motion.nav
      className="fixed left-0 top-0 w-full h-[100lvh]"
      key={nanoid()}
      >
        <div className='h-[100svh] flex justify-center items-center'>
          <ul className='w-full'>
            <li className="menu-item "><a onClick={handleClick}>Carrera de Ingenieria de<br/> Software</a></li>
            <li className="menu-item" href="#nuestro-equipo"><a onClick={handleClick}>Docentes</a></li>
            <li className="menu-item"><a onClick={handleClick}>Laboratorio Bigatic</a></li>
            <li className="menu-item"><a onClick={handleClick}>Semillero Laboratorio Bigatic</a></li>
            <li className="menu-item"><a onClick={handleClick}>Eventos</a></li>
            <li className="menu-item"><a onClick={handleClick}>Contactanos</a></li>
          </ul>
        </div>
    </motion.nav>
  );

  return(
    <motion.div
      className='fixed top-0 right-0 w-full h-full bg-black'
      initial={{opacity: 0}}
      animate={activeMenu ? "open" : "closed"}
      custom={{height, width}}
      variants={sidebar}
      ref={containerRef}
    >
      <motion.a className='absolute top-16 right-[2rem] z-10' onClick={handleClick}>
        <motion.img className='rounded-full float-right' src="/bar-menu.svg" alt="Menu"
        />
      </motion.a>
      {menu}
    </motion.div>
  );
}