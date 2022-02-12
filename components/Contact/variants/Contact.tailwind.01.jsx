import { useState } from "react";
import { Switch } from "@headlessui/react";
import axios from "axios";
import Alert from "../Alert_01";
import { motion, AnimatePresence } from "framer-motion";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}
export default function Example() {
   const [agreed, setAgreed] = useState(false);
   const [formFields, setFormFields] = useState({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      message: "",
      privacyPolicy: agreed,
   });
   const [alert, setAlert] = useState({
      isAlert: false,
      message: "",
      success: true,
   });

   const [isFormDisabled, setIsFormDisabled] = useState({
      firstName: false,
      lastName: false,
      email: false,
      country: false,
      phone: false,
      message: false,
      privacyPolicy: false,
      button: false,
   });

   const handleToggleAlert = () => {
      setAlert({ ...alert, isAlert: !alert.isAlert });
   };

   const handleTogglePrivacy = () => {
      setFormFields({
         ...formFields,
         privacyPolicy: !formFields.privacyPolicy,
      });
      setAgreed(!agreed);
   };

   const handleFormSubmit = async e => {
      e.preventDefault();
      if (
         formFields.email === "" ||
         formFields.message === "" ||
         formFields.privacyPolicy === false
      ) {
         // alert( "Please enter missing" );
         console.log("formFields", formFields);
         setAlert({
            isAlert: true,
            message: "Please fill in missing information below!",
            success: false,
         });
         return;
      }
      setIsFormDisabled({ ...isFormDisabled, button: true });
      const response = await sendData(formFields);
      if (response)
         setIsFormDisabled({ ...isFormDisabled, button: false });
      setAlert({
         isAlert: true,
         message: response.message,
         success: response.success,
      });

      setAgreed(false);

      setFormFields({
         firstName: "",
         lastName: "",
         email: "",
         country: "",
         phone: "",
         message: "",
         privacyPolicy: !agreed,
      });
   };

   const sendData = async data => {
      try {
         const res = await axios({
            method: "post",
            url: "/api/contact",
            data,
         });
         return res.data;
      } catch (e) {
         console.log("error submitting data", e);
      }
   };

   return (
      <div className=" py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
         <div className="relative max-w-xl mx-auto">
            <svg
               className="absolute left-full transform translate-x-1/2"
               width={404}
               height={404}
               fill="none"
               viewBox="0 0 404 404"
               aria-hidden="true">
               <defs>
                  <pattern
                     id="85737c0e-0916-41d7-917f-596dc7edfa27"
                     x={0}
                     y={0}
                     width={20}
                     height={20}
                     patternUnits="userSpaceOnUse">
                     <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200 dark:text-gray-600"
                        fill="currentColor"
                     />
                  </pattern>
               </defs>
               <rect
                  width={404}
                  height={404}
                  fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
               />
            </svg>
            <svg
               className="absolute right-full bottom-0 transform -translate-x-1/2"
               width={404}
               height={404}
               fill="none"
               viewBox="0 0 404 404"
               aria-hidden="true">
               <defs>
                  <pattern
                     id="85737c0e-0916-41d7-917f-596dc7edfa27"
                     x={0}
                     y={0}
                     width={20}
                     height={20}
                     patternUnits="userSpaceOnUse">
                     <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                     />
                  </pattern>
               </defs>
               <rect
                  width={404}
                  height={404}
                  fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
               />
            </svg>
            <div className="text-center">
               <h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
                  Contact me
               </h2>
               <p className="mt-4 text-lg leading-6 text-gray-500">
                  Hi, I’m here to help you! Email Me.
               </p>
            </div>
            <div className="mt-12">
               {alert.isAlert && (
                  <AnimatePresence>
                     <motion.div
                        key="alert2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Alert
                           message={alert.message}
                           success={alert.success}
                           className="my-5"
                           handleToggleAlert={handleToggleAlert}
                        />
                     </motion.div>
                  </AnimatePresence>
               )}
               <form
                  action="#"
                  // method="POST"
                  onSubmit={handleFormSubmit}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 dark:text-gray-200">
                  <div>
                     <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400 ">
                        First name
                     </label>
                     <div className="mt-1">
                        <input
                           type="text"
                           name="first-name"
                           id="first-name"
                           autoComplete="given-name"
                           className="border py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md "
                           onChange={e =>
                              setFormFields({
                                 ...formFields,
                                 firstName: e.target.value,
                              })
                           }
                           value={formFields.firstName}
                        />
                     </div>
                  </div>
                  <div>
                     <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Last name
                     </label>
                     <div className="mt-1">
                        <input
                           type="text"
                           name="last-name"
                           id="last-name"
                           autoComplete="family-name"
                           className="border py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                           onChange={e =>
                              setFormFields({
                                 ...formFields,
                                 lastName: e.target.value,
                              })
                           }
                           value={formFields.lastName}
                        />
                     </div>
                  </div>
                  {/* <div className="sm:col-span-2">
                     <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Company
                     </label>
                     <div className="mt-1">
                        <input
                           type="text"
                           name="company"
                           id="company"
                           autoComplete="organization"
                           className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                           onChange={(e)=> setFormFields({...formFields,company:e.target.value}) }
                        />
                     </div>
                  </div> */}
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Email
                     </label>
                     <div className="mt-1">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email" 
                           className="border py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                           onChange={e =>
                              setFormFields({
                                 ...formFields,
                                 email: e.target.value,
                              })
                           }
                           value={formFields.email}
                        />
                     </div>
                  </div>
                  {/* <div className="sm:col-span-2">
                     <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Phone Number
                     </label>
                     <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0  flex items-center">
                           <label
                              htmlFor="country"
                              className="sr-only ">
                              Country
                           </label>
                           <select
                              id="country"
                              name="country"
                              className=" h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                              onChange={e =>
                                 setFormFields({
                                    ...formFields,
                                    country: e.target.value,
                                 })
                              }
                              value={formFields.country}>
                              <option>UK</option>
                              <option>EU</option>
                              <option>US</option>
                              <option>CA</option>
                           </select>
                        </div>
                        <input
                           type="text"
                           name="phone-number"
                           id="phone-number"
                           autoComplete="tel"
                           className="py-3  px-4 block w-full pl-24 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                           placeholder="+1 (555) 987-6543"
                           onChange={e =>
                              setFormFields({
                                 ...formFields,
                                 phone: e.target.value,
                              })
                           }
                           value={formFields.phone}
                        />
                     </div>
                  </div> */}
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Message
                     </label>
                     <div className="mt-1">
                        <textarea
                           id="message"
                           name="message"
                           rows={4}
                           className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                           defaultValue={""}
                           onChange={e =>
                              setFormFields({
                                 ...formFields,
                                 message: e.target.value,
                              })
                           }
                           value={formFields.message}
                        />
                     </div>
                  </div>
                  <div className="sm:col-span-2">
                     <div className="flex items-start">
                        <div className="flex-shrink-0">
                           <Switch
                              checked={agreed}
                              onChange={handleTogglePrivacy}
                              className={classNames(
                                 agreed
                                    ? "bg-indigo-600"
                                    : "bg-gray-200",
                                 "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              )}>
                              <span className="sr-only">
                                 Agree to policies
                              </span>
                              <span
                                 aria-hidden="true"
                                 className={classNames(
                                    agreed
                                       ? "translate-x-5"
                                       : "translate-x-0",
                                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                                 )}
                              />
                           </Switch>
                        </div>
                        <div className="ml-3">
                           <p className="text-base text-gray-500">
                              By selecting this, you agree to the{" "}
                              <a
                                 href="#"
                                 className="font-medium text-gray-700 underline">
                                 Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a
                                 href="#"
                                 className="font-medium text-gray-700 underline">
                                 Cookie Policy
                              </a>
                              .
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-span-2">
                     <button
                        disabled={isFormDisabled.button}
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {isFormDisabled.button ? (
                           <>
                              <svg
                                 class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24">
                                 <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"></circle>
                                 <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                           </>
                        ) : (
                           "Let's talk"
                        )}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
