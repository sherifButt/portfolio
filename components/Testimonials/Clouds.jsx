import { motion } from "framer-motion";
import Link from "../NoScrollLink"
function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Clouds = ( { id,imgSrc, alt, title, css,icon,iconsize,iconstrokewidth,href,catHref, key } ) => {
   const y = [];
   const x = [];
   for (let i = 0; i < 5; i++) {
      y[i] = Math.floor(Math.random() * (5 - -5) - 5);
   }
   return (
      <div
         className={classNames(
            css,
            "w-full md:w-2/5 px-1 mb-5"
         )}>
         <Link href={` ${catHref}/${id ? id : ""}`} passHref>
            <a>
               <motion.div
                  animate={{
                     // x: x,
                     y: y,
                     //  rotate: y,
                  }}
                  transition={{
                     type: "spring",
                     duration: 4,
                     yoyo: Infinity,
                  }}
                  className="flex items-center py-4 px-4 bg-gray-50 dark:bg-gray-700 rounded-[40px]">
                  <div
                     className={`flex items-center justify-center w-16 h-16  
                        bg-white dark:bg-gray-800  rounded-3xl shadow-sm`}>
                     {icon ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox={`0 0 ${iconsize} ${iconsize}`}
                           stroke="currentColor"
                           aria-hidden="true"
                           class="flex-shrink-0 h-6 w-6 text-indigo-600 fill-indigo-600 stroke-0">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width={iconstrokewidth}
                              d={icon}></path>
                        </svg>
                     ) : (
                        <img
                           className="h-8 w-8"
                           src={imgSrc}
                           alt={alt}
                        />
                     )}
                  </div>
                  <p className="ml-6 font-heading font-medium text-2xl dark:text-gray-100">
                     {title}
                  </p>
               </motion.div>
            </a>
         </Link>
      </div>
   );
};

Clouds.defaultProps = {
   iconsize: 24,
   iconstrokewidth: 0,
   catHref:""
};

export default Clouds;
