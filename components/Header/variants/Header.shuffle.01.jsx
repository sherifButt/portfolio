import { useEffect, useState} from "react"
import {
   useViewportScroll,
   motion,
   useTransform,
   useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link"
import Lottie from "../../Lottie"
import Motion from "../../Motion"
import { useTheme } from "next-themes"
import Card from "../../Blog/Card"
import DOMPurify from "isomorphic-dompurify"
import Blog from "../../Blog"
import Blob from "../../MorphedSvg/svg/Blob"
import ReactCardFlip from "react-card-flip"

const Header = ( {
   title,
   subtitle,
   button,
   img,
   posts,
   displayedPost,
} ) => {
   const [ isFlipped, setIsFlipped ] = useState( false );
   const [isOff, setIsOff] = useState(true);

   const handleMouseEnter = () => {
      if (!isOff) setIsOff(!isOff);
      if (isOff) setIsFlipped(!isFlipped);
   };
   const handleMouseLeave = () => {
      if (isOff) setIsFlipped(!isFlipped);
   };
   // let cleanTitle = DOMPurify.sanitize( title )
   const { theme, setTheme } = useTheme()
   const { scrollY } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 300], [0, 270]);
   const y2 = useTransform(scrollY, [0, 50], [0, 30]);

   const [ref, inView, entry] = useInView({
      /* Optional options */
      threshold: 1,
      triggerOnce: false,
   } );
   // console.log( `inView`, inView )
   // console.log(`y2`, y1.lastUpdated / 1000);
   const variants = {
      visible: { opacity: 1, x: 0 },
      hidden:{ opacity: 0,x:20} 
}

   const hearoImg = img.imgSrc.light?.includes("json") ? (
      <>
         <div className="dark:hidden lg:w-3/4 mx-auto ">
            {/* <Lottie
               className="-z-20 w-300 absolute blur-sm"
               path="blob_2color_yellow_red.json"
            /> */}
            <motion.div
               initial={{
                  opacity: 0,
                  // filter: `blur(50px)`
               }}
               animate={{
                  opacity: [0, 1],
                  // filter: [`blur(50px)`, `blur(0px)`],
               }}
               transition={{
                  duration: 3,
                  type: "spring",
               }}
               // whileHover={{scale:.9}}
               className="-z-20 scale-90 md:scale-[2] mt-0 md:mt-10 ml-30  absolute hidden lg:inline-block ">
               <Blob
                  fill="#805fcf"
                  strokeWidth={1}
                  className="absolute z-20"
               />
            </motion.div>
            {/* <Card posts={posts} displayedPost={1} /> */}

            <ReactCardFlip
               isFlipped={isFlipped}
               flipDirection="horizontal">
               <div
                  onMouseEnter={handleMouseEnter}
                  onClick={handleMouseEnter}
                  className="opacity-70 md:opacity-100 ease-in duration-300 hover:opacity-100  hover:scale-110">
                  {" "}
                  <Lottie path={img.imgSrc.light} />
               </div>
               <div onMouseLeave={handleMouseLeave}>
                  <Blog
                     variant={2}
                     posts={posts}
                     items={1}
                     rows={1}
                     columns={1}
                     isSubtitle={false}
                     isTitle={false}
                     isBackground={false}
                     isPagination={false}
                     isPaginationArrows={true}
                     noObservation={true}
                  />
               </div>
            </ReactCardFlip>
         </div>
         <div className="hidden dark:inline-block  ">
            <motion.div
               className=" scale-90 md:scale-[2] md:mt-40  absolute"
               initial={{ opacity: 0, filter: `blur(50px)` }}
               animate={{
                  opacity: [0, 0.9],
                  filter: [`blur(100px)`, `blur(50px)`],
               }}
               transition={{ duration: 3, type: "spring" }}>
               <Blob className=" absolute " />
            </motion.div>
            <div className="relative opacity-70 ease-in duration-300 hover:opacity-100 hover:scale-105">
               <Lottie path={img.imgSrc.dark} />
            </div>
         </div>
      </>
   ) : (
      <img
         className={`w-${img.width} mx-auto z-0`}
         src={img.imgSrc}
         style={{ mixBlendMode: "multiply" }}
      />
   );

   return (
      <section className="lg:py-4  md:px-3 lg:h-[90vh] flex">
         <div className="flex flex-wrap items-center text-center lg:text-left -mx-2 ">
            <div className=" rounded  lg:w-1/2  lg:pr-10  lg:mt-0 order-1 lg:order-none py-10 z-10 ">
               <motion.div
                  animate={{
                     // x: [10, -30, 20, 0, 60, -50],
                     y: [1, -5, 4, -3, 6, -3],
                     // rotate: [1, 0, -1, 2],
                  }}
                  transition={{
                     type: "spring",
                     duration: 8,
                     yoyo: Infinity,
                  }}>
                  <div>
                     <h1 className="font-lagag z-10 -mx-4 md:text-5xl   text-[38px] lg:tracking-normal tracking-widest mb-4 dark:text-white font-semibold md:font-normal leading-snug lg:leading-[5rem]   md:text-left -mt-20 md:mt-0 ">
                        {title}
                     </h1>
                  </div>
               </motion.div>
               <p className=" mb-1 text-gray-400 leading-normal md:leading-relaxed">
                  {subtitle}
               </p>

               {button?.enabled ? (
                  <Motion>
                     <motion.div
                        ref={ref}
                        vairants={variants}
                        initial="visible"
                        animate={
                           y1.lastUpdated / 300 > 300
                              ? "visible"
                              : "hidden"
                        }>
                        <Link href={button.href} passHref>
                           <a className="inline-block mt-5 md:mt-10  py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded  shadow-lg shadow-indigo-500/50 hover:shadow-indigo-700/40">
                              {button.text}{" "}
                              <span className="font-light">
                                 {button.textLight}{" "}
                                 {String.fromCharCode(
                                    button.icon
                                 )}{" "}
                              </span>
                           </a>
                        </Link>
                        <Link href={"#blog"} passHref>
                           <a className="inline-block mt-5 md:mt-10  py-4 px-8 mr-6 leading-none text-indigo-600 border-2 border-indigo-600 bg-transparent dark:hover:text-white hover:text-indigo-400 font-light rounded  hover:shadow-lg  hover:shadow-indigo-500/40">
                              Check my work{" "}
                              <span className="font-light">
                                 &darr;
                              </span>
                           </a>
                        </Link>
                     </motion.div>
                  </Motion>
               ) : (
                  ""
               )}
            </div>

            <motion.div
               className="lg:w-1/2 px-2"
               initial={{ y: -300, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.7 }}>
               <motion.div
                  animate={{
                     // x: [10, -30, 20, 0, 60, -50],
                     y: [15, -10, 8, -10, 20, 0],
                     rotate: [1, 0, -1, 0.5],
                  }}
                  transition={{
                     type: "spring",
                     duration: 8,
                     yoyo: Infinity,
                  }}>
                  {hearoImg}
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}

const customShapeDividerBottom1638543774 = {
   position: "absolute",
   bottom: 0,
   left: 0,
   width: "100%",
   overflow: "hidden",
   lineHeight: 0,
   transform: "rotate(180deg)",
}

export default Header
