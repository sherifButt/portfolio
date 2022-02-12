import { useState } from "react";
import {
   CheckCircleIcon,
   XCircleIcon,
   XIcon,
} from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function Alert({
   className,
   success,
   message,
   handleToggleAlert,
}) {
   const [isSuccess, setIsSuccess] = useState(true);
   const [isAlert, setIsAlert] = useState(false);

   return (
     
         <div
            
            className={` rounded-md ${
               success ? "bg-green-50" : "bg-red-50"
            } p-4 ${className}`}>
            <div className="flex">
               <div className="flex-shrink-0">
                  {success ? (
                     <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                     />
                  ) : (
                     <XCircleIcon
                        className="h-5 w-5 text-red-400"
                        aria-hidden="true"
                     />
                  )}
               </div>
               <div className="ml-3">
                  {success ? (
                     <p className="text-sm font-medium text-green-800">
                        {message}
                     </p>
                  ) : (
                     <p className="text-sm font-medium text-red-800">
                        {message}
                     </p>
                  )}
               </div>
               <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                     {success ? (
                        <button
                           onClick={handleToggleAlert}
                           type="button"
                           className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                           <span className="sr-only">
                              Dismiss
                           </span>
                           <XIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                           />
                        </button>
                     ) : (
                        <button
                           onClick={handleToggleAlert}
                           type="button"
                           className="inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                           <span className="sr-only">
                              Dismiss
                           </span>
                           <XIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                           />
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
     
   );
}

Alert.defaultProps = {
   isSuccess: true,
};
