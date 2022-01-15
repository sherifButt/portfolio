import { useState, useRef, useEffect, React } from "react";
import { useInView } from "react-intersection-observer";
import {
   useAnimation,
   motion,
   AnimatePresence,
} from "framer-motion";

const TextSlider = ({ text, loop }) => {
   // text loop
   const [initialText, setInitialtext] = useState();
   const [titleLooped, setTitleLooped] = useState(
      "hi there how are you?"
   );

   const [testText, setTestText] = useState({});
   const [titleOpacity, setTitleOpacity] = useState(1);
   const [titleY, setTitleY] = useState(-10);

   const count = useRef(0);

   const setText = (text, loop) => {
      const textArr = text.split(" ");
      const loopArr = Object.keys(loop);
      const largestArr = [];
      const obj = {};
      //---------- Loop ----------//
      const textArr_01 = textArr.map((word, idx) => {
         let currentWord;

         loopArr.map((loopWord, idx) => {
            if (word === loopWord) {
               currentWord = loopWord;
            }
            return currentWord;
         });

         if (loop[word] !== undefined)
            largestArr.push(loop[word].length);
         //   console.log(count.current, Math.max(...largestArr), largestArr);

         if (
            count.current > Math.max(...largestArr) &&
            largestArr.length !== 0
         )
            count.current = 0;

         if (currentWord === word) {
            return (
               <motion.span
                  key={word + "__" + idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: titleOpacity, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-4xl text-center mb-12 font-semibold leading-normal font-heading dark:text-gray-200 ">
                  {" "}
                  {loop[word] &&
                  loop[word][count.current] !== undefined
                     ? testText[idx]
                     : loop[word][loop[word].length - 1]}{" "}
               </motion.span>
            );
         } else
            return (
               <span key={word + "___" + idx}> {word} </span>
            );
      });

      console.log(textArr_01);
      count.current++;
      return textArr_01;
   };

   /////////////

   const loopText = (text, loop) => {
      const textArr = text.split(" ");
      const loopArr = Object.keys(loop);
      const largestArr = [];
      const obj = {};
      //---------- Loop ----------//
      const textArr_01 = textArr.map((word, idx) => {
         let currentWord;

         loopArr.map((loopWord, idx) => {
            if (word === loopWord) {
               currentWord = loopWord;
            }
            return currentWord;
         });

         if (loop[word] !== undefined)
            largestArr.push(loop[word].length);
         //   console.log(count.current, Math.max(...largestArr), largestArr);

         if (
            count.current > Math.max(...largestArr) &&
            largestArr.length !== 0
         )
            count.current = 0;

         if (currentWord === word) {
            obj = { ...obj, [idx]: word };
            console.log("obj->", obj);
            setTestText(obj);
         }
      });

      console.log(textArr_01);
      count.current++;
      return textArr_01;
   };

   ////////////////

   const _loopText = (text, loop) => {
      const textArr = text.split(" ");
      const loopArr = Object.keys(loop);
      const largestArr = [];

      //---------- Loop ----------//

      const textArr_02 = textArr.map((word, idx) => {
         let currentWord;

         loopArr.map((loopWord, idx) => {
            if (word === loopWord) {
               currentWord = loopWord;
            }
            return currentWord;
         });

         if (loop[word] !== undefined)
            largestArr.push(loop[word].length);
         //   console.log(count.current, Math.max(...largestArr), largestArr);

         if (
            count.current > Math.max(...largestArr) &&
            largestArr.length !== 0
         )
            count.current = 0;

         if (currentWord === word) {
            return loop[word] &&
               loop[word][count.current] !== undefined ? (
               <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: titleOpacity, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="ease-in duration-300 text-4xl text-center mb-12 font-semibold leading-normal font-heading dark:text-gray-200 ">
                  {" "}
                  {loop[word][count.current]}{" "}
               </motion.span>
            ) : (
               <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: titleOpacity, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="ease-in duration-300 text-4xl text-center mb-12 font-semibold leading-normal font-heading dark:text-gray-200 ">
                  {" "}
                  {loop[word][loop[word].length - 1]}{" "}
               </motion.span>
            );
         } else
            return <span key={word + "_" + idx}> {word} </span>;
      });

      console.log(textArr_02);
      count.current++;
      return textArr_02;
   };

   useEffect(() => {
      setInitialtext(setText(text, loop));
      setInterval(() => {
         // setTitleOpacity(1);
         // setTitleY(0)
         setTimeout(() => {
            setTitleOpacity(1);
            // setTitleY(-10)
         }, 1000);
         loopText(text, loop);
         setTimeout(() => {
            setTitleOpacity(0);
            // setTitleY(-10)
         }, 1000);
      }, 3000);
      //   setTitleLooped(loopText(text, loop));
   }, []);

   return <AnimatePresence>{initialText}</AnimatePresence>;
};

export default TextSlider;
