import absoluteUrl from 'next-absolute-url'
import {
   useTransform,
   useViewportScroll,
   useAnimation,
} from "framer-motion";
import React, { useState, useEffect } from "react";
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
import { getData } from "./api/data";
import axios from   "axios"
import LogInForm from "../components/LogInform"

export default function Home({
   data,
   posts,
   title,
   href,
   subtitle,
   testimonials,
}) {
   // framer motion animation control
   const animationControl = useAnimation();

   // Hook allow us to control the element in the screen view
   const { inView, entry, ref } = useInView({
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
         <Header variant={1} posts={posts?posts:[]} />
         {/* <HowItWorks variant={3} data={data} /> */}
         <Blog
            variant={3}
            items={6}
            rows={2}
            href={href}
            title={title}
            subtitle={subtitle}
            posts={posts?posts:[]}
            noObservation={false}
         />
        
         {/* <Features data={data} /> */}
         {/* <Faq /> */}
         <Testimonials variant={3} data={testimonials} />
         {/* <Team /> */}
         {/* <Pricing variant={1} /> */}
         {/* <Faq variant={3} /> */}
         {/* <CallToAction /> */}
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

export const getStaticProps = async context => {
   console.log('context', context)
   const data = await getData();
   // const res = await axios( '/api/data' );
   // const data = res.data
   // console.log(data)
   return {
      props: {
         data,
         testimonials: data.testimonials,
         posts: data.work.posts,
         title: data.work.title,
         href: data.work.href,
         subtitle: data.work.subtitle,
      },
   };
};
