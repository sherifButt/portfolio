import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "../../Lottie";
import Motion from "../../Motion";
import { useTheme } from "next-themes";
import Card from "../../Blog/Card";
import DOMPurify from "isomorphic-dompurify";
import Blog from "../../Blog/variants/Blog.tailwind.01";
import Blob from "../../MorphedSvg/svg/Blob";

const Header = ({
   title,
   subtitle,
   button,
   img,
   posts,
   displayedPost,
} ) => {
   
   let cleanTitle = DOMPurify.sanitize(title);
   const { theme, setTheme } = useTheme();

   const hearoImg = img.imgSrc.light?.includes("json") ? (
      <>
         <div className="dark:hidden lg:w-3/4 mx-auto">
            {/* <Lottie path={ img.imgSrc.light } /> */}
            {/* <Lottie
               className="-z-20 w-300 absolute blur-sm"
               path="blob_2color_yellow_red.json"
            /> */}
            <motion.div
               initial={{ opacity: 0, filter: `blur(50px)` }}
               animate={{
                  opacity: [0, 1],
                  filter: [`blur(50px)`, `blur(0px)`],
               }}
               transition={{
                  duration: 3,
                  type: "spring",
               }}
               className="-z-20 scale-90 md:scale-[2] mt-10 md:mt-32 ml-30  absolute  overflow-hiden md:overflow-none">
               <Blob className="absolute" />
            </motion.div>
            {/* <Card posts={posts} displayedPost={1} /> */}
            <Blog
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
         <div className="hidden dark:inline-block">
            <motion.div
               initial={{ opacity: 0, filter: `blur(50px)` }}
               animate={{
                  opacity: [0, 0.9],
                  filter: [`blur(100px)`, `blur(50px)`],
               }}
               transition={{ duration: 3, type: "spring" }}
               className="-z-20 scale-90 md:scale-[2] mt-40 ml-30 absolute  overflow-hiden md:overflow-none">
               <Blob className=" absolute" />
            </motion.div>
            <Lottie path={img.imgSrc.dark} />
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
      <section className="py-6 px-4 lg:h-[90vh] flex">
         <div className="flex flex-wrap items-center text-center lg:text-left -mx-2 ">
            <div className=" rounded  lg:w-1/2 px-2 lg:pr-10  lg:mt-0 order-1 lg:order-none py-10 z-10 ">
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
                     <h1 className="font-lagag z-10 lg:text-7xl text-5xl lg:tracking-normal tracking-widest mb-6 dark:text-gray-100 font-normal leading-normal lg:leading-tight font-heading text-left -mt-20 md:mt-0">
                        <span
                           className="Container"
                           dangerouslySetInnerHTML={{
                              __html: cleanTitle,
                           }}></span>
                     </h1>
                  </div>
               </motion.div>
               <p className=" mb-8 text-gray-400 leading-relaxed ">
                  {subtitle}
               </p>

               {button?.enabled ? (
                  <Motion>
                     <Link href="/try" passHref>
                        <a
                           className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded  shadow-lg shadow-indigo-500/50 hover:shadow-indigo-700/40"
                           href="#">
                           {button.text}{" "}
                           <span className="font-light">
                              {button.textLight}{" "}
                              {String.fromCharCode(button.icon)}{" "}
                           </span>
                        </a>
                     </Link>
                  </Motion>
               ) : (
                  ""
               )}
            </div>

            <motion.div
               className="lg:w-1/2 px-2  "
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
};

const customShapeDividerBottom1638543774 = {
   position: "absolute",
   bottom: 0,
   left: 0,
   width: "100%",
   overflow: "hidden",
   lineHeight: 0,
   transform: "rotate(180deg)",
};

export default Header;
