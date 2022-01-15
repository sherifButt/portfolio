import { useState, useRef, useEffect, React } from "react";
import { useInView } from "react-intersection-observer";
import {
   useAnimation,
   motion,
   AnimatePresence,
   AnimateSharedLayout,
} from "framer-motion";

const TextSlider = ({ text, loop }) => {
   // text loop
   const [titleLooped, setTitleLooped] = useState();
   const [titleOpacity, setTitleOpacity] = useState(1);
   const [titleY, setTitleY] = useState(-10);
   let xjs;
   // const []

   const i = useRef(0);
   const loopText = (str, toBeReplaced) => {
      let text = str;

      const wordsToLoopCount = Object.keys(toBeReplaced);
      const largestArr = [];
      for (const [key, value] of Object.entries(toBeReplaced)) {
         if (
            i.current > Math.max(...largestArr) &&
            largestArr.length !== 0
         )
            i.current = 0;
         console.log(
            `ooooooooooooooo`,
            i.current + 1,
            value.length,
            Math.max(...largestArr),
            largestArr
         );
         largestArr.push(value.length);

         if (i.current + 1 > value.length) {
            text = text.replace(
               new RegExp(key.toString(), "g"),
               value[value.length - 1]
            );
         } else {
            text = text.replace(
               new RegExp(key.toString(), "g"),
               value[i.current]
            );
            console.log(`text`, text, i.current, largestArr);
         }
      }
      i.current++;

      xjs = (
         <motion.h2
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-4xl text-center mb-12 font-semibold leading-normal font-heading dark:text-gray-200 ">
            {text}
            {/* {titleLooped} */}
         </motion.h2>
      );

      return text;
   };

   useEffect(() => {
      let i = true;
      setInterval(() => {
         let _text = loopText(text, loop);
         setTitleOpacity(1);
         // setTitleY(0)
         setTitleLooped(_text);

         setTimeout(() => {
            setTitleOpacity(0);
            // setTitleY(-10)
         }, 2000);
      }, 3000);
      // return () => clearInterval(interval);
   }, []);

   return (
      <motion.span
         key="title"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: titleOpacity, y: titleY }}
         exit={{ opacity: 0 }}>
         {/* {text} */}
         {titleLooped}
      </motion.span>
   );
};

export default TextSlider;
