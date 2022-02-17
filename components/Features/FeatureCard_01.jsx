const FeatureCard = ({ path, title, text, key }) => {
   return (
      

         <div key={key} className="pt-6">
            <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
               <div className="-mt-6">
                  <div>
                     <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                           fill="none"
                           stroke="currentColor"
                           viewBox="-2 -2 28 28"
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-8 w-8 text-white dark:text-black"
                           aria-hidden="true">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d={path}></path>
                        </svg>
                     </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-black dark:text-white  tracking-tight">
                     {title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500 ">
                         {text}
                  </p>
               </div>
            </div>
         </div>
      
   );
};

FeatureCard.defaultProps = {
   path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
   title: "High durability",
   text: "Forget about paper jams with our increased stability product. Ideal for high-quality printing and photocopying.",
};

export default FeatureCard;
