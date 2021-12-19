import Link from "../NoScrollLink";
const Card = ( {
  id,
   title,
   href,
   category,
   description,
   date,
   datetime,
   imageUrl,
   readingTime,
   author,
}) => {
   return (
      <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64  m-auto">
         <img
            alt="eggs"
            src={imageUrl}
            className="rounded-t-lg"
         />
         <div className="bg-white w-full p-4 relative">
            <button
               aria-label="Go to article"
               type="button"
               className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
               <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6 text-white mx-auto"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
               </svg>
            </button>
            <p className="text-gray-800 text-xl font-medium mb-2">
               {title}
            </p>
            <p className="text-gray-600 text-xs">
               {description}
            </p>
            <div className="flex flex-wrap justify-starts items-center mt-6">
               <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                  #{category}
               </div>
               
            </div>
         </div>
      </div>
   );
};

Card.defaultProps = {
   title: "Boost your conversion rate",
   href: "#",
   category: { name: "Article", href: "#" },
   description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
   date: "Mar 16, 2020",
   datetime: "2020-03-16",
   imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
   readingTime: "6 min",
   author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
   },
};

export default Card;
