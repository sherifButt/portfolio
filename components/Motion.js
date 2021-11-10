import { motion, AnimatePresence } from "framer-motion";

const Motion = ( { children } ) => {
  return (
    <motion.div
      initial={ { x: -500, opacity: 0 } }
      animate={ { scale: 1.1, x: 10, opacity: 1 } }
      transition={ {
        type: "spring",
        loop: false,
        stiffness: 260,
        damping: 20,
        delay: 1
      } }>
      { children }
    </motion.div >
  )
}

export default Motion