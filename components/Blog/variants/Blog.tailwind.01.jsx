import { useState, useEffect } from "react";
import Link from "../../NoScrollLink";
import Card from "../Card";
import Pagination from "../Pagination";
import Lottie from "../../Lottie";
import {
   motion,
   useAnimation,
   AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.3,
         duration: 0.3,
      },
   },
};

const item = {
   hidden: { opacity: 0, x: -10 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Blog({
   items,
   columns,
   rows,
   isTitle,
   title,
   subtitle,
   isSubtitle,
   isBackground,
   href,
   posts,
   isPagination,
   isPaginationArrows,
   noObservation,
}) {
   // framer motion animation control
   const controls = useAnimation();

   // Hook allow us to control the elemnt in the screen view
   let { inView, entry, ref } = useInView({
      threshold: 0.5,
      triggerOnce: false,
   });

   if (!noObservation) inView = true;

   // Pagination
   const postsCount = posts.length;
   const pages = Math.ceil(postsCount / items);
   const [currentPage, setCurrentPage] = useState(1);

   const [previousPage, setPreviousPage] = useState(null);
   console.log(`previousPage`, currentPage, previousPage);

   const offset = (currentPage - 1) * items + 1;
   const currentPosts = posts.slice(
      offset - 1,
      offset + items - 1
   );

   if (inView) {
      controls.start("visible");
   }

   useEffect(() => {
      if (previousPage != null || currentPage != 1) {
         controls.start("hidden");
         controls.start("visible");
      }
   }, [previousPage, currentPage]);
   return (
      <section className="flex lg:h-screen_">
         <div
            className={`m-auto relative  ${
               isTitle ? "pt-16" : ""
            } pb-20 px-4 sm:px-6 ${
               isTitle ? "lg:pt-24" : ""
            }  lg:pb-28 lg:px-8`}>
            <div className=" inset-0">
               <div className=" h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
               <div className="text-center">
                  {isTitle ? (
                     <Link href={href} passHref>
                        <a>
                           <h2 className="cursor-pointer text-5xl text-left md:text-center leading-normal tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                              {title}
                           </h2>
                        </a>
                     </Link>
                  ) : (
                     ""
                  )}
                  {isSubtitle ? (
                     <p
                        ref={ref}
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        {subtitle}
                     </p>
                  ) : (
                     ""
                  )}
               </div>
               <div className="flex  justify-center items-center">
                  {isPaginationArrows ? (
                     <div className=" mr-4 h-auto  text-6xl  origin-right hover:scale-y-[2.4] scale-y-[2] ease-out duration-200 text-gray-300 drop-shadow-md hover:drop-shadow-lg hover:text-indigo-600 cursor-pointer">
                        {currentPage == 1 ? (
                           <>&nbsp;</>
                        ) : (
                           <a
                              onClick={() => {
                                 setPreviousPage(currentPage);

                                 setTimeout(() => {
                                    setCurrentPage(
                                       currentPage - 1
                                    );
                                 }, 400);
                              }}>
                              {"<"}
                           </a>
                        )}
                     </div>
                  ) : (
                     ""
                  )}
                  <div>
                     {isBackground ? (
                        <Lottie
                           className="z-0 w-200 absolute blur-sm flex items-center"
                           path="blob_2color_yellow_red.json"
                        />
                     ) : (
                        ""
                     )}

                     <motion.div
                        ref={ref}
                        variants={container}
                        initial="hidden"
                        animate={controls}
                        className={` mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-${columns} lg:max-w-none`}>
                        {Array.isArray(currentPosts) &&
                           currentPosts
                              .filter(Boolean)
                              .slice(0, items)
                              .map(
                                 (
                                    {
                                       id,
                                       title,
                                       href,
                                       imageUrl,
                                       category,
                                       description,
                                       author,
                                       datetime,
                                       date,
                                       readingTime,
                                    },
                                    i
                                 ) => (
                                    <motion.div
                                       variants={item}
                                       key={"blogp_" + i}>
                                       <Card
                                          id={id}
                                          title={title}
                                          href={href}
                                          imageUrl={imageUrl}
                                          category={category}
                                          description={
                                             description
                                          }
                                          author={author}
                                          datetime={datetime}
                                          date={date}
                                          readingTime={
                                             readingTime
                                          }
                                       />
                                    </motion.div>
                                 )
                              )}
                     </motion.div>
                  </div>
                  {isPaginationArrows ? (
                     <div className="ml-4  text-6xl  origin-left hover:scale-y-[2.4] scale-y-[2] ease-out duration-200 text-gray-300 drop-shadow-md hover:drop-shadow-lg hover:text-indigo-600 cursor-pointer">
                        {currentPage == pages ? (
                           <>&nbsp;</>
                        ) : (
                           <a
                              onClick={() => {
                                 setPreviousPage(currentPage);
                                 setTimeout(() => {
                                    setCurrentPage(
                                       currentPage + 1
                                    );
                                 }, 400);
                              }}>
                              {">"}
                           </a>
                        )}
                     </div>
                  ) : (
                     ""
                  )}
               </div>
            </div>
            <div className="z-30">
               {isPagination ? (
                  <Pagination
                     className="mt-10 z-10"
                     items={items}
                     setCurrentPage={setCurrentPage}
                     setPreviousPage={setPreviousPage}
                     currentPage={currentPage}
                     pages={pages}
                  />
               ) : (
                  ""
               )}
            </div>
         </div>
      </section>
   );
}

Blog.defaultProps = {
   items: 3,
   href: "portafolio",
   columns: 3,
   rows: 1,
   isTitle: true,
   isSubtitle: true,
   isBackground: true,
   title: "From the Blog",
   subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
   posts: [],
   isPagination: true,
   isPaginationArrows: false,
};
