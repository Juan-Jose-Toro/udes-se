import { useEffect, useState } from "react";

export const useDimensions = ref => {
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return dimensions;
};

