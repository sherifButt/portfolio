const demo = () => {
   return (
      <div class="container mx-auto px-4">
         <section class="py-8 px-4 text-center">
            <div class="w-full max-w-2xl mx-auto">
               <span class="text-sm font-semibold">TAGLINE</span>
               <h2 class="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
                  No paper plane can be
               </h2>
            </div>
         </section>

         <section class="py-4">
            <div class="w-full max-w-sm mx-auto">
               <form>
                  <div class="mb-4">
                     <input
                        class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                        type="text"
                        placeholder="Email"
                     />
                  </div>
                  <div class="mb-4">
                     <input
                        class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                        type="password"
                        placeholder="Password"
                     />
                  </div>
                  <div class="mb-4">
                     <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">
                        Example select
                     </label>
                     <select class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none bg-gray-50">
                        <option>-- Select product --</option>
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                     </select>
                  </div>

                  <div class="mb-4">
                     <label class="text-gray-400">
                        <input
                           class="mr-2 leading-tight"
                           type="checkbox"
                        />
                        <span class="text-sm">
                           Send me your newsletter!
                        </span>
                     </label>
                  </div>
                  <div class="mb-4">
                     <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
                        Sign up
                     </button>
                  </div>
               </form>
            </div>
         </section>
      </div>
   );
};

export default demo;
