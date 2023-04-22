import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import Image from 'next/image';

export default function CapacitacionesPrevias() {
  const [isMenu, setIsMenu] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const menuItemRef = useRef(null);

  const mouseEnter = (e) => {
    menuItemRef.current.focus();
  }

  // content can be html items instead of text
  const fetchedData = [
    {title: "Introducción a control de versiones con Git", content: "cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc "},
    {title: "Introducción a Docker", content: "cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc "},
    {title: "Docker Avanzado", content: "cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc "},
    {title: "Introducción a Unity", content: "cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc "},
  ]

  const menuTemplate = (
    <motion.div
      className=''
      key={nanoid()}
      transition={{ ease: "easeInOut", duration: 0.2}}
      initial={false}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <a 
        className={'border-bottom flex justify-between py-[2rem] border-b-2 border-primary-gray' + 
        (activeItem == 0 ? " text-black" : " text-primary-gray")}
        onClick={() => {setIsMenu(false); setActiveItem(0); console.log("clicked")}}
      >
        <h2 className='font-bold'>01</h2>
        <h2 className='font-bold w-[75%]'>Introducción a control de versiones con Git</h2>
      </a>

      <a className={'border-bottom flex justify-between py-[2rem] border-b-2 border-primary-gray' +
       (activeItem == 1 ? " text-black" : " text-primary-gray")}
        onClick={() => {setIsMenu(false); setActiveItem(1)}}
      >
        <h2 className='font-bold'>02</h2>
        <h2 className='font-bold w-[75%]'>Introducción a Docker</h2>
      </a>

      <a className={'border-bottom flex justify-between py-[2rem] border-b-2 border-primary-gray' +
       (activeItem == 2 ? " text-black" : " text-primary-gray")}
        onClick={() => {setIsMenu(false); setActiveItem(2)}} 
      >
        <h2 className='font-bold'>03</h2>
        <h2 className='font-bold w-[75%]'>Docker Avanzado</h2>
      </a>

      <a className={'border-bottom flex justify-between py-[2rem]' +
       (activeItem == 3 ? " text-black" : " text-primary-gray")}
        onClick={() => {setIsMenu(false); setActiveItem(3)}} 
      >
        <h2 className='font-bold'>04</h2>
        <h2 className='font-bold w-[75%]'>Introducción a Unity</h2>
      </a>
    </motion.div>
  );

  const menuItemTemplate = (
    <motion.div
      onMouseEnter={mouseEnter}
      ref={menuItemRef}
      className='lg:pt-[2rem] overflow-scroll'
      key={nanoid()}
      transition={{ ease: "easeInOut", duration: 0.2}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className='flex justify-between align-middle lg:hidden'>
        <h2 className='py-[2rem] font-bold'>{fetchedData[activeItem].title}</h2>
        <a className='flex justify-between align-middle flex-shrink-0'
          onClick={() => setIsMenu(true)}
        >
          <img className='w-4' src="/arrow.svg" alt="go back arrow icon" />
        </a>
      </div>
     
      <div className='h-[29rem] overflow-scroll rounded-md'>
        <p>{fetchedData[activeItem].content}<br/><br/>

        lorem ipsum dolor sit amet, consectetur adipiscing elit.  cras sed bibendum diam. nunc dictum eros a.
        </p>

        <div className='relative h-36 bg-red-400 rounded-md overflow-hidden my-[2rem]'>
          <Image
            className='object-cover'
            fill
            src="/workshop.jpeg" 
            alt="workshop image"  
          />
        </div>

        <p>cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc <br/><br/>

        cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc <br/><br/>
        cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc <br/><br/>
        cras sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc aliquet lorem quis orci aliquet condimentum. lorem ipsum dolor sit amet, consectetur adipiscing elit.  sed bibendum diam. nunc dictum eros a dolor lobortis faucibus. nunc <br/><br/>
        lorem ipsum dolor sit amet, consectetur adipiscing elit.  cras sed bibendum diam. nunc dictum eros a.
        </p>
      </div>
    </motion.div>
  );
  
  return (
    <div className='h-[32rem] overflow-hidden'>
      <div className='lg:hidden'>
        <AnimatePresence initial={false} mode="wait">
          {isMenu ? menuTemplate : menuItemTemplate}
        </AnimatePresence>
      </div>
      <div className='hidden lg:grid lg:grid-cols-10'>
        {/* <AnimatePresence initial={false} mode="wait"> */}
          <div className='lg:col-start-1 lg:col-end-7'>{menuItemTemplate}
          </div>
          <div className='lg:col-start-8 lg:col-end-11'>
            {menuTemplate}
          </div>
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}