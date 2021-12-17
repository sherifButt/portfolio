import Link from "next/link";
import {
   ArrowNarrowLeftIcon,
   ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

export default function Pagination({
   className,
   setCurrentPage,
   pages,
   items,
}) {
   return (
      <div className={className}>
         <nav className="border-t border-gray-200 dark:border-gray-800 px-4 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex">
               <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <ArrowNarrowLeftIcon
                     className="mr-3 h-5 w-5 text-gray-400"
                     aria-hidden="true"
                  />
                  Previous
               </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
               {}

               <a
                  onClick={() => setCurrentPage(1)}
                  className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:hover:border-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                  1
               </a>

               {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}

               <a
                  className="cursor-pointer border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                  onClick={() => setCurrentPage(2)}>
                  2
               </a>
               <a
                  className="cursor-pointer border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                  onClick={() => setCurrentPage(3)}>
                  3
               </a>
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
               <a
                  href="#"
                  className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Next
                  <ArrowNarrowRightIcon
                     className="ml-3 h-5 w-5 text-gray-400"
                     aria-hidden="true"
                  />
               </a>
            </div>
         </nav>
      </div>
   );
}
