import {
   AnimatePresence,
   AnimateSharedLayout,
} from "framer-motion";
import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import Nav from "./Navigation";
import Head from "./Navigation/Head";

const Layout = ({ children }, router) => {
   return (
      <ThemeProvider attribute="class">
         <Head />
         <body className=" text-black bg-white dark:bg-gray-900 max-w-7xl lg:max-w-none mx-auto py-4 px-4 sm:py-10 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 flex flex-col min-h-screen">
               <header className="relative">
                  <Nav />
               </header>
               <main
                  className="flex-grow"
                  key={router.route}>
                  {children}
               </main>
               <footer>
                  <Footer />
               </footer>
            </div>
         </body>
      </ThemeProvider>
   );
};

export default Layout;
