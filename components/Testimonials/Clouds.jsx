import { motion } from "framer-motion";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Clouds = ( { imgSrc, alt, title, css, key } ) => {
   const y = [];
   const x = [];
   for (let i = 0; i < 5; i++) {
      y[i] = Math.floor(Math.random() * (5 - -5) - 5);
   }
   return (
      <div
         className={ classNames(
            css,
            "w-full md:w-2/5 px-1 mb-5" ) }>
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
               <img className="h-8 w-8" src={imgSrc} alt={alt} />
            </div>
            <p className="ml-6 font-heading font-medium text-2xl dark:text-gray-100">
               {title}
            </p>
         </motion.div>
      </div>
   );
};

export default Clouds;
