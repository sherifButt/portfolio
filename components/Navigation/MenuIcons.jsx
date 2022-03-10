import Link from "../NoScrollLink"
import { Popover } from "@headlessui/react"

const MenuIcon = ({
   posts,
   category,
   mainTitle,
   limit,
   numerized,
}) => {
   // const ar = Array.apply(null, { length: 5 }).map(  Function.call,  Math.random);
   // console.log(ar)
   return (
      <Popover className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8 ">
         {posts?.slice(0, limit).map((item, idx) => (
            <Popover.Button className="-m-3 p-3  items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
               <Link
                  key={item.title}
                  href={`${
                     category
                        ? category.href
                        : item.href
                        ? item.href
                        : ""
                  }/${item.id ? item.id : ""}`}
                  passHref>
                  <a className="flex">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="flex-shrink-0 h-6 w-6 text-indigo-600 fill-indigo-600 stroke-0">
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="0"
                           d={item.icon}></path>
                     </svg>
                     <div className="ml-4 text-left">
                        <p className="text-base font-medium text-gray-900 dark:text-gray-400">
                           {numerized && idx + 1 + "."}{" "}
                           {item.title.substring(0, 30)}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                           {item?.excerpt?.substring(0, 60) ||
                              item?.description?.substring(
                                 0,
                                 60
                              )}
                        </p>
                     </div>
                  </a>
               </Link>
            </Popover.Button>
         ))}
         <div className="mt-5 text-sm">
            <Link href={category?.href || "#"} passHref>
               <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  {" "}
                  View all {mainTitle}{" "}
                  <span aria-hidden="true">&rarr;</span>
               </a>
            </Link>
         </div>
      </Popover>
   );
};

MenuIcon.defaultProps = {
   mainTitle: "post",
   limit: 4
   
};

export default MenuIcon