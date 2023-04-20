import { useEffect, useState } from "react";

export const useCenter = ref => {
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    const current = ref.current;
    
    function handleResize() {
      setDimensions({
        width: current.offsetLeft + current.offsetWidth / 2,
        height: current.offsetTop +  current.offsetHeight / 2,
      });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return dimensions;
};

