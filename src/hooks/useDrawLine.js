import React, { useState, useEffect, useRef } from 'react';
import { getCoordsOfChildren, getCoordsElement, generateLinesBetweenItems, toLineObjectFormat } from '../lib/coords';
import useResizeObserver from '@react-hook/resize-observer';

// useDrawLine(container, mapFn) takes a ref, container, and a simple math function mapFn. It joins childrens of container with a line that has a ball passing through it.
// Example:
// - mapFbn -> (i) => {i+2}
// | 1 |-\/-| 2 |
// | 3 |-/\-| 4 |
export function useDrawLine(containerRef, mapFn) {
  // linesCoords stores an array of objects each with properties
  //  x1 y1 x2 y2. This state is used to know where to draw the 
  //  lines in the background of the "equipo" section.
  // Example: linesCoords = [{x1: 0, y1: 0, x2: 100, y2: 100}]
  const [linesCoords, setLineCoords] = useState([{}]);
  const [cachedWidth, setCachedWidth] = useState(0);

  console.log(mapFn);

  const handleLineCoordsUpdate = () => {
    const measures = containerRef.current?.getBoundingClientRect();
    if (measures && mapFn && measures.width !== cachedWidth) {
      const { width, height } = measures;
      console.log("updating");
      console.log("width: " + width + ", height: " + height);
      console.log("cached width: " + cachedWidth);
      const childrenArr =  Array.from(containerRef.current.children).map(child => getCoordsElement(child.firstChild.firstChild));

      let pairsCoords = [];
      for (let i = 0; i < childrenArr.length; i++) {
        let pair = mapFn(i);
        if (pair >= childrenArr.length) break;
        else {
          let a = childrenArr[i];
          let b = childrenArr[pair];
          pairsCoords.push({height, width, ...toLineObjectFormat(a,b)});
        }
      }
      setLineCoords(pairsCoords);
      setCachedWidth(width);
    }
  }

  useResizeObserver(containerRef, handleLineCoordsUpdate);

  // After components has rendered draw lines between items
  useEffect(() => {
    // if (containerRef && containerRef.current) {
    //   handleLineCoordsUpdate()
    //   const resizeObserver = new ResizeObserver(handleLineCoordsUpdate);
    //   resizeObserver.observe(containerRef.current);
    //   return () => resizeObserver.disconnect();
    // }
    
    // if (containerRef && containerRef.current) {
    //     containerRef.current.addEventListener("resize", handleLineCoordsUpdate, false);
    //     containerRef.current.addEventListener("orientationchange", handleLineCoordsUpdate, false);
  
    //     handleLineCoordsUpdate();
  
    //     return () => {
    //       containerRef.current.removeEventListener("resize", handleLineCoordsUpdate, false);
    //       containerRef.current.removeEventListener("orientationchange", handleLineCoordsUpdate, false);
    //     };
    // }
  }, []);
  return linesCoords;
}