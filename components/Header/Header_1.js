import Link from "next/link";
import Logo from "../Logo";

const Header = () => {
   return (
      <nav>
         <div className="text-right py-2 px-4">
            <Link href="/signin" passHref>
               <a className="lg:inline-block mr-6 lg:mt-0 text-sm text-blue-900 hover:text-indigo-600">
                  Sign in
               </a>
            </Link>
            <a
               className="lg:inline-block lg:mt-0 text-sm text-blue-900 hover:text-indigo-600"
               href="#">
               Sign up
            </a>
         </div>
         <div className="flex flex-wrap items-center justify-between p-4 border-t">
            <div className="flex flex-shrink-0 mr-6">
               <div
                  className="text-xl text-indigo-600 font-semibold font-heading"
                  href="#">
                  <Logo />
               </div>
            </div>
            <div className="block lg:hidden">
               <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                  <svg
                     className="fill-current h-3 w-3"
                     viewbox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                     <title>Menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
               </button>
            </div>
            <div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
               <div className="lg:ml-auto">
                  <a
                     className="block lg:inline-block mt-4 lg:mt-0 mr-12 text-blue-900 hover:text-indigo-600"
                     href="#">
                     <span>Products</span>
                     <span className="block text-sm text-gray-400">
                        Premium copy paper
                     </span>
                  </a>
                  <a
                     className="block lg:inline-block mt-4 lg:mt-0 mr-12 text-blue-900 hover:text-indigo-600"
                     href="#">
                     <span>Team</span>
                     <span className="block text-sm text-gray-400">
                        Our family
                     </span>
                  </a>
                  <a
                     className="block lg:inline-block mt-4 lg:mt-0 mr-12 text-blue-900 hover:text-indigo-600"
                     href="#">
                     <span>Customers</span>
                     <span className="block text-sm text-gray-400">
                        Additional{" "}
                     </span>
                  </a>
               </div>
               <div>
                  <Link href="/demo">
                     <a className="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
                        Try Demo
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Header;
