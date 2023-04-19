import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

export default function Carousel() {
  // Carousel is only infinite for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel(
    (isMobile ? { dragFree: true,  startIndex: 1, loop: true } : { dragFree: true,  startIndex: 1})
  );

  useEffect(() => {
    if (emblaApi) console.log(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  return (
    <>
      <nav className='pt-[2rem]'>
        <div className='overflow-hidden' ref={emblaRef}>
          <ul className='flex h-[20rem] items-end'>
            <li
              className='flex-[0_0_auto] min-w-0 h-[200px] w-[300px] mr-4 rounded-md border-2 border-black'
            ></li>
            {catList.map((cat, i) => (
              <li
                className={'flex items-end flex-[0_0_auto] min-w-0 mr-4 h-full'}
                key={cat.id}
              >
                <motion.img
                  // Height of image changes on hover only for non-mobile
                  whileHover={ isMobile ? {} : {
                    height: '100%',
                    width: 'auto',
                    transition: {
                      delay: .1,
                    }
                  }}
                  className={"rounded-md"  + ( i === 0 ? ' h-full w-auto' : '')}
                  src={cat.imageUrl}
                  alt={'Cat #' + cat.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}
