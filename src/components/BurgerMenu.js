import React, { useEffect, useState, useRef } from 'react';
// import { useCenter } from '../hooks/useCenter';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';

export default function BurgerMenu(props) {
  // const circleRef = useRef(null);
  const containerRef = useRef(null);
  const { activeSection, arrRef } = props;
  const [ activeMenu, setActiveMenu ] = useState(false);
  // const { width, height } = useCenter(circleRef);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // refactor with a ref to the circle 
  const sidebarVariants = {
    open: {
      clipPath: `circle(1700px at calc(100vw - 2rem - 20px) 5rem)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: `circle(20px at calc(100vw - 2rem - 20px) 5rem)`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
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

  function handleClick(section) {
    const content = arrRef[section].current;
    setActiveMenu(!activeMenu);
    content.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <motion.div className='fixed top-0 left-0 w-full h-full bg-black z-10'
        onClick={() => setActiveMenu(!activeMenu)}
        initial={false}
        animate={activeMenu ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {/* menu - initally hidden */}
        <motion.nav
        className="w-full h-[100lvh]"
        key={nanoid()}
        >
          <motion.div className='h-[100svh] flex justify-center items-center'>
            <motion.ul className='w-full'>
              {sections}
            </motion.ul>
          </motion.div>
        </motion.nav>
      </motion.div>
    </>
  );
}