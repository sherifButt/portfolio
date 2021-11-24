const CallToAction = () => {
  return (
     <section className="py-16 px-4 bg-gray-50">
        <div className="flex flex-wrap items-center max-w-6xl mx-auto">
           <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="pt-10 pb-6 px-10 bg-white rounded shadow">
                 <ul>
                    <li className="mb-3">
                       <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                          1
                       </span>
                       <span>
                          Our paper is literally tempting you to
                          print something
                       </span>
                    </li>
                    <li className="mb-3">
                       <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                          2
                       </span>
                       <span>
                          Order our services without leaving your
                          office
                       </span>
                    </li>
                    <li className="mb-3">
                       <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                          3
                       </span>
                       <span>
                          We can prepare next-day delivery if
                          necessary
                       </span>
                    </li>
                    <li className="mb-3">
                       <span className="inline-flex items-center justify-center h-8 w-8 mr-2 border rounded-full">
                          4
                       </span>
                       <span>
                          10% discount on the other paper
                          supplies
                       </span>
                    </li>
                 </ul>
              </div>
           </div>
           <div className="lg:w-1/2 px-4 lg:pl-20">
              <h2 className="text-3xl leading-tight font-semibold font-heading">
                 The real business is done on paper
              </h2>
              <p className="mt-6 mb-8 text-gray-400 leading-relaxed">
                 Are you a carte blanche of the paper industry?
                 No worries, our team will help you in
                 implementation process and dispel doubts.
              </p>
              <div>
                 <a
                    className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
                    href="#">
                    Sign up for free
                 </a>
              </div>
           </div>
        </div>
     </section>
  );
}

export default CallToAction
