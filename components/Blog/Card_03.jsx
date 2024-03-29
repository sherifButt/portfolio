import Link from "../NoScrollLink"

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Card = ({
   id,
   title,
   href,
   callToAction,
   category,
   excerpt,
   description,
   date,
   datetime,
   imageUrl,
   readingTime,
   author,
   posts, // posts array
   displayedPost, // selected post to display
   imgs,
} ) => {
   
   return (
      <div
         key={posts ? posts[displayedPost].title : title}
         className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:scale-105 transition ease-in-out dark:bg-gray-800 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl dark:bg-opacity-30 bg-opacity-40 ">
         <Link
            href={`${posts ? posts[displayedPost].href : href}/${
               posts ? posts[displayedPost].id : id
            }`}
            passHref>
            <a>
               <div className="flex-shrink-0">
                  <img
                     className="h-48 -mb-2 w-full object-cover "
                     src={
                        // posts
                        //    ? posts[displayedPost].imageUrl
                        //    : imageUrl
                        imgs?.[0].src
                     }
                     alt=""
                  />
               </div>
               <div className="flex-1  p-6 flex flex-col justify-between ">
                  <div className="flex-1">
                     <p className="text-sm font-medium text-indigo-600 hidden md:inline-block">
                        {Array.isArray(category) &&
                           category.filter(Boolean).map(cat => (
                              <a
                                 key={
                                    posts
                                       ? posts[displayedPost].cat
                                            .title
                                       : cat.title
                                 }
                                 href={
                                    posts
                                       ? posts[displayedPost].cat
                                            .href
                                       : cat.href
                                 }
                                 className={classNames(
                                    posts
                                       ? posts[displayedPost].cat
                                            .color
                                       : cat.color,
                                    "hover:underline mt-2 inline-flex items-center mr-2 px-3 py-0.5 rounded-full text-sm font-medium"
                                 )}>
                                 {posts
                                    ? posts[displayedPost].cat
                                         .title
                                    : cat.title}
                              </a>
                           ))}
                     </p>
                     <a
                        href={
                           posts
                              ? posts[displayedPost].href
                              : href
                        }
                        className="block mt-5">
                        <h3 className="text-xl  font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-left">
                           {(posts
                              ? posts[displayedPost].title
                              : title
                           )
                              .replace(/(<([^>]+)>)/gi, "")
                              .substring(0, 45)}{" "}
                           →
                        </h3>

                        <p className="mt-3 text-base text-gray-500 dark:text-gray-300 text-left hidden md:inline-block">
                           {(posts
                              ? posts[displayedPost].excerpt
                              : excerpt
                           ).substring(0, 80)}{" "}
                           ...
                        </p>
                     </a>
                  </div>

                  <span className="relative  z-0 flex-1 flex flex-wrap  mt-5 right">
                     {posts
                        ? posts[displayedPost].callToAction
                        : callToAction.map(button => (
                             <Link href={button.href} passHref>
                                <a>
                                   <button
                                      type="button"
                                      className={`${
                                         button.href
                                            ? ""
                                            : "cursor-not-allowed hover:bg-white"
                                      } inline-flex items-center px-4 mr-2 mt-2 py-2 border dark:border-indigo-600 border-indigo-600 shadow-sm text-sm font-medium rounded-md dark:text-indigo-100 text-indigo-600 bg-white dark:bg-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:shadow-lg dark:shadow-indigo-500/50`}>
                                      {button.icon ? (
                                         <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-indigo-700 dark:fill-indigo-100 mr-1 ">
                                            <path
                                               d={button.icon}
                                            />
                                         </svg>
                                      ) : (
                                         ""
                                      )}
                                      {button
                                         ? button.title
                                         : ""}
                                   </button>
                                </a>
                             </Link>
                          ))}
                  </span>
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
   excerpt: "lorem epsom",
   callToAction:[],
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
