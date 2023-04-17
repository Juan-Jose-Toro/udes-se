import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function Carousel() {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <nav>
        <button onClick={() => {
          flushSync(() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          });
          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });            
        }}>
          Next
        </button>
      </nav>
      <div className='w-full overflow-x-scroll overflow-y-hidden'>
        <ul className='list-none w-max'>
          {catList.map((cat, i) => (
            <li
              className='inline-block list-none whitespace-nowrap pr-10'
              key={cat.id}
              ref={index === i ? selectedRef : null}
            >
              <img
                className={(index === i ? 'bg-red-300 p-3 -m-3' : '') + " inline"}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
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
