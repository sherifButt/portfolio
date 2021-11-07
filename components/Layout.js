import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import {animate,AnimatePresence, motion} from 'framer-motion'
const Layout = ( { children } ) => {
  return (

    <AnimatePresence exitBeforeEnter>
        <body className="antialiased bg-body text-body font-body ">
          <div className="container mx-auto px-4 flex flex-col min-h-screen">
            <header>
              <Nav />
            </header>
            <main className="flex-grow">
              { children }
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
    </AnimatePresence>

  )
}

export default Layout;