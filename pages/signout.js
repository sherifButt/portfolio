const signout = () => {
  return (
  <div>
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
              <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                  <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">tails<span className="text-indigo-500">.</span></span>
              </a>
              <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                  <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a>
                  <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                  <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Blog</a>
              </nav>
          </div>
  
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
              <a href="#" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                  Sign in
              </a>
              <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-500 border border-transparent shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md">
                  Sign up
              </a>
          </div>
      </div>
  </section>
  
  {/* <!--Section 2 -- > */}
  <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
      <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div className="flex flex-col w-full md:flex-row">
  
              {/* <!-- Top Text --> */}
              <div className="flex justify-between">
                  <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                      Crafting
                      <span>Powerful</span>
                      <span>Experiences</span>
                  </h1>
              </div>
              {/* <!-- Right Image --> */}
              <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                  <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96"/>
              </div>
          </div>
  
          {/* <!-- Separator --> */}
          <div className="my-16 border-b border-gray-300 lg:my-24"></div>
  
          {/* <!-- Bottom Text --> */}
          <h2 className="text-left text-gray-500 xl:text-xl">
              Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
          </h2>
      </div>
  </section>
  
  {/* <!--Section 3 -- > */}
  <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
          <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
  
              <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Certifications</h4>
                  <p className="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
              </div>
  
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
                  <p className="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
              </div>
  
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
                  <p className="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
              </div>
  
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
                  <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
              </div>
  
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Building Blocks</h4>
                  <p className="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
              </div>
  
              <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-md">
                  <div className="p-3 text-white bg-indigo-500 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path></svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
                  <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
              </div>
  
          </div>
      </div>
  </section>
  
  {/* <!--Section 4 -- > */}
  <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
      <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
  
              <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                  <p className="font-medium text-indigo-500 uppercase">Building Businesses</p>
                  <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                      Changing The Way People Do Business.
                  </h2>
                  <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
              </div>
  
              <div className="w-full mt-16 md:mt-0 md:w-2/5">
                  <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-md">
                      <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                      <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-500 focus:outline-none rounded-md" placeholder="Email address"/>
                      <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-500 focus:outline-none rounded-md" placeholder="Password"/>
                      <div className="block">
                          <button className="w-full px-3 py-4 font-medium text-white bg-indigo-500 rounded-md">Log Me In</button>
                      </div>
                      <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">Sign up here</a></p>
                  </div>
              </div>
  
          </div>
      </div>
  </section>
  
  {/* <!--Section 5 -- > */}
  <section className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              The New Standard for Design
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Use our award-winning tools to help you maximize your profits. We've uncovered the correct recipe for converting visitors into customers.
          </p>
          <div className="flex justify-center mt-8 space-x-3">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent shadow hover:bg-indigo-600 rounded-md">Sign Up Today</a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-indigo-50 border border-transparent hover:bg-indigo-100 rounded-md">Learn more</a>
          </div>
      </div>
  </section>
  
  {/* <!--Section 6 -- > */}
  <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
      <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                  <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love our product</p>
                  <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
                  <p className="my-6 text-lg text-gray-600">Don't just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                  <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 border border-transparent shadow hover:bg-indigo-400 focus:outline-none focus:border-indigo-600 focus:shadow-indigo-NaN md:py-4 md:text-lg md:px-10 rounded-md">View Case Studies</a>
              </div>
              <div className="w-full lg:w-1/2">
                  <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded-md">
                      <div className="flex flex-col pr-8">
                          <div className="relative pl-12">
                              <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                              </svg>
                              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Awesome product! And the customer service is exceptionally well.</p>
                          </div>
  
                          <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                              Jane Cooper
                              <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                          </h3>
                      </div>
                      <img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                  </blockquote>
                  <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-md">
                      <div className="flex flex-col pr-10">
                          <div className="relative pl-12">
                              <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                              </svg>
                              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                          </div>
                          <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                              John Doe
                              <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                          </h3>
                          <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                      </div>
                      <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                  </blockquote>
                  <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-md">
                      <div className="flex flex-col pr-10">
                          <div className="relative pl-12">
                              <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                  <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                              </svg>
                              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">I can't express enough, how amazing this service has been for my company.</p>
                          </div>
  
                          <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                              John Smith
                              <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                          </h3>
                          <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                      </div>
                      <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                  </blockquote>
              </div>
          </div>
      </div>
  </section>
  
  {/* <!--Section 7 -- > */}
  <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
      <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
              <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
              </h2>
              <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
                  Pricing to fit the needs of any companie size.
              </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
              {/* <!-- Price 1 --> */}
              <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8 rounded-md">
                  <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                      Starter
                  </h3>
                  <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                      <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                          $5
                      </p>
                      <p className="box-border m-0 border-solid" style={{borderImage: "initial"}}>
                          / month
                      </p>
                  </div>
                  <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                      Ideal for Startups and Small Companies
                  </p>
                  <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Automated Reporting
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Faster Processing
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Customizations
                      </li>
                  </ul>
                  <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-indigo-500 no-underline bg-transparent border border-indigo-500 cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white focus-within:bg-indigo-600 focus-within:border-indigo-600 focus-within:text-white sm:text-base md:text-lg rounded-md">
                      Select Plan
                  </button>
              </div>
              {/* <!-- Price 2 --> */}
              <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-indigo-500 border-solid sm:p-6 md:px-8 md:py-16 rounded-md">
                  <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                      Basic
                  </h3>
                  <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                      <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                          $15
                      </p>
                <p className="box-border m-0 border-solid" style={ { borderImage: "initial" } }>
                          / month
                      </p>
                  </div>
                  <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                      Ideal for medium-size businesses to larger businesses
                  </p>
                  <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Everything in Starter
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          100 Builds
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Progress Reports
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Premium Support
                      </li>
                  </ul>
                  <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-500 border cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white focus-within:bg-indigo-600 focus-within:border-indigo-600 focus-within:text-white sm:text-base md:text-lg rounded-md">
                      Select Plan
                  </button>
              </div>
              {/* <!-- Price 3 --> */}
              <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8 rounded-md">
                  <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                      Plus
                  </h3>
                  <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                      <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                          $25
                      </p>
                <p className="box-border m-0 border-solid" style={ { borderImage: "initial" } }>
                          / month
                      </p>
                  </div>
                  <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                      Ideal for larger and enterprise companies
                  </p>
                  <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Everything in Basic
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Unlimited Builds
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Advanced Analytics
                      </li>
                      <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                          <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Company Evaluations
                      </li>
                  </ul>
                  <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-indigo-500 no-underline bg-transparent border border-indigo-500 cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white focus-within:bg-indigo-600 focus-within:border-indigo-600 focus-within:text-white sm:text-base md:text-lg rounded-md">
                      Select Plan
                  </button>
              </div>
          </div>
      </div>
  </section>
  
  {/* <!--Section 8 -- > */}
  <section className="py-24 bg-white">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
          <h2 className="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
              <div>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is Tails</h5>
                  <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I try it for Free?</h5>
                  <p>Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your account.</p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">Where do I go to upgrade my account?</h5>
                  <p>
                      You can upgrade your account by visiting <a href="https://devdojo.com/pro" className="text-indigo-500 underline">The Pro Upgrade Page</a>. You will also gain access to many other applications and sections of the site.
                      <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">here</a>.
                  </p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">How long will I have access to Tails</h5>
                  <p>
                      You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                      <a href="https://paddle.com" target="_blank">Paddle</a> for processing payments.
                  </p>
              </div>
              <div>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                  <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                  <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                  <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                  <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                  <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" className="text-indigo-500 underline">question section</a>.
                  </p>
              </div>
          </div>
      </div>
  </section>
  
  
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Team
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Terms
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Dribbble</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </section>
  </div>

  )
}

export default signout;
