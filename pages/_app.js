import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { motion, AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <motion.div exit={{opacity:0 }} > */}
        <Component {...pageProps} />
      {/* </motion.div> */}
    </Layout>
  )
}

export default MyApp
