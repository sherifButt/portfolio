import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "../../Lottie";
import Motion from "../../Motion";
import { useTheme } from "next-themes";
import Card from "../../Blog/Card";
import DOMPurify from "isomorphic-dompurify";

const Header = ({ title, subtitle, button, img }) => {
   let cleanTitle = DOMPurify.sanitize(title);

   const { theme, setTheme } = useTheme();

   useEffect(() => {
      console.log(theme);
   }, [theme]);

   const hearoImg = img.imgSrc.light?.includes("json") ? (
      <>
         <div className="dark:hidden lg:w-2/3 mx-auto">
            {/* <Lottie path={ img.imgSrc.light } /> */}
            <Lottie
               className="-z-20 w-300 absolute blur-sm"
               path="blob_2color_yellow_red.json"
            />
            <Card />
         </div>
         <div className="hidden dark:inline-block">
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
                     <h1 className="font-lagag z-10 lg:text-7xl text-5xl lg:tracking-normal tracking-widest mb-6 dark:text-gray-100   lg:leading-tight  font-normal leading-relaxed font-heading ">
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
                           className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded  shadow-lg shadow-indigo-500/50"
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
