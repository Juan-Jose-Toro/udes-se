import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

// this section will probably fetch some data
export default function ProfileGraph() {
  // media queries as defined by tailwind css
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(max-width: 100000px)' });

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  

  const profilesData = [
    { name: "Bob Smith", src: "/profile-placeholder.png" },
    { name: "Sofia Stone", src: "/profile-placeholder.png" },
    { name: "Alice Roberts", src: "/profile-placeholder.png" },
    { name: "Johnson Lara", src: "/profile-placeholder.png" },
  ];

  // create each indivial profile with their name and their image
  const profiles = profilesData.map(({ name, src }) => (
    // here the padding is calculated as 152px-40px
    <div key={nanoid()} className='flex flex-col items-center justify-between pb-[112px]'>
      {/* for Image it is required to pass a string */}
      <Link href={`/docentes/${name}`}>
        <Image className='rounded-full' width={152} height={152} src={src} alt={`Foto de perfil de ${name}`}/>
      </Link>
      <p className="pt-4" alt={`Descripción de perfil de ${name}`}>{name}</p>
    </div>
  ));

  const mobileTemplate = (<>
    <div className='grid grid-cols-2'>
      <div className=''>
        {profiles.slice(0,Math.floor(profiles.length/2))}
      </div>
      <div className='pt-[152px]'>
        {profiles.slice(Math.floor(profiles.length/2))}
      </div>
    </div>
  </>)

  const tabletTemplate = (<>
    <div className='grid grid-cols-3'>
      <div className=''>
        {profiles.slice(0,Math.floor(profiles.length/3))}
      </div>
      <div className='pt-[152px]'>
        {profiles.slice(Math.floor(profiles.length/3),Math.floor(profiles.length*2/3))}
      </div>
      <div className=''>
        {profiles.slice(Math.floor(profiles.length*2/3))}
      </div>
    </div>
  </>)

  const desktopTemplate = (<>
    <div className='grid grid-cols-4'>
      <div className=''>
        {profiles.slice(0,Math.floor(profiles.length/4))}
      </div>
      <div className='pt-[152px]'>
        {profiles.slice(Math.floor(profiles.length/4),Math.floor(profiles.length/2))}
      </div>
      <div className=''>
        {profiles.slice(Math.floor(profiles.length/2),Math.floor(profiles.length*3/4))}
      </div>
      <div className='pt-[152px]'>
        {profiles.slice(Math.floor(profiles.length*3/4))}
      </div>
    </div>
  </>)

  return (<>
    {
      domLoaded && (
      isMobile && mobileTemplate ||
      isTablet && tabletTemplate ||
      isDesktop && desktopTemplate )
    }
  </>);
}