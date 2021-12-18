import { useState } from "react";
import Card from "../Card";
import Pagination from "../Pagination";

export default function Blog({
   items,
   title,
   subtitle,
   posts,
   isPagination,
}) {
   // Pagination
   const postsCount = posts.length;
   const pages = Math.ceil(postsCount / items);
   const [currentPage, setCurrentPage] = useState(1);

   const offset = (currentPage - 1) * items + 1;
   const currentPosts = posts.slice(
      offset - 1,
      offset + items - 1
   );
   return (
      <section className="flex lg:h-screen_">
         <div className="m-auto relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className=" inset-0">
               <div className=" h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
               <div className="text-center">
                  <h2 className="text-5xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                     {title}
                  </h2>
                  <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                     {subtitle}
                  </p>
               </div>
               <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                  {currentPosts
                     .filter(Boolean)
                     .slice(0, items)
                     .map(
                        ({
                           id,
                           title,
                           href,
                           imageUrl,
                           category,
                           description,
                           author,
                           datetime,
                           date,
                           readingTime,
                        },i) => (
                           <Card key={"blog_"+i}
                              id={id}
                              title={title}
                              href={href}
                              imageUrl={imageUrl}
                              category={category}
                              description={description}
                              author={author}
                              datetime={datetime}
                              date={date}
                              readingTime={readingTime}
                           />
                        )
                     )}
               </div>
            </div>
            {!isPagination ? (
               <Pagination
                  className="mt-10 z-20"
                  items={items}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
               />
            ) : (
               ""
            )}
         </div>
      </section>
   );
}

Blog.defaultProps = {
   items: 3,
   title: "From the Blog",
   subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
   posts: [],
};
