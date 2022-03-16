import Link from "../NoScrollLink";
import { Popover } from "@headlessui/react";

const MenuCallsToAction = ({ posts }) => {
   return (
      <div className="px-5 py-5 bg-gray-50 dark:bg-gray-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
         {posts.slice(0, 5).map(item => (
            <div key={item.title} className="flow-root">
               <Popover.Button>
                  <Link
                     key={item.title}
                     href={`${item.href}/${item.id?item.id:""}`}
                     passHref>
                     <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           aria-hidden="true"
                           class="flex-shrink-0 h-6 w-6 text-indigo-600">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d={item.icon}></path>
                        </svg>
   
                        <span className="ml-3 dark:text-gray-200">
                           {item.title.substring(0, 30)}
                        </span>
                     </a>
                  </Link>
               </Popover.Button>
            </div>
         ))}
      </div>
   );
};
export default MenuCallsToAction;
