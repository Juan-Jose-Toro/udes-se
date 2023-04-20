import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
// import { isMobile } from 'react-device-detect';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

export default function Carousel() {
  // Media queries match those defined in tailwind
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  // Carousel is only infinite for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, startIndex: 1 });

  return (
    <>
      <nav className='pt-[2rem]'>
        <div className='overflow-hidden' ref={emblaRef}>
          <ul className='flex h-[20rem] items-end'>
            <li
              className='flex-[0_0_auto] block min-w-0 h-[200px] w-[10rem] mr-4 rounded-md border-2 border-black'
            ></li>
            {eventList.map((name, i) => (
              <li
                className={'flex items-end flex-[0_0_auto] min-w-0 mr-4 h-full'}
                key={nanoid()}
              >
                <Link
                  className='flex items-end flex-[0_0_auto] min-w-0 h-full' 
                  href={`/eventos/${name}`}>
                  <motion.img
                    // Height of image changes on hover only for non-mobile
                    whileHover={ isMobile ? {} : {
                      height: '100%',
                      width: 'auto',
                      transition: {
                        delay: .1,
                      }
                    }}
                    src={`/${name}.png`}
                    className={"rounded-md block object-contain" + ( i === 0 ? ' h-full w-auto' : ' w-[10rem]')}
                    alt={'Evento brochure'}
                  />
                </Link>
              </li>
            ))}
            <li
              className='flex-[0_0_auto] block min-w-0 h-[200px] w-[10rem] mr-4 rounded-md border-2 border-black'
            ></li>
                        <li
              className='flex-[0_0_auto] block min-w-0 h-[200px] w-[10rem] mr-4 rounded-md border-2 border-black'
            ></li>
                        <li
              className='flex-[0_0_auto] block min-w-0 h-[200px] w-[10rem] mr-4 rounded-md border-2 border-black'
            ></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

const eventList = ['evento1', 'evento2'];
