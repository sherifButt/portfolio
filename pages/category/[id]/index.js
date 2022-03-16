/* This example requires Tailwind CSS v2.0+ */

import { getData } from "../../api/data";
import DOMPurify from "isomorphic-dompurify";
import matter from "gray-matter";
import { marked } from "marked";
import inWords from "../../../util/inWords"
import Link from "next/link"

// componenets
import ProgressBar from "../../../components/UX/ProgressBar";
import MenuIcons from "../../../components/Navigation/MenuIcons";


const stats = [
   { label: "Started", value: "2021" },
   { label: "Projects", value: "5" },
   { label: "Collaborations", value: "11" },
   { label: "Commercial Value", value: "$25M" },
];

const Example = ({category, post, content }) => {
   // replace existing blog icon with toolkit icon inside
   post = {
      ...post,
      blog: post.blog?.map((item, idx) => ({
         ...item,
         icon: post.icon,
      })),
   };

   // clean description
   let description = marked(DOMPurify.sanitize(content));
   return (
      <div className=" relative  py-16 sm:py-24">
         <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
               <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                  <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 dark:bg-gray-800 rounded-r-3xl lg:right-72" />
                  <svg
                     className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                     width={404}
                     height={392}
                     fill="none"
                     viewBox="0 0 404 392">
                     <defs>
                        <pattern
                           id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                           x={0}
                           y={0}
                           width={20}
                           height={20}
                           patternUnits="userSpaceOnUse">
                           <rect
                              x={0}
                              y={0}
                              width={4}
                              height={4}
                              className="text-gray-200 dark:text-gray-700"
                              fill="currentColor"
                           />
                        </pattern>
                     </defs>
                     <rect
                        width={404}
                        height={392}
                        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                     />
                  </svg>
               </div>
               <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  {/* Testimonial card*/}
                  {post?.icon ? (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="400"
                        height="400"
                        viewBox="0 0 24 24"
                        className="fill-indigo-700 dark:fill-indigo-100 mr-1 scale-75 -translate-x-20 md:scale-100 md:translate-x-0 ">
                        <path d={post.icon} />
                     </svg>
                  ) : (
                     <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img
                           className="absolute inset-0 h-full w-full object-cover"
                           src={post.imageUrl}
                           alt=""
                        />
                     </div>
                  )}
               </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
               {/* Content area */}
               <Link href={category?.href} passHref>
                  <a className="text-indigo-700">&larr; back</a>
               </Link>
               <div className="pt-4 sm:pt-16 lg:pt-10">
                  <h1 className="leading-relaxed text-4xl lg:text-3x text-black dark:text-gray-100 font-extrabold tracking-normal ">
                     {post.title} Articls
                  </h1>
                  <article className="prose dark:prose-invert mt-6 text-gray-500 space-y-6">
                     <p className="text-lg">
                        <span
                           className="Container"
                           dangerouslySetInnerHTML={{
                              __html: description,
                           }}></span>
                     </p>
                  </article>
               </div>
               {/* blog */}
               {post?.blog?.length !== 0 && (
                  <div>
                     <h3 className="capitalize pt-5 leading-loose text-2xl lg:text-3x text-black dark:text-gray-100 font-extrabold tracking-normal">
                        We wrote{" "}
                        <u className="capitalize">
                           {inWords(post?.blog?.length)}
                        </u>{" "}
                        {post?.title} article
                        {post?.blog?.length > 1 && "s"}
                     </h3>
                     <MenuIcons
                        posts={post?.blog}
                        limit={99}
                        numerized
                        mainTitle="Articles"
                        rootHref="/blog"
                        isAuthor
                     />
                  </div>
               )}

               {/* Stats section */}
               <div className="">
                  <div className="">
                     {/*  <h3 className="pt-5 leading-loose text-2xl lg:text-3x text-black dark:text-gray-100 font-extrabold tracking-normal">
                        {post?.title} Stats
                     </h3>
                      <ProgressBar
                        options={{
                           label: "Experience",
                           percentage: post?.experience,
                           description:
                              "calculated base on total experience as frontend webDev",
                        }}
                     />
                     <ProgressBar
                        options={{
                           label: "Experience",
                           percentage: 60,
                           description:
                              "calculated base on total experience as frontend webDev",
                        }}
                     />
                     <ProgressBar
                        options={{
                           label: "Experience",
                           percentage: 60,
                           description:
                              "calculated base on total experience as frontend webDev",
                        }}
                     /> */}
                  </div>
                  {/* <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                     {stats.map(stat => (
                        <div
                           key={stat.label}
                           className="border-t-2 border-gray-100 dark:border-gray-800 pt-6">
                           <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                              {stat.label}
                           </dt>
                           <dd className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                              {stat.value}
                           </dd>
                        </div>
                     ))}
                  </dl> */}
                  <div className="mt-10">
                     {/* <a
                        href="#"
                        className="text-base font-medium text-indigo-600">
                        {" "}
                        Learn more about how we're changing the
                        world{" "}
                        <span aria-hidden="true">
                           &rarr;
                        </span>{" "}
                     </a> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export const getServerSideProps = async context => {
   try {
      const data = await getData();
      const posts = await data.category.posts;

      // console.log( posts.filter( i => i.id == context.params.id ) );
      const post = await posts.filter(
         i => i.id == context.params.id
      )[0];

      const { content } = matter(post?.description);

      console.log(content);
      return {
         props: {
            post: post,
         category:data.category,
            content,
         },
      };
   } catch (e) {
      return {
         notFound: true,
      };
   }
};

export default Example;
