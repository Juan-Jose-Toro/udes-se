import { useEffect, useState } from "react";

export const useDimensions = ref => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      console.log('here');
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // dimensions.current.width = ref.current?.offsetWidth;
      // dimensions.current.height = ref.current?.offsetHeight;
    }

    window.addEventListener('rezise', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return dimensions;
};

