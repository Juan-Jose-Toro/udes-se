import React, { useEffect, useState, useRef } from 'react';
import { useCenter } from '../hooks/useCenter';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';

export default function BurgerMenu(props) {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const { activeSection, arrRef } = props;
  const [ activeMenu, setActiveMenu ] = useState(false);
  const { width, height } = useCenter(circleRef);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // refactor with a ref to the circle 
  const sidebarVariants = {
    open: ({height, width}) => ({
      clipPath: `circle(1500px at ${width}px ${height}px)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: ({height, width}) => ({
      clipPath: `circle(23px at ${width}px ${height}px)`,
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
    <motion.li
      className='menu-item'
      key={nanoid()}
    >
      <motion.a
        className={(activeSection == i ? 'text-gray-400' : 'text-white')}
        onClick={() => handleClick(i)}>
        {section}
      </motion.a>
    </motion.li>
    );
    });

  const menu = (
    <motion.nav
      className="fixed left-0 top-0 w-full h-[100lvh]"
      key={nanoid()}
      >
        <motion.div className='h-[100svh] flex justify-center items-center'>
          <motion.ul className='w-full'>
            {sections}
          </motion.ul>
        </motion.div>
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
      initial={false}
      animate={activeMenu ? "open" : "closed"}
      custom={{height, width}}
      variants={sidebarVariants}
      ref={containerRef}
    >
      <div className='container'>
        <motion.a ref={circleRef} className='absolute top-16 right-[2rem] z-10' onClick={() => {setActiveMenu(!activeMenu)}}>
          <motion.img className='rounded-full float-right' src="/bar-menu.svg" alt="Menu"
          />
        </motion.a>
      </div>
      {menu}
    </motion.div>
  );
}