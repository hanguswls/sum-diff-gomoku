import useStoneStore from "../../../stores/useStoneStore";
import { BlackStone, WhiteStone } from "./Stone.styles";
import { motion } from "motion/react";
import { useEffect, useState } from 'react';

function MouseFollowingStone() {
 const { selectedStone } = useStoneStore();
 const Stone = (selectedStone?.color === 'white') ? WhiteStone : BlackStone;

 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
   const updateMousePosition = (e: MouseEvent) => {
     setMousePosition({ x: e.clientX, y: e.clientY });
   };

   if (selectedStone) {
     window.addEventListener('mousemove', updateMousePosition);
   }

   return () => {
     window.removeEventListener('mousemove', updateMousePosition);
   };
 }, [selectedStone]);

 if (!selectedStone) return null;

 return (
   <motion.div
     style={{
       position: 'fixed',
       pointerEvents: 'none',
       zIndex: 1000,
       left: `${mousePosition.x}px`,
       top: `${mousePosition.y}px`,
       transform: 'translate(-50%,-50%)' // Center the element on the mouse cursor
     }}
   >
     <Stone>{selectedStone.type}</Stone>
   </motion.div>
 );
}

export default MouseFollowingStone;