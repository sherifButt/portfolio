import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
   hidden: { opacity: 0, x: 0, y: 30 },
   enter: { opacity: 1, x: 0, y: 0 },
   exit: { opacity: 0, x: 0, y: 100 },
};

function MyApp({ Component, pageProps, router }) {
   return (
      <Layout>
         <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            key={router.route}
            variants={variants}
            transition={{ type: "easy" }}>
            <Component {...pageProps} />
         </motion.main>
      </Layout>
   );
}

export default MyApp;
