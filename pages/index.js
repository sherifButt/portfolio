import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

export default function Home() {
   const { scrollY, scrollYProgress } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 400], [0, 200]);
   const y2 = useTransform(scrollY, [0, 400], [0, 500]);

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
         <Header variant={1}  />
         <Features  />
         <Blog variant={ 3 } items={ 3 }/>
         {/* <Faq /> */}
         <Testimonials variant={3} />
         {/* <HowItWorks variant={2} /> */}
         <Team />
         <Pricing variant={1} />
         <Faq variant={2} />
         <CallToAction />
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
