import Link from "../NoScrollLink";
const Card = ({
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
      <div
         key={title}
         className="wrapper  relative antialiased text-gray-900">
         <Link href={`${href}/${id}`} passHref>
            <a>
               <img
                  src={imageUrl}
                  alt=" random imgee"
                  className="w-full object-cover object-center rounded-lg shadow-md hover:scale-105 transition ease-in-out"
               />

               <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden  dark:bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-opacity-30 bg-opacity-20">
                     <div className="flex items-baseline">
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide dark:text-white">
                           New
                        </span>
                        <div className="ml-2 text-gray-500  uppercase text-xs font-semibold tracking-wider">
                           2 baths &bull; 3 rooms
                        </div>
                     </div>
                     <div className="mt-4 mb-10">
                        <p className="text-gray-600 dark:text-white">
                           Course 75% completed
                        </p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                           <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
                        </div>
                     </div>

                     <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate dark:text-white">
                        A random Title
                     </h4>

                     <div className="mt-1 dark:text-white">
                        $1800
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                           {" "}
                           /wk
                        </span>
                     </div>
                     <div className="mt-4">
                        <span className="text-teal-600 text-md font-semibold dark:text-white">
                           4/5 ratings{" "}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                           (based on 234 ratings)
                        </span>
                     </div>
                  </div>
               </div>
            </a>
         </Link>
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
