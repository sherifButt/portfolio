import {
  motion
} from "framer-motion"
import Link from "next/link"
import Lottie from "../../Lottie"
import Motion from "../../Motion"

const Header = () => {
   return (
      <section className="py-6 px-4">
         <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
            <div className=" rounded  lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none py-10">
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

               <p className=" mb-8 text-gray-400 leading-relaxed">
                  Professional, dedicated, local. Dunder Mifflin
                  is on its best patch to change the way you
                  think about paper. That’s us - people who sell
                  limitless paper in the paperless world.
               </p>

               <Motion>
                  <Link href="/try" passHref>
                     <a
                        className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                        href="#">
                        Sign up{" "}
                        <span className="font-light">
                           for free &rarr;
                        </span>
                     </a>
                  </Link>
               </Motion>
            </div>

            <motion.div
               className="lg:w-1/2 px-2"
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
               <Lottie path="48604-leadership.json" />
            </motion.div>
         </div>
      </section>
   );
};

export default Header;
