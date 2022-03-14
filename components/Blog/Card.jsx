import Link from "../NoScrollLink";
import Image from "next/image";
import Blob from "../Blob";
import MorphedSvg from "../MorphedSvg";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const Card = ({
   id,
   title,
   href,
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
   imgs
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
                     className="h-48 w-full object-cover "
                     src={
                        imgs[0].src
                     }
                     alt=""
                  />
               </div>
               <div className="flex-1  p-6 flex flex-col justify-between ">
                  <div className="flex-1">
                     <p className="text-sm font-medium text-indigo-600 hidden md:inline-block">
                        {Array.isArray(category) &&
                           category.filter( Boolean ).map( cat => (
                              
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
                                    "hover:underline inline-flex items-center mr-2 px-3 py-0.5 rounded-full text-sm font-medium"
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
                        className="block mt-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-relaxed text-left">
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
                  <div className="mt-6 flex items-center">
                     <div className="flex-shrink-0">
                        <a href={author.href}>
                           <span className="sr-only">
                              {author.name}
                           </span>
                           <img
                              className="h-10 w-10 rounded-full"
                              src={
                                 author.imageUrl
                              }
                              alt=""
                           />
                        </a>
                     </div>
                     <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                           <a
                              href={
                                 author.href
                              }
                              className="hover:underline">
                              {author.name}
                           </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                           <time dateTime={datetime}>
                              {date}
                           </time>
                           <span aria-hidden="true">
                              &middot;
                           </span>
                           <span>
                              {posts
                                 ? posts[displayedPost]
                                      .readingTime
                                 : readingTime}{" "}
                              read
                           </span>
                        </div>
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
   excerpt: "lorem epsom",
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
