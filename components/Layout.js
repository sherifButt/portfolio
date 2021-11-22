// import Head from "next/head";
import Head from "./Header/Head";
import Nav from "./Header";
import Footer from "./Footer";
import Router from "next/router";

import {
   animate,
   AnimatePresence,
   AnimateSharedLayout,
   motion,
} from "framer-motion";

const Layout = ({ children }, router) => {
   return (
      <>
         <AnimatePresence
            exitBeforeEnter
            // initial={false}
         onExitComplete={ () => window.scrollTo( 0, 0 ) }
       >
            <Head />
            <body className=" text-black" >
               <div className="container mx-auto px-4 flex flex-col min-h-screen">
                  <header>
                     <Nav />
                  </header>
                  <main className="flex-grow" key={router.route}>
                     {children}
                  </main>
                  <footer>
                     <Footer />
                  </footer>
               </div>
            </body>
         </AnimatePresence>
      </>
   );
};

export default Layout;
