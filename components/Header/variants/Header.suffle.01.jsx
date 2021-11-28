import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "../../Lottie";
import Motion from "../../Motion";

const Header = ({ title, subtitle, button, img }) => {
   const hearoImg = img.imgSrc?.includes("json") ? (
      <Lottie path={img.imgSrc} />
   ) : (
      <img className={`w-${img.width} mx-auto`} src={img.imgSrc} />
   );

   return (
      <section className="py-6 px-4">
         <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
            <div className=" rounded  lg:w-1/2 px-2 lg:pr-10 mt-0 lg:mt-0 order-1 lg:order-none py-10">
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
                  <div className="">
                     <h1 className=" z-50 lg:text-7xl text-5xl tracking-wider mb-6 leading-tight font-semibold font-heading">
                        <span
                           className=""
                           className="Container"
                           dangerouslySetInnerHTML={{
                              __html: title,
                           }}></span>
                     </h1>
                  </div>
               </motion.div>
               <p className=" mb-8 text-gray-400 leading-relaxed">
                  {subtitle}
               </p>

               {button?.enabled ? (
                  <Motion>
                     <Link href="/try" passHref>
                        <a
                           className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
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
               className="lg:w-1/2 px-2 "
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
         </div>
      </section>
   );
};

export default Header;
