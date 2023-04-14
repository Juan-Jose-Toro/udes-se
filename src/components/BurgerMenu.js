import React, { useEffect, useState } from 'react';

export default function BurgerMenu() {

  const [activeMenu, setActiveMenu] = useState(false);

  function handleClick() {
    setActiveMenu(!activeMenu);
  }

  const menu = (
    <nav className="fixed left-0 top-0 w-full h-[100lvh] bg-black bg-opacity-10 backdrop-blur-md">
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
    <>
      <a className='fixed top-16 right-[2rem]' onClick={handleClick}>
        <img className='rounded-full backdrop-blur-md' src="/bar-menu.svg" alt="Menu"/>
      </a>
      {activeMenu && menu}
    </>
  );
}