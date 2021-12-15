import Link from "next/link";
import {motion} from "framer-motion"
const Blog = () => {
   return (
      <section className="py-12 px-4">
         <h2 className="text-4xl text-center mb-10 font-semibold font-heading">
            Latest posts
         </h2>
         <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
               <div className="h-full pb-8 rounded shadow z-20">
                  <Link href="#">
                     <a href="#">
                        <motion.div
                           animate={{
                              // x: [10, -30, 20, 0, 60, -50],
                              y: [1, -3, 4, -3, 2, -3],
                              // rotate: [1, 0, -1, 2],
                           }}
                           transition={{
                              type: "spring",
                              duration: 8,
                              yoyo: Infinity,
                           }}>
                           <img
                              className="mb-4 h-96 mx-auto z-0"
                              src="/assets/imgs/ieva-kisunaite-aNxlLSec5Dk-unsplash.jpg"
                              alt=""
                           />
                        </motion.div>
                        <div className="px-6">
                           <small>
                              22 Oct 2020 | By Michael Scott
                           </small>
                           <h3 className="text-2xl my-3 font-heading">
                              Being world’s best boss
                           </h3>
                           <p className="text-gray-400">
                              The wise man once said: "Friend
                              first, boss second, entertainer
                              third". That man was me.
                           </p>
                        </div>
                     </a>
                  </Link>
               </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
               <div className="h-full pb-8 rounded shadow">
                  <Link href="#">
                     <a href="#">
                        <motion.div
                           animate={{
                              // x: [10, -30, 20, 0, 60, -50],
                              y: [-5, 4, -3, 2, -3, 4],
                              // rotate: [1, 0, -1, 2],
                           }}
                           transition={{
                              type: "spring",
                              duration: 8,
                              yoyo: Infinity,
                           }}>
                           <img
                              className="mb-4 h-96 mx-auto "
                              src="/assets/imgs/jessica-loaiza-DHYfjAe_eeo-unsplash.jpg"
                              alt=""
                           />
                        </motion.div>

                        <div className="px-6">
                           <small>
                              22 Oct 2020 | By Dwight K. Schrute
                           </small>
                           <h3 className="text-2xl my-3 font-heading">
                              Understanding the paper
                           </h3>
                           <p className="text-gray-400">
                              So you think you know everything
                              about paper? False, you know
                              nothing. Let me illuminate your
                              first steps into my world.
                           </p>
                        </div>
                     </a>
                  </Link>
               </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
               <div className="h-full pb-8 rounded shadow">
                  <Link href="#">
                     <a href="#">
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
                           <img
                              className="mb-4 h-96 mx-auto "
                              src="/assets/imgs/heather-barnes-gP1YecpRyD8-unsplash.jpg"
                              alt=""
                           />
                        </motion.div>

                        <div className="px-6">
                           <small>
                              22 Oct 2020 | By Jim Halpert
                           </small>
                           <h3 className="text-2xl my-3 font-heading">
                              Dwight doesn’t understand the paper
                           </h3>
                           <p className="text-gray-400">
                              Read it and finally find out that
                              Dwight Schrute is merely a scammer.
                           </p>
                        </div>
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blog;
