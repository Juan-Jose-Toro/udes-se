import React, { useRef } from 'react';
import { Inter } from 'next/font/google';
import BurgerMenu from '@/components/BurgerMenu';
import ProfileGraph from '@/components/ProfileGraph';
import Capacitaciones from '@/components/Capacitaciones';
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
    <div ref={pageContainer} className='mx-auto pt-[2rem]'>
      {/* Logo & Menu */}
      <header id="hero" ref={heroRef} className='flex justify-between pb-[3rem]'>
        <img className='pl-[2rem]' src="/sm-logo.svg" alt="Logo"/>
        {/* Burger menu black dot is positioned as a fixed 2rem */}
        <BurgerMenu activeSection={activeSection} arrRef={[heroRef, equipoRef, semilleroRef, eventosRef, contactoRef]}/>
      </header>

      <main className=''>
        {/* Hero */}
        <header className='pb-[12rem]'>
          <div className='max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem] mx-auto md:grid md:grid-cols-10'>
            <h1 className='pb-[1.5rem] md:text-right md:col-start-6 md:col-end-11 lg:col-start-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className='text-right md:text-left md:col-start-4 md:col-end-10 lg:col-start-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis, est id tincidunt mattis, nibh lorem finibus odio, at sagittis ante libero id erat. Ut ut lectus in nisi interdum dictum ac sed tortor. Mauris eget turpis ligula. In hac habitasse platea dictumst.
            </p>
          </div>

          {/* Auxiliar nav menu & contact logos */}
          <div className='hidden md:flex px-[2rem] pt-[3rem] justify-between'>
            <nav>
              <ul>
                <li className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a href="#hero">Carrera de ingeniería de software</a></li>
                <li className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a href="#equipo">Docentes</a></li>
                <li className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a href="#semillero">Semillero Laboratorio Bigatic</a></li>
                <li className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a href="#eventos">Eventos</a></li>
                <li className='pb-[1rem] before:w-[1rem] before:h-[0.3rem] before:bg-black before:mr-[0.5rem] before:inline-block'><a href="#contacto">Contactanos</a></li>
              </ul>
            </nav>
            <div className='flex'>
              <a className='mr-[1rem] self-end' href="https://www.instagram.com/ing.software.udes/"><img src="/instagram-logo.svg" alt="instagram-logo" /></a>
              <a className='self-end' href="https://www.facebook.com/Ing.SoftwareUDES/?locale=es_LA"><img  src="/facebook-logo.svg" alt="facebook-logo"/></a>
            </div>
          </div>
        </header>
        
        {/* padding wrapper */}
        <div className='mx-auto max-w-[20rem] md:max-w-[40rem] lg:max-w-[65rem]'>
          {/* Nuestro Equipo */}
          <section id="equipo" ref={equipoRef}>
            <h1 
              className='pb-[3rem]'
            >Nuestro Equipo</h1>
            <ProfileGraph/>
          </section>

          {/* Semillero de Investigacion */}
          <section id="semillero" ref={semilleroRef}>
            <div className='lg:grid lg:grid-cols-10'>
              <h1 className='pb-[1.5rem] lg:col-start-1 lg:col-end-4'>Semillero de Investigacion</h1>
              <p className='pb-[2rem] lg:col-start-5 lg:col-end-11'>El semillero de Investigación <strong>BiGaTic</strong>, que se enfoca a la formación de estudiantes innovadores y desarrolladores de soluciones con enfoque en pensamiento sistémico, que aportan lógica de programación para llevar a un avance sustancial a la Universidad de Santander en el tema de las nuevas tecnologías de la información y la comunidad del siglo XXI.</p>
            </div>

            {/* Wrapper of a project stage*/}
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 pb-[2rem] gap-4'>
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
            </div>
          </section>

          {/* Capacitaciones Previas */}
          <section>
            <h1 className='pb-[2rem]'>Capacitaciones Previas</h1>
            <Capacitaciones/>
          </section>
        </div>
      </main>
   </div>

    {/* Eventos */}
    <h1 id="eventos" ref={eventosRef} className='px-[2rem] md:px-[4rem]'>Eventos</h1>
    <section>
      <Carousel/>
    </section>

    {/* Footer / Contacto */}
    <footer id="contacto" className='px-[2rem] bg-black rounded-t-[2rem]' ref={contactoRef}>
      <h1 className='text-white pt-[4rem] pb-[20rem] text-center'>Contactanos</h1>
    </footer>
  </>)
}