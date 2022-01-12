import { useState, useEffect, useRef } from "react";
import Feature from "../FeatureCard_01";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
   useAnimation,
   motion,
   AnimatePresence,
} from "framer-motion";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,

      transition: {
         when: "beforeChildren",
         staggerChildren: 0.6,
         duration: 0.3,
      },
   },
};

const item = {
   hidden: { opacity: 0, x: -10 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Features = ({
   title,
   subtitle,
   ctaButton,
   subCta,
   features,
}) => {
   // text loop
   const [titleLooped, setTitleLooped] = useState(title);
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
            i.current >= Math.max(...largestArr) &&
            largestArr.length !== 0
         )
            i.current = 0;
         console.log(`i.current+1`, i.current + 1, value.length);
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

   const loop1 = {
      hi: ["Helo", "howdi", "hio", "bllo", "chiao", "hi"],
      sherif: ["sheriff", "sheko", "sherif"],
      good: ["exelent", "amazing", "sweet", "good"],
   };

   // text loop animation
   const varinatsTextLoop = {
      hidden: { opacity: 0, y: -5 },
      visible: { opacity: 1, x: 0 },
   };

   // framer motion animation control
   const controlFeaturesAnimation = useAnimation();

   // Hook allow us to control the elemnt in the screen view
   let { inView, entry, ref } = useInView({
      threshold: 0.5,
      triggerOnce: false,
   });

   if (inView) {
      controlFeaturesAnimation.start("visible");
   }

   if (inView) {
      // console.log(
      //    loopText("well hi sherif hi again good", loop1)
      // );
   }

   useEffect(() => {
      let i = true;
      setInterval(() => {
         let text = loopText(
            "well hi sherif hi again good",
            loop1
         );
         setTitleOpacity( 1 );
         // setTitleY(0)
         setTitleLooped(text);

         setTimeout(() => {
            setTitleOpacity( 0 );
            // setTitleY(-10)
         }, 2000);
      }, 3000);
      // return () => clearInterval(interval);
   }, []);

   return (
      <div className="py-12 px-4 ">
         <h2 className="text-4xl text-center  mb-12 font-semibold leading-normal font-heading dark:text-gray-200 ">
            Hi there{" "}
            <motion.span
               key="title"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: titleOpacity, y: titleY }}
               exit={{ opacity: 0 }}>
               {/* {text} */}
               {titleLooped}
            </motion.span>{" "}
            in the{" "}
            <motion.span
               key="title"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: titleOpacity, y: titleY }}
               exit={{ opacity: 0 }}>
               {/* {text} */}
               {titleLooped}
            </motion.span>
         </h2>

         <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controlFeaturesAnimation}>
            <p className="text-center mt-2 max-w-2xl mx-auto text-xl text-gray-500 md:mt-4">
               {subtitle}
            </p>

            <div className="my-12">
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {features
                     ?.filter(Boolean)
                     .map((feature, i) => (
                        <motion.div
                           variants={item}
                           key={"blogp_" + i}>
                           <Feature
                              key={`Feature_${i}`}
                              item={item}
                              path={feature.path}
                              title={feature.title}
                              text={feature.text}
                           />
                        </motion.div>
                     ))}
               </div>
            </div>
            <div className="text-center">
               <Link href="#" passHref>
                  <a
                     className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow-lg shadow-indigo-500/50 hover:shadow-indigo-700/40"
                     href="#">
                     {ctaButton.text}{" "}
                     <span className="font-light">
                        {ctaButton.textLight}{" "}
                        {String.fromCharCode(ctaButton.icon)}{" "}
                     </span>
                  </a>
               </Link>
               <p className="text-sm text-gray-400 mt-5">
                  {subCta}
               </p>
            </div>
         </motion.div>
      </div>
   );
};

export default Features;
