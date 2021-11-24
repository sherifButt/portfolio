import { AnimatePresence } from "framer-motion"
import Footer from "./Footer"
import Nav from "./Navigation"
import Head from "./Navigation/Head"

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
