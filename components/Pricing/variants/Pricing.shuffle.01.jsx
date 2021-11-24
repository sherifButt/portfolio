const Pricing = () => {
  return (
     <section className="py-8 px-4">
        <div className="flex flex-wrap text-center">
           <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="h-full flex flex-col py-8 px-6 border">
                 <h3 className="text-4xl mb-2 font-semibold font-heading">
                    Dunder cousin
                 </h3>
                 <p className="mb-auto text-gray-400 leading-relaxed">
                    Just enough paper for small business. Not
                    enough to waste it on fluffy animals photos.
                 </p>
                 <h4 className="text-3xl font-semibold font-heading">
                    $9
                 </h4>
                 <p className="mb-4 text-gray-400">
                    per user per month
                 </p>
                 <a
                    className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                    href="#">
                    Contact sales
                 </a>
              </div>
           </div>
           <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="relative h-full flex flex-col py-8 px-6 border-4 border-green-500 shadow-lg">
                 <span className="absolute top-0 right-0 py-1 px-3 m-2 text-sm text-white font-semibold bg-green-500 rounded">
                    MOST POPULAR
                 </span>
                 <h3 className="text-4xl mb-2 font-semibold font-heading">
                    Dunder son
                 </h3>
                 <p className="mb-8 text-gray-400 leading-relaxed">
                    That’s what we’re talking about! More reams
                    of paper is a really reamful choice.
                 </p>
                 <h4 className="text-3xl font-semibold font-heading">
                    $49
                 </h4>
                 <p className="mb-4 text-gray-400">
                    per user per month
                 </p>
                 <a
                    className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-green-500 hover:bg-green-600 font-semibold rounded shadow"
                    href="#">
                    Contact sales
                 </a>
              </div>
           </div>
           <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="h-full flex flex-col py-8 px-6 border">
                 <h3 className="text-4xl mb-2 font-semibold font-heading">
                    Dunder mother
                 </h3>
                 <p className="mb-auto text-gray-400 leading-relaxed">
                    Big business needs big amount of paper. The
                    best quality comes with Dunder Mifflin paper.
                 </p>
                 <h4 className="text-3xl font-semibold font-heading">
                    $99
                 </h4>
                 <p className="mb-4 text-gray-400">
                    per user per month
                 </p>
                 <a
                    className="inline-block w-full py-3 px-5 leading-none text-center text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                    href="#">
                    Contact sales
                 </a>
              </div>
           </div>
        </div>
     </section>
  );
}

export default Pricing
