import { motion } from "framer-motion";
import Lottie from "../../Lottie";

const HowItWorks = () => {
   return (
      <section className="py-12 px-4">
         <h2 className="text-4xl mb-2 text-center leading-tight font-semibold font-heading">
            How to get Dunder Mifflined?
         </h2>
         <p className="text-center mb-12 text-gray-400">
            Let’s open a new chapter of your paper adventure!
         </p>
         <div>
            <div className="flex flex-wrap items-center -mx-8">
               <div className="md:w-1/2 px-8 mb-8">
                  <div className="w-4/5 mx-auto ">
                     <motion.div
                        animate={{
                           // x: [20, 0, 10, -10, 20, -15],
                           y: [15, 0, 20, -5, 20, -10],
                           rotate: [1, 0, -1, 2],
                        }}
                        transition={{
                           // type: "spring",
                           duration: 18,
                           yoyo: Infinity,
                        }}>
                        <Lottie path="60968-contact-center.json" />
                     </motion.div>
                  </div>
               </div>
               <div className="md:w-1/2 px-8 mb-8">
                  <span className="text-6xl">01</span>
                  <h3 className="text-2xl mb-3 font-semibold font-heading">
                     Contact our Sales
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                     During the phone call we will be able to
                     present you all details of cooperation,
                     pricing and special offers, suited for your
                     company.
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap items-center -mx-8">
               <div className="md:w-1/2 px-8 mb-8 md:order-1">
                  <div className="w-4/5 mx-auto ">
                     <Lottie path="contact_us.json" />
                  </div>
               </div>
               <div className="md:w-1/2 px-8 md:text-right">
                  <span className="text-6xl">02</span>
                  <h3 className="text-2xl mb-3 font-semibold font-heading">
                     Sign the documents
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                     We can also talk during business meeting, or
                     visit your office anytime you want! Our
                     employees will provide proper contracts.
                  </p>
               </div>
            </div>
            <div className="flex flex-wrap items-center -mx-8">
               <div className="md:w-1/2 w-full mt-8 mr-8 md:mr-0 mb-8 order-none">
                  <div className=" mx-auto ">
                     <Lottie path="sign-in.json" />
                  </div>
               </div>
               <div className="md:w-1/2 px-8">
                  <span className="text-6xl">03</span>
                  <h3 className="text-2xl mb-3 font-semibold font-heading">
                     Wait for delivery!
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                     You don’t buy a pig... or shall I say a
                     paper in a poke. The supplies will be
                     delivered to your company every first Monday
                     of the month.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HowItWorks;
