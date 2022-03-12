/* This Navigation requires Tailwind CSS v2.0+ */
import Link from "../../NoScrollLink";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
   motion,
   useViewportScroll,
   useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
   BookmarkAltIcon,
   CalendarIcon,
   ChartBarIcon,
   CursorClickIcon,
   MenuIcon,
   PhoneIcon,
   PlayIcon,
   RefreshIcon,
   ShieldCheckIcon,
   SupportIcon,
   ViewGridIcon,
   XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "../../Dropdown";
import Logo from "../../Logo";
import ThemeSwitch from "../../Options/ThemeSwitch";
import MenuIcons from "../MenuIcons";
import MenuCallsToAction from "../MenuCallsToAction";
import MenuPosts from "../MenuPosts";

const work = [
   {
      name: "work",
      description:
         "Get a better understanding of where your traffic is coming from.",
      href: "/work",
      icon: ChartBarIcon,
   },
   {
      name: "Tool Kit",
      description:
         "Speak directly to your customers in a more meaningful way.",
      href: "/toolkit",
      icon: CursorClickIcon,
   },
   {
      name: "About",
      description:
         "Your customers' data will be safe and secure.",
      href: "/about",
      icon: ShieldCheckIcon,
   },
];
const callsToAction = [
   { title: "Watch Demo", href: "#", icon: PlayIcon },
   { title: "Contact Sales", href: "#", icon: PhoneIcon },
];
const categories = [
   {
      name: "Help Center",
      description:
         "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: SupportIcon,
   },
   {
      name: "Guides",
      description:
         "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: BookmarkAltIcon,
   },
   {
      name: "Events",
      description:
         "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: CalendarIcon,
   },
   {
      name: "Security",
      description:
         "Understand how we take your privacy seriously.",
      href: "#",
      icon: ShieldCheckIcon,
   },
];
const recentPosts = [
   { id: 1, name: "Boost your conversion rate", href: "#" },
   {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
   },
   {
      id: 3,
      name: "Improve your customer experience",
      href: "#",
   },
];

// Framer-motion
const container = {
   hidden: { opacity: 0, x: -20 },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         staggerChildren: 0.2,
         when: "beforeChildren",
      },
   },
};
const item = {
   hidden: { opacity: 0, x: -20 },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: "spring",
      },
   },
};

const menuVariants = {
   visble: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
   },
   hidden: {
      x: -100,
      opacity: 0,
      scale: 0.1,
      transition: { duration: 2, ease: "easeOut" },
   },
};

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

export default function Navigation({ className, data }) {
   //    const cats = (type="category",id=1) => {
   //       const categories = data[ type ]?.posts.map( ( item, i ) => {return {category:item.category}} )
   //       const cleanCategories = [ ...new Set( categories ) ]
   //       console.log('cleanCategories', cleanCategories);
   //       return cleanCategories;
   //    }
   // cats()
   // scroll parallax
   const { scrollY } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 50], [1, 0]);
   const y2 = useTransform(scrollY, [0, 50], [0, -230]);

   return (
      <Popover
         className={classNames(
            className,
            "fixed top-0 left-0 right-0 md:bg-white md:dark:bg-transparent z-20 bg-clip-padding backdrop-filter md:backdrop-blur-xl md:bg-opacity-20"
         )}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
               variants={container}
               initial="hidden"
               animate="visible"
               className="flex justify-between items-center md:border-b border-gray-200 dark:border-gray-700 py-6 md:justify-start md:space-x-10">
               <Logo className="hidden md:inline-block" />
               <motion.div
                  className="flex items-center md:hidden"
                  style={{ x: y2 }}>
                  <motion.div style={{ opacity: y1 }}>
                     <Logo className="mr-5" />
                  </motion.div>
                  <ThemeSwitch />
               </motion.div>
               <motion.div
                  variants={item}
                  className="hidden md:inline-block">
                  <ThemeSwitch />
               </motion.div>

               <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white dark:bg-transparent  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                     <span className="sr-only">Open menu</span>
                     <MenuIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                     />
                  </Popover.Button>
               </div>

               <Popover.Group
                  as="nav"
                  className="hidden md:flex space-x-10">
                  <motion.div variants={item}>
                     {data?.work?.isActive && (
                        <Popover className="relative">
                           {({ open }) => (
                              <>
                                 <Popover.Button
                                    className={classNames(
                                       open
                                          ? "text-gray-900 dark:text-gray-200"
                                          : "text-gray-500 dark:text-gray-400",
                                       "group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-indigo-900 focus:ring-indigo-500 pl-3"
                                    )}>
                                    <span className="capitalize">
                                       work
                                    </span>
                                    <ChevronDownIcon
                                       className={classNames(
                                          open
                                             ? "text-gray-600"
                                             : "text-gray-400",
                                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                                       )}
                                       aria-hidden="true"
                                    />
                                 </Popover.Button>

                                 <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1">
                                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                       <div className="rounded-lg shadow-lg dark:shadow-gray-900 dark:border dark:border-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                                          <MenuPosts
                                             posts={
                                                data.work?.posts
                                             }
                                             mainTitle="work"
                                          />
                                          <MenuCallsToAction
                                             posts={
                                                data
                                                   .callsToAction
                                                   ?.posts
                                             }
                                          />
                                       </div>
                                    </Popover.Panel>
                                 </Transition>
                              </>
                           )}
                        </Popover>
                     )}
                  </motion.div>
                  <motion.div variants={item}>
                     {data?.toolkit?.isActive && (
                        <Popover className="relative">
                           {({ open }) => (
                              <>
                                 <Popover.Button
                                    className={classNames(
                                       open
                                          ? "text-gray-900 dark:text-gray-200"
                                          : "text-gray-500 dark:text-gray-400",
                                       "group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-indigo-900 focus:ring-indigo-500 pl-3"
                                    )}>
                                    <span className="capitalize">
                                       my toolkit
                                    </span>
                                    <ChevronDownIcon
                                       className={classNames(
                                          open
                                             ? "text-gray-600"
                                             : "text-gray-400",
                                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                                       )}
                                       aria-hidden="true"
                                    />
                                 </Popover.Button>

                                 <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1">
                                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                       <div className="rounded-lg shadow-lg dark:shadow-gray-900 dark:border dark:border-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                                          <MenuIcons
                                             posts={
                                                data.toolkit
                                                   ?.posts
                                             }
                                             category={
                                                data?.toolkit
                                             }
                                             mainTitle="tools"
                                             random={true}
                                          />
                                       </div>
                                    </Popover.Panel>
                                 </Transition>
                              </>
                           )}
                        </Popover>
                     )}
                  </motion.div>

                  <motion.div variants={item}>
                     <Link href="/about" passHref>
                        <a className="capitalize text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                           about
                        </a>
                     </Link>
                  </motion.div>
                  <motion.div variants={item}>
                     {data?.blog?.isActive && (
                        <Popover className="relative">
                           {({ open }) => (
                              <>
                                 <Popover.Button
                                    className={classNames(
                                       open
                                          ? "text-gray-900 dark:text-gray-200"
                                          : "text-gray-500 dark:text-gray-400",
                                       "group  dark:bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-indigo-900 focus:ring-indigo-500 pl-3"
                                    )}>
                                    <span className="capitalize">
                                       blog
                                    </span>
                                    <ChevronDownIcon
                                       className={classNames(
                                          open
                                             ? "text-gray-600 dark:text-gray-400"
                                             : "text-gray-400",
                                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                                       )}
                                       aria-hidden="true"
                                    />
                                 </Popover.Button>

                                 <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1">
                                    <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 ">
                                       <div className="rounded-lg shadow-lg dark:shadow-gray-900 dark:border dark:border-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                                          <MenuIcons
                                             posts={
                                                data.category
                                                   ?.posts
                                             }
                                             category={
                                                data?.category
                                             }
                                          />
                                          <MenuPosts
                                             posts={
                                                data.blog?.posts
                                             }
                                             mainTitle="posts"
                                          />
                                       </div>
                                    </Popover.Panel>
                                 </Transition>
                              </>
                           )}
                        </Popover>
                     )}{" "}
                  </motion.div>
               </Popover.Group>

               <motion.div
                  variants={item}
                  className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link
                     href={
                        data.callsToAction
                           ? data.callsToAction?.posts[0].href
                           : ""
                     }
                     passHref>
                     <motion.a
                        variants={item}
                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                        {data.callsToAction?.posts[0].title}
                     </motion.a>
                  </Link>
                  <Link
                     href={
                        data.callsToAction
                           ? data.callsToAction?.posts[1].href
                           : ""
                     }
                     passHref>
                     <motion.a
                        variants={item}
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md dark:shadow-gray-900 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700  shadow-indigo-500/50">
                        {data.callsToAction?.posts[1].title}
                     </motion.a>
                  </Link>

                  <motion.div variants={item}>
                     {" "}
                     {/* <ThemeSwitch /> */}
                     {/* <Dropdown /> */}
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>

         <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
               focus
               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20">
               <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 dark:border-gray-800 dark:border divide-y-2 divide-gray-50 dark:divide-gray-700 ">
                  <div className="pt-5 pb-6 px-5">
                     <div className="flex items-center justify-between">
                        <div>
                           <Logo />
                           {/* <Dropdown /> */}
                           {/* <ThemeSwitch /> */}
                        </div>
                        <div className="-mr-2">
                           <Popover.Button className="bg-white dark:bg-transparent  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">
                                 Close menu
                              </span>
                              <XIcon
                                 className="h-6 w-6"
                                 aria-hidden="true"
                              />
                           </Popover.Button>
                        </div>
                     </div>
                     <div className="mt-6">
                        <nav className="grid gap-y-8">
                           {work.map(item => (
                              <Popover.Button>
                                 <Link href={item.href} passHref>
                                    <a
                                       key={item.name}
                                       className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                                       <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                          aria-hidden="true"
                                       />
                                       <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-400 ">
                                          {item.name}
                                       </span>
                                    </a>
                                 </Link>
                              </Popover.Button>
                           ))}
                        </nav>
                     </div>
                  </div>
                  <div className="py-6 px-5 space-y-6 dark:bg-gray-800">
                     <div className="grid grid-cols-2 gap-y-4 gap-x-8 ">
                        {/* <a
                           href="#"
                           className="text-base font-medium text-gray-900 dark:text-gray-600 hover:text-gray-700 ">
                           about
                        </a>

                        <a
                           href="#"
                           className="text-base font-medium text-gray-900 dark:text-gray-600 hover:text-gray-700">
                           Docs
                        </a> */}
                        {/* {categories.map(item => (
                           <a
                              key={item.name}
                              href={item.href}
                              className="text-base font-medium text-gray-900 dark:text-gray-600 hover:text-gray-700">
                              {item.name}
                           </a>
                        ))} */}
                     </div>
                     <div>
                        <Popover.Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                           <Link
                              href={
                                 data?.callsToAction?.posts
                                    ? data?.callsToAction?.posts[1]
                                         ?.href
                                    : "#"
                              }
                              passHref>
                              <a >
                                 Hire Me
                              </a>
                           </Link>
                        </Popover.Button>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          
                           <Popover.Button>
                              <Link
                                 href={
                                    data?.callsToAction?.posts
                                       ? data?.callsToAction
                                            ?.posts[0]?.href
                                       : "#"
                                 }>
                                 <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-500">
                                     Get my{" "}{
                                       data?.callsToAction?.posts[0]
                                          ?.title
                                    }
                                 </a>
                              </Link>
                           </Popover.Button>
                        </p>
                     </div>
                  </div>
               </div>
            </Popover.Panel>
         </Transition>
      </Popover>
   );
}
