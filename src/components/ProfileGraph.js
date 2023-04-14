import React from 'react';
import Image from 'next/image';
import { nanoid } from 'nanoid';

// This section will probably fetch some data
export default function ProfileGraph() {
  const profilesData = [
    { name: "Bob Smith", src: "/profile-placeholder.png" },
    { name: "Sofia Stone", src: "/profile-placeholder.png" },
    { name: "Alice Roberts", src: "/profile-placeholder.png" },
    { name: "Johnson Lara", src: "/profile-placeholder.png" },
  ];

  // create each indivial profile with their name and their image
  const profiles = profilesData.map(({ name, src }) => (
    // Here the padding is calculated as 152px-40px
    <div key={nanoid()} className='flex flex-col items-center justify-between pb-[112px]'>
      {/* For Image it is required to pass a string */}
      <Image className='rounded-full' width={152} height={152} src={src} alt={`Foto de perfil de ${name}`}/>
      <p className="pt-4" alt={`Descripción de perfil de ${name}`}>{name}</p>
    </div>
  ));

  return (
    <div className='grid grid-cols-2'>
      <div className=''>
        {profiles.slice(0,Math.floor(profiles.length/2))}
      </div>
      <div className='pt-[152px]'>
        {profiles.slice(Math.floor(profiles.length/2))}
      </div>
    </div>
  );
}