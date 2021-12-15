const Feature = ({ path, title, text }) => {
   return (
      <div className="lg:w-1/4 px-4 mb-6">
         <svg
            className="text-indigo-600 w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d={path}></path>
         </svg>
         <h3 className="text-xl my-3 font-semibold font-heading dark:text-gray-200">
            {title}
         </h3>
         <p className="text-sm text-gray-400 leading-relaxed dark:text-gray-500">
            {text}
         </p>
      </div>
   );
};

Feature.defaultProps = {
   path:  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
   title: "High durability",
   text:  "Forget about paper jams with our increased stability product. Ideal for high-quality printing and photocopying.",
};

export default Feature
