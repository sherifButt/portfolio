import "tailwindcss/tailwind.css";
import "../styles/global.css";

import Layout from "../components/Layout";
import {
   motion,
   AnimatePresence,
   AnimateSharedLayout,
} from "framer-motion";

const variants = {
   hidden: { opacity: 0, x: 0, y: 50 },
   enter: { opacity: 1, x: 0, y: 0 },
   exit: { opacity: 0, x: 0, y: -100 },
};


function MyApp({ Component, pageProps, router }) {
   return (
      <Layout >
         <AnimateSharedLayout>
            <AnimatePresence
               exitBeforeEnter
               // initial={false}
               onExitComplete={() => window.scrollTo(0, 0)}>
               <motion.main
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  key={router.route}
                  transition={{
                     type: "easeOut",
                     duration: 0.5,
                  }}>
                  <Component {...pageProps} key={router.route} />
               </motion.main>
            </AnimatePresence>
         </AnimateSharedLayout>
      </Layout>
   );
}



export default MyApp;
