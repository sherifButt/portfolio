import Link from "next/link";
import {
   ArrowNarrowLeftIcon,
   ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

export default function Pagination({
   className,
   setCurrentPage,
   currentPage,
   pages,
   items,
}) {
   //
   let html = [];
   const defaultClass =
      "cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:hover:border-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";
   const currentClass = "border-indigo-500 text-indigo-600";
   for (let i = 1; i <= pages; i++) {
      html.push(
         <a
            onClick={() => setCurrentPage(i)}
            className={
               currentPage == i
                  ? currentClass + defaultClass
                  : defaultClass
            }>
            {i}
         </a>
      );
   }

   return (
      <div className={className}>
         <nav className="border-t border-gray-200 dark:border-gray-800 px-4 flex items-center justify-between sm:px-0">
            <div className="-mt-px w-0 flex-1 flex">
               {currentPage == 1 ? (
                  ""
               ) : (
                  <a
                     onClick={() =>
                        setCurrentPage(currentPage - 1)
                     }
                     className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                     <ArrowNarrowLeftIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                     />
                     Previous
                  </a>
               )}
            </div>
            <div className="hidden md:-mt-px md:flex">
               {html}
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
               {currentPage == pages ? (
                  ""
               ) : (
                  <a
                     onClick={() =>
                        setCurrentPage(currentPage + 1)
                     }
                     className="cursor-pointer border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                     Next
                     <ArrowNarrowRightIcon
                        className="ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                     />
                  </a>
               )}
            </div>
         </nav>
      </div>
   );
}
