import { motion, AnimatePresence, } from "framer-motion";

const signin = () => {
  return (
    <div>
    <section className="py-10 px-4">
      <div className="flex flex-wrap -mx-6 py-10">
        <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0 py-10">
          <form className="w-full max-w-sm mx-auto">
            <h3 className="text-3xl mb-4 font-semibold font-heading">Join the Dunder Mifflin Infinity</h3>
            <p className="mb-8 text-gray-400 leading-relaxed">Your own Dunder Mifflin account will serve you in the wonderful voyage through our products.</p>
            <div className="mb-4">
              <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Email" />
            </div>
            <div className="mb-4">
              <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password" />
            </div>
            <div className="mb-4">
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Sign in</button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 lg:border-l px-6 py-10">
          <form className="w-full max-w-sm mx-auto">
            <h3 className="text-3xl mb-4 font-semibold font-heading">Meet the paper. Know the paper.</h3>
            <p className="mb-8 text-gray-400 leading-relaxed">Make friend with paper. Your own Dunder Mifflin account will serve you in the wonderful voyage through our products. You are just a few clicks away!</p>
            <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  </div>)
}
export default signin