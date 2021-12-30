import {motion} from "framer-motion"

const fontMotion = {
   hidden: { x: -130, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", delay: 4.5, duration: 3 },
   },
};

const Blob = () => {
  return (
    <>
      <motion.h1 variants={ fontMotion } initial="hidden" animate="visible" >hi there Blob.</motion.h1>
      <svg>
        
    </svg>
    
    </>
  )
}

export default Blob
