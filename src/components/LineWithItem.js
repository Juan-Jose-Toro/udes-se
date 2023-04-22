import React, { useState } from "react";
import { motion } from "framer-motion";


export default function LineWithItem(props) {  
  const {width, height} = props;

  const [dur, setDur] = useState(1 + Math.random() * 4);
  // const [svgWidth, setSvgWidth] = useState(width);
  // const [svgHeight, setSvgHeight] = useState(height);
  const [lineColor, setLineColor] = useState("#000000");
  const [prevColor, setPrevColor] = useState("#000000");

  function getRandomHexColor() {
    return (Math.random() < .2 ? "#FFA500" : "#000000");
  }

  return(<>
    <motion.svg
      key={dur}
      className='absolute top-0 left-0 -z-10'
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <motion.path
        d={`M ${props.x1},${props.y1} L ${props.x2},${props.y2}`}
        transition={{ 
          duration: 0.2,
        }}
        stroke={prevColor}
        animate={{stroke: lineColor}}
        strokeWidth={2}
        strokeDasharray={5}
      >
      </motion.path>

      <motion.circle
        cx={props.x1}
        cy={props.y1}
        fill={lineColor}
        r="10"
        animate={{ x: props.x2 - props.x1, y: props.y2 - props.y1}}
        transition={{ 
          ease: "linear",
          duration: dur,
          delay: dur,
        }}
        onAnimationComplete={() => {
          setDur(1 + Math.random() * 4);
          setLineColor(getRandomHexColor());
          setPrevColor(lineColor);
        }}
      >
      </motion.circle>
    </motion.svg>
  </>)
}
