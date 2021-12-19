/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { Switch } from "@headlessui/react";
import {useTheme} from "next-themes"

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

export default function Example() {
   const { theme, setTheme } = useTheme()
   const [enableDark, setEnableDark] = useState(
      theme === "light" ? false : true
   );
   const [ enabled, setEnabled ] = useState( false );
   
   
   const themeToggle = () => {
      setEnableDark( !enableDark )
      if ( enableDark ) setTheme( "light" )
      else setTheme("dark")
      
      return enableDark;
   }

   return (
      <Menu
         as="div"
         className="relative inline-block text-left ">
         <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md  border-gray-300  ml-2 px-4 py-2 bg-white dark:bg-transparent text-sm font-medium   ">
               <CogIcon
                  className="-mr-1  h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:text-gray-200"
                  aria-hidden="true"
               />
            </Menu.Button>
         </div>

         <Transition
            as={Fragment}
            enter="transition ease-out duration-10"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="dark:shadow-gray-900 dark:border dark:border-gray-800 sm:origin-top-left lg:origin-top-right absolute lg:right-0 sm:left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-700 focus:outline-none z-10">
               <div className="py-1">
                  <div className="flex justify-between px-4 py-2 text-sm dark:text-gray-400">
                     Dark Mode
                     <Switch
                        checked={enableDark}
                        onChange={themeToggle}
                        className={`${
                           enableDark
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                        } relative inline-flex items-center h-6 rounded-full w-11`}>
                        <span className="sr-only">
                           Enable notifications
                        </span>
                        <span
                           className={`${
                              enableDark
                                 ? "translate-x-6"
                                 : "translate-x-1"
                           } inline-block w-4 h-4 transform bg-white dark:bg-gray-900 rounded-full`}
                        />
                     </Switch>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-sm dark:text-gray-400">
                     Menu
                     <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                           enabled
                              ? "bg-indigo-600"
                              : "bg-gray-200"
                        } relative inline-flex items-center h-6 rounded-full w-11`}>
                        <span className="sr-only">
                           Enable notifications
                        </span>
                        <span
                           className={`${
                              enabled
                                 ? "translate-x-6"
                                 : "translate-x-1"
                           } inline-block w-4 h-4 transform bg-white dark:bg-gray-900 rounded-full`}
                        />
                     </Switch>
                  </div>

                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm "
                           )}>
                           Duplicate
                        </a>
                     )}
                  </Menu.Item>
               </div>
               <div className="py-1">
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                           )}>
                           Archive
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                           )}>
                           Move
                        </a>
                     )}
                  </Menu.Item>
               </div>
               <div className="py-1">
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                           )}>
                           Share
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                           )}>
                           Add to favorites
                        </a>
                     )}
                  </Menu.Item>
               </div>
               <div className="py-1">
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-400"
                                 : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm "
                           )}>
                           Delete
                        </a>
                     )}
                  </Menu.Item>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}
