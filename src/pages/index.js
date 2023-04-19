import React, { useRef } from 'react';
import { Inter } from 'next/font/google';
import BurgerMenu from '@/components/BurgerMenu';
import ProfileGraph from '@/components/ProfileGraph';
import CapacitacionesPrevias from '@/components/CapacitacionesPrevias';
import Carousel from '../components/Carousel';
import { useInView } from '../hooks/useInView';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pageContainer = useRef(null);

  const heroRef = useRef(null);
  const equipoRef = useRef(null);
  const semilleroRef = useRef(null);
  const eventosRef = useRef(null);
  const contactoRef = useRef(null);

  const activeSection = useInView([heroRef, equipoRef, semilleroRef, eventosRef, contactoRef]);

  return (<>
    <div ref={pageContainer} className='container mx-auto pt-[3rem] px-[2rem]'>
      <header ref={heroRef} className='flex justify-between pb-[3rem]'>
        <img className='relative' src="/sm-logo.svg" alt="Logo"/>
        <BurgerMenu activeSection={activeSection} arrRef={[heroRef, equipoRef, semilleroRef, eventosRef, contactoRef]}/>
      </header>
      <main>
        {/* Hero */}
        <header className='pb-[12rem]'>
          <h1 className='pb-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis, est id tincidunt mattis, nibh lorem finibus odio, at sagittis ante libero id erat. Ut ut lectus in nisi interdum dictum ac sed tortor. Mauris eget turpis ligula. In hac habitasse platea dictumst.</p>
        </header>

        {/* Nuestro Equipo */}
        <section ref={equipoRef}>
          <h1 
            className='pb-[3rem]'
          >Nuestro Equipo</h1>
          <ProfileGraph/>
        </section>

        {/* Semillero de Investigacion */}
        <section ref={semilleroRef}>

          <h1 className='pb-[1.5rem]'>Semillero de Investigacion</h1>
          <p className='pb-[2rem]'>Cras sed bibendum diam. Nunc dictum eros a dolor lobortis faucibus. Nunc aliquet lorem quis orci aliquet condimentum. Curabitur eget arcu nulla. In auctor tempus enim, eget tristique odio porta a. Quisque elementum pellentesque enim et pharetra. Integer et metus eu sem commodo facilisis et a sem.</p>

          {/* Wrapper of a project stage*/}
          <div>
            {/* Teoria */}
            <div className='flex flex-col px-[2.5rem] pb-[2rem]'>
              <h3 className='pb-[1rem] text-center'>Teoria</h3>
              <p className='project-section-item'>UML</p>
              <p className='project-section-item'>Programacion Orientada a Objetos</p>
              <div className='project-section-item'>
                <p className=''>Patrones de diseno</p>
                <img className='mx-auto py-[2rem]' src="/mcv.svg" alt="model-control-view diagram" />
              </div>
            </div> 
            {/* Technologias */}
            <div className='flex flex-col px-[2.5rem] pb-[2rem]'>
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
            <div className='flex flex-col px-[2.5rem] pb-[2rem]'>
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
            <div className='flex flex-col px-[2.5rem] pb-[2rem]'>
              <h3 className='pb-[1rem] text-center'>Area</h3>
              <div className='project-section-item text-black bg-transparent border-2 border-black'>
                <h2 className='font-black pb-[10rem]'>Desarrollo de Videojuegos Orientado a Empresas</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Capacitaciones Previas */}
        <section>
          <h1>Capacitaciones Previas</h1>
          <CapacitacionesPrevias/>
        </section>
      </main>

      <h1 ref={eventosRef}>Eventos</h1>
   </div>
    {/* Eventos */}
    <section>
      <Carousel/>
    </section>

    {/* Footer / Contacto */}
    <footer className='px-[2rem] bg-black rounded-t-[2rem]' ref={contactoRef}>
      <h1 className='text-white pt-[4rem] pb-[20rem] text-center'>Contactanos</h1>
    </footer>
  </>)
}