
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import StyledLink from '../components/StyledLink'
import styled from "styled-components";
import Lottie from "../components/lottie/Lottie.js";

import {
   motion,
   useViewportScroll,
   useTransform,
   useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import Motion from "../components/Motion";
import PricingSection from "../components/PricingSection";
import ParallaxItem from "../components/UX/ParallaxItem";
import AnimatedText from "../components/AnimatedText";
import Card from "../components/Card";

export default function Home() {
   const { scrollY, scrollYProgress } = useViewportScroll();
   const y1 = useTransform( scrollY, [ 0, 400 ], [ 0, 200 ] );
   const y2 = useTransform( scrollY, [ 0, 400 ], [ 0, 500 ] );
   
   const filter = useTransform(
      scrollY,
      v => `blur(${Math.floor(v / 70)}px)`
   );

   const [ref, inView, entry] = useInView({
      threshold: 0.5,
      triggerOnce: false,
   });

   const variants = {
      visible: {
         opacity: 1,
         scale: 1,
         y: 0,
      },
      hidden: {
         opacity: 0,
         scale: 0.65,
         y: 50,
      },
   };
   return (
      <>
         <section className="py-6 px-4" inView={inView}>
            <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
               <motion.div
                  style={{
                     y: y1,
                     filter: "blur(16px)",
                     zIndex: -1,
                     position: "absolute",
                     top: 300,
                     left: 170,
                     scale: 0.4,
                  }}
                  className="lg:w-1/2 px-2"
                  initial={{ opacity: 0 }}
                  animate={{
                     opacity: 0.9,
                  }}
                  transition={{
                     // type: "spring",
                     stiffness: 260,
                     damping: 20,
                     duration: 2,
                  }}>
                  <motion.div
                     animate={{
                        // x: [10, -30, 20, 0, 60, -50],
                        y: [20, 0, 15, -10, 20, -10],
                        rotate: [1, 0, -1, 2],
                     }}
                     transition={{
                        type: "spring",
                        duration: 8,
                        yoyo: Infinity,
                     }}>
                     <Lottie path="./48604-leadership.json" />
                  </motion.div>
               </motion.div>

               <motion.div
                  style={{
                     y: y2,
                     filter,
                     zIndex: -1,
                     position: "relative",
                     top: 20,
                  }}
                  className="lg:w-1/2 px-2"
                  initial={{ opacity: 0 }}
                  animate={{
                     opacity: 0.9,
                  }}
                  transition={{
                     // type: "spring",
                     stiffness: 260,
                     damping: 20,
                     duration: 2,
                  }}>
                  <motion.div
                     animate={{
                        // x: [10, -30, 20, 0, 60, -50],
                        y: [15, -10, 20, -10, 20, 0],
                        rotate: [1, 0, -1, 2],
                     }}
                     transition={{
                        type: "spring",
                        duration: 8,
                        yoyo: Infinity,
                     }}>
                     <Lottie path="./48604-leadership.json" />
                  </motion.div>
               </motion.div>
               <motion.div
                  layoutId="title"
                  className=" rounded  lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none py-10">
                  <div className="">
                     <h1 className=" z-50 lg:text-7xl text-5xl mb-6 leading-tight font-semibold font-heading">
                        No{" "}
                        <span className="text-indigo-700 tracking-wide">
                           {" "}
                           Paper{" "}
                        </span>{" "}
                        plane can be made without{" "}
                        <span className="text-indigo-700 tracking-wide">
                           {" "}
                           Paper
                        </span>
                     </h1>
                  </div>
               </motion.div>
            </div>
         </section>
         {/* <PricingSection /> */}
      </>
   );
}

const Title = styled.h1`
   color: transparent;
   background-image: url(https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80);
   background-size: cover;
   background-clip: text;
   -webkit-background-clip: text;
   filter: contrast(120%);
   text-shadow: 0 10px 10px rgba(0, 0, 0, 0.2),
      0 30px 20px rgba(0, 0, 0, 0.15);
   -webkit-text-stroke-width: 3px;
   -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
`;

const Text = styled.h1`
   mix-blend-mode: multiply;
   text-shadow: 0px 12px 23px rgba(169, 180, 203, 0.2),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 0px #d6dadf;
   //  filter: blur(1px);
`;
