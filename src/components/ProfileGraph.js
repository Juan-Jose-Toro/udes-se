import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';
import { useDrawLine } from '../hooks/useDrawLine';
import LineWithItem from './LineWithItem';
import { BreakPointHooks, breakpointsTailwind } from '@react-hooks-library/core'


const { useGreater, useBetween, useSmaller } = BreakPointHooks(breakpointsTailwind)

// this section will probably fetch some data
export default function ProfileGraph() {
  const containerRef = useRef(null);
  const smaller = useSmaller('md');
  const fn = useCallback(i => {
    if (!smaller) return ( i < 3 ? i+1 : i );
    else {
      if (i == 0) return i+3;
      if (i !== 1) return i+1;
      if (i == 1) return 0;
    }
  }, [smaller]);

  console.log(smaller);
  console.log(fn);
  const arrayOfCoords = [
    ...useDrawLine(containerRef, fn),
  ];
  
  const profilesData = [
    { name: "Bob Smith", src: "/profile-placeholder.png" },
    { name: "Sofia Stone", src: "/profile-placeholder.png" },
    { name: "Alice Roberts", src: "/profile-placeholder.png" },
    { name: "Johnson Lara", src: "/profile-placeholder.png" },
  ];

  // create each indivial profile with their name and their image
  const profiles = profilesData.map( ({ name, src }, i) => {
    return (
      // here the padding is calculated as 152px-40px
      <div key={nanoid()} className={'flex flex-col items-center justify-between' + (i % 2 === 0 ? ' pt-[10rem]' : '')}>
        {/* for Image it is required to pass a string */}
        <Link href={`/docentes/${name}`}>
          <Image className='rounded-full' width={152} height={152} src={src} alt={`Foto de perfil de ${name}`}/>
          <p className="pt-4 text-center" alt={`Descripción de perfil de ${name}`}>{name}</p>
        </Link>
      </div>
    )
  });

  return (<div className='relative'>
    {/* svg that contains the background that renders lines in between two div circles */}
    {arrayOfCoords.map((item) => 
      <LineWithItem 
        key={nanoid()} 
        id={`line-${item.x1 + item.y2}`} 
        x1={item.x1} y1={item.y1} 
        x2={item.x2} y2={item.y2} 
        stroke="black" 
        strokeWidth="2" 
        strokeDasharray="4"
        width={item.width}
        height={item.height}
      />
    )}
    <div ref={containerRef} className='grid grid-cols-2 md:grid-cols-4'>
      {profiles}
    </div>
  </div>);
}