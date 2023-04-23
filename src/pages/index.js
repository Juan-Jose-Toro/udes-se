import React, { useRef } from 'react';
import { Inter } from 'next/font/google';
import BurgerMenu from '@/components/BurgerMenu';
import ProfileGraph from '@/components/ProfileGraph';
import Capacitaciones from '@/components/Capacitaciones';
import Carousel from '../components/Carousel';
import { useInView } from '../hooks/useInView';
import { container, item, scroll, reveal } from '../lib/animation';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const pageContainer = useRef(null);
  const heroRef = useRef(null);
  const equipoRef = useRef(null);
  const semilleroRef = useRef(null);
  const eventosRef = useRef(null);
  const contactoRef = useRef(null);

  const activeSection = useInView([heroRef, equipoRef, semilleroRef, eventosRef, contactoRef]);

  function handleScroll(section) {
    section.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (<>
    <div ref={pageContainer} className='mx-auto pt-[2rem]'>
      {/* Logo & Menu */}
      <motion.header 
        variants={container} initial="hidden" animate="show"
        id="hero" ref={heroRef} className='flex justify-between pb-[3rem]'>
        <div className='overflow-hidden'>
          <motion.img variants={item} className='pl-[2rem]' src="/sm-logo.svg" alt="Logo"/>
        </div>
        {/* Burger menu black dot is positioned as a fixed 2rem */}
        <BurgerMenu activeSection={activeSection} arrRef={[heroRef, equipoRef, semilleroRef, eventosRef, contactoRef]}/>
      </motion.header>

      <main className=''>
        {/* Hero */}
        <motion.header
          variants={container} initial="hidden" animate="show"
          className='pb-[12rem]'>
          <motion.div 
            className='max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem] mx-auto md:grid md:grid-cols-10'>
            <motion.div 
              className='mb-[1.5rem] md:text-right md:col-start-6 md:col-end-11 lg:col-start-5 overflow-hidden'>
              <motion.h1 variants={item}
                className='md:text-right overflow-hidden'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </motion.h1>
            </motion.div>
            <motion.div className='md:col-start-4 md:col-end-10 lg:col-start-6 overflow-hidden'>
              <motion.p variants={item}
                className='text-right md:text-left md:col-start-4 md:col-end-10 lg:col-start-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis, est id tincidunt mattis, nibh lorem finibus odio, at sagittis ante libero id erat. Ut ut lectus in nisi interdum dictum ac sed tortor. Mauris eget turpis ligula. In hac habitasse platea dictumst.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Auxiliar nav menu & contact logos */}
          <motion.div
            className='hidden md:flex px-[2rem] pt-[3rem] justify-between'>
            <nav>
              <motion.ul initial="hidden" animate="show" variants={container}>
                <div className="overflow-hidden">
                  <motion.li
                    variants={item}
                    onClick={() => handleScroll(heroRef)} className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'
                  >
                  <a>Carrera de ingeniería de software</a></motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                     variants={item}
                    onClick={() => handleScroll(equipoRef)} className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'
                  ><a>Docentes</a></motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li 
                   variants={item}
                  onClick={() => handleScroll(semilleroRef)} className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a >Semillero Laboratorio Bigatic</a></motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                   variants={item}
                  onClick={() => handleScroll(eventosRef)} className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a >Eventos</a></motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li 
                   variants={item}
                  onClick={() => handleScroll(contactoRef)} className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a>Contactanos</a></motion.li>
                </div>
              </motion.ul>
            </nav>
            <motion.div className='flex overflow-hidden'>
              <a className='mr-[1rem] self-end' href="https://www.instagram.com/ing.software.udes/">
                <motion.img variants={item} src="/instagram-logo.svg" alt="instagram-logo" />
              </a>
              <a className='self-end' href="https://www.facebook.com/Ing.SoftwareUDES/?locale=es_LA">
                <motion.img variants={item} src="/facebook-logo.svg" alt="facebook-logo"/>
              </a>
            </motion.div>
          </motion.div>
        </motion.header>
        
        {/* padding wrapper */}
        <div className='mx-auto max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem]'>
          {/* Nuestro Equipo */}
          <motion.section 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            id="equipo" ref={equipoRef}>
            <div className='overflow-hidden mb-[3rem]'>
              <motion.h1
                variants={scroll}
              >Nuestro Equipo</motion.h1>
            </div>
            <ProfileGraph/>
          </motion.section>

          {/* Semillero de Investigacion */}
          <section
            id="semillero"
            ref={semilleroRef}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className='lg:grid lg:grid-cols-10'>
              <div className='mb-[1.5rem] lg:col-start-1 lg:col-end-5 overflow-y-hidden'>
                <motion.h1 variants={scroll}>Semillero de Investigación</motion.h1>
              </div>
              <div className='mb-[2rem] lg:col-start-5 lg:col-end-11 overflow-hidden'>
                <motion.p variants={scroll}>El semillero de Investigación <strong>BiGaTic</strong>, que se enfoca a la formación de estudiantes innovadores y desarrolladores de soluciones con enfoque en pensamiento sistémico, que aportan lógica de programación para llevar a un avance sustancial a la Universidad de Santander en el tema de las nuevas tecnologías de la información y la comunidad del siglo XXI.</motion.p>
              </div>
            </motion.div>

            {/* Wrapper of a project stage*/}
            <motion.div variants={reveal} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}
            className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 pb-[2rem] gap-4'>
              {/* Teoria */}
              <div className='flex flex-col'>
                <h3 className='pb-[1rem] text-center'>Teoria</h3>
                <p className='project-section-item'>UML</p>
                <p className='project-section-item'>Programacion Orientada a Objetos</p>
                <div className='project-section-item'>
                  <p className=''>Patrones de diseno</p>
                  <img className='mx-auto py-[2rem]' src="/mcv.svg" alt="model-control-view diagram" />
                </div>
              </div>
              {/* Technologias */}
              <div className='flex flex-col'>
                <h3 className='pb-[1rem] text-center'>Technologias</h3>
                <p className='project-section-item'>C++</p>
                <p className='project-section-item'>C#</p>
                <div className='project-section-item py-[2rem]'>
                  <img className='mx-auto' src="/unity.svg" alt="unity logo" />
                </div>
                <div className='project-section-item py-[2rem]'>
                  <img className='mx-auto' src="/unreal.svg" alt="unreal engine logo" />
                </div>
              </div>
              {/* Projectos */}
              <div className='flex flex-col'>
                <h3 className='pb-[1rem] text-center'>Projectos</h3>
                <div className='project-section-item'>
                  <h2 className='font-black pt-[10rem]'>Test Auditivo para pruebas de Audiometría</h2>
                  <div className='flex justify-between'>
                    <p>Jhon Smith</p>
                    <img src="/more-info.svg" alt="" />
                  </div>
                </div>
              </div>
              {/* Area */}
              <div className='flex flex-col'>
                <h3 className='pb-[1rem] text-center'>Area</h3>
                <div className='project-section-item text-black bg-transparent border-2 border-black'>
                  <h2 className='font-black pb-[10rem]'>Desarrollo de Videojuegos Orientado a Empresas</h2>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Capacitaciones Previas */}
          <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
            <div className='mb-[2rem] overflow-hidden'>
              <motion.h1 variants={scroll}>Capacitaciones Previas</motion.h1>
            </div>
            <Capacitaciones/>
          </motion.section>
        </div>
      </main>
   </div>

    {/* Eventos */}
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className='mx-auto max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem]'>
        <motion.h1 variants={reveal} initial="offscreen" whileInView="onscreen" viewport={{ once: true }} id="eventos" ref={eventosRef} className=''>Eventos</motion.h1>
      </div>
      <motion.section variants={reveal}>
        <Carousel/>
      </motion.section>
    </motion.section>

    {/* Footer / Contacto */}
    <footer id="contacto" className='px-[2rem] bg-black rounded-t-[2rem]' ref={contactoRef}>
      <h1 className='text-white pt-[4rem] pb-[20rem] text-center'>Contactanos</h1>
    </footer>
  </>)
}