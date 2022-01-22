import { motion } from "framer-motion";
import Lottie from "../../Lottie";

const HowItWorks = () => {
   return (
      <section className="py-14 2xl:pt-40 2xl:pb-52 h-100vh">
         <div className="container px-6 mx-auto">
            <div className="mb-20 2xl:mb-36 text-center">
               <span className="block mb-9 text-xs leading-4 font-medium uppercase tracking-widest text-gray-300">
                  How it works
               </span>
               <h2 className="dark:text-white text-4xl md:text-10xl xl:text-11xl leading-none font-heading font-medium">
                  Easy to use
               </h2>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center -mx-4 mb-20 md:mb-32 2xl:mb-56">
               <div className="w-full md:w-11/12 px-4 mb-12 md:mb-0">
                  <div className="flex flex-wrap">
                     <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="relative max-w-sm mx-auto mb-8">
                           <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white  dark:bg-gray-800 border border-black border-opacity-10 z-10 rounded-3xl">
                              <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-indigo-500 rounded-full">
                                 <span className="text-2xl font-bold">
                                    1
                                 </span>
                              </div>
                              <h2 className="dark:text-white mb-14 text-2xl lg:text-3xl leading-tight font-medium font-heading">
                                 Descripbe your Website/App Idea
                              </h2>
                              <p className="text-lg text-dark BlueGray-400">
                                 The nulla commodo, commodo eros
                                 a, tristique lectus.
                              </p>
                           </div>
                           <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl dark:border-gray-600"></div>
                        </div>
                     </div>
                     <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="relative max-w-sm mx-auto xl:mt-10 mb-8">
                           <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border dark:bg-gray-800 border-black border-opacity-10 z-10 rounded-3xl">
                              <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-indigo-500 rounded-full">
                                 <span className="text-2xl font-bold">
                                    2
                                 </span>
                              </div>
                              <h2 className="dark:text-white mb-14 text-2xl lg:text-3xl leading-tight font-medium font-heading">
                                 Review mockup
                              </h2>
                              <p className="text-lg text-darkBlueGray-400 dark:text-darkBlueGray-500">
                                 Proin nec nunc felis. In non
                                 tellus ultricies, rutrum lacus
                                 et, pharetra elit.
                              </p>
                           </div>
                           <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl dark:border-gray-600"></div>
                        </div>
                     </div>
                     <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div className="relative max-w-sm mx-auto mb-8">
                           <div className="relative pt-16 pb-20 px-8 md:px-16 bg-white border dark:bg-gray-800 border-black border-opacity-10 z-10 rounded-3xl">
                              <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6 text-white bg-indigo-500 rounded-full">
                                 <span className="text-2xl font-bold">
                                    3
                                 </span>
                              </div>
                              <h2 className="dark:text-white first-letter:mb-14 text-2xl lg:text-3xl leading-tight font-medium font-heading">
                                 Recive fully working WebSite/App
                              </h2>
                              <p className="text-lg text-darkBlueGray-400">
                                 Vestibulum ante ipsum primis in
                                 faucibus orci luctus et
                                 ultrices.
                              </p>
                           </div>
                           <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl dark:border-gray-600"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowItWorks;
