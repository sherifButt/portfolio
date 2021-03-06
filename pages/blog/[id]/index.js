import matter from "gray-matter";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head"
// Components
import Frame from "../../../components/FramesCss";
import { getData } from "../../api/data";


function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}
const Blog = ({ blog,post, content }) => {
   let description = marked(DOMPurify.sanitize(content)); // clean description
   return (
      <article className=" relative  py-16 sm:py-16">
         <Head>
            <title>{post?.title} | SBUTT Webdev Home</title>
            <meta property="og:image" content={post?.imgs[0]?.src}></meta>
            <meta name="description" content={post?.excerpt}></meta>
            <meta name="keywords" content={post?.keywords}></meta>
         </Head>
         <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
               <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
               >
                  <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 dark:bg-gray-800 rounded-r-3xl lg:right-72" />
                  <svg
                     className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                     width={404}
                     height={392}
                     fill="none"
                     viewBox="0 0 404 392"
                  >
                     <defs>
                        <pattern
                           id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                           x={0}
                           y={0}
                           width={20}
                           height={20}
                           patternUnits="userSpaceOnUse"
                        >
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
               <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl  lg:px-0 lg:max-w-none lg:py-6">
                  {/* Testimonial card*/}

                  {post?.imgs?.map((img, idx) =>
                     idx === 0 ? (
                        ""
                     ) : (
                        <Frame
                           key={idx}
                           variant={img.frameVariant}
                           img={img}
                           options={{
                              idx,
                              isCaption: true,
                              title: post?.title,
                           }}
                        />
                     )
                  )}

                  {post?.imgs ? (
                     ""
                  ) : (
                     <div
                        className={`relative pt-96 pb-20 ${
                           post?.imageUrlIn
                              ? ""
                              : "rounded-2xl shadow-xl overflow-hidden"
                        }`}
                     >
                        <img
                           className="absolute inset-0 h-full w-full object-cover"
                           src={post?.imageUrlIn || post?.imageUrl}
                           alt=""
                        />

                        <div className="relative px-8"></div>
                     </div>
                  )}
               </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
               {/* Content area */}
               <Link href={blog?.href} passHref>
                  <a className="text-indigo-700">&larr; Back to Articles</a>
               </Link>
               <div className="pt-10  lg:pt-10">
                  <h1 className="leading-relaxed text-4xl lg:text-3x text-black dark:text-gray-100 font-extrabold tracking-normal ">
                     {post?.title}
                  </h1>
                  <div className="relative  z-0 flex-1 flex flex-wrap   right  pb-2"></div>

                  <p className="text-sm font-medium dark:text-indigo-400  text-indigo-600 hidden md:inline-block  py-4 ">
                     {post.category.filter(Boolean).map((cat) => (
                        <Link href={cat.href} passHref key={cat.title}>
                           <a
                              className={classNames(
                                 cat.color,
                                 "hover:underline dark:bg-gray-800 mt-2 inline-flex items-center mr-2 px-3 py-0.5 rounded-full text-sm font-medium "
                              )}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 34 24"
                                 className="fill-indigo-600 dark:fill-indigo-100 mr-1 drop-shadow-sm "
                              >
                                 <path d={cat.icon} />
                              </svg>
                              {cat.title}
                           </a>
                        </Link>
                     ))}
                  </p>
                  <div className="mt-2 flex items-center">
                     <div className="flex-shrink-0">
                        <a href={post.author[0]?.href || "#"}>
                           <span className="sr-only">
                              {post.author[0]?.name}
                           </span>
                           <img
                              className="h-10 w-10 rounded-full"
                              src={post.author[0]?.imageUrl}
                              alt=""
                           />
                        </a>
                     </div>
                     <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                           <a
                              href={post.author[0]?.href || "#"}
                              className="hover:underline"
                           >
                              {post.author[0]?.name}
                              {post.author[0]?.job && (
                                 <span className="text-sm font-light text-gray-500 ml-3">
                                    {post.author[0].job}
                                 </span>
                              )}
                           </a>
                        </p>
                        <div className="flex space-x-1 text-sm font-light text-gray-500">
                           <time dateTime={post.datetime}>{post.date}</time>
                           <span aria-hidden="true">&middot;</span>
                           <span>{post.readingTime} read</span>
                        </div>
                     </div>
                  </div>
                  <article className="prose dark:prose-invert mt-6 text-gray-500 border-t space-y-6">
                     <p className="text-lg">
                        <span
                           className="Container"
                           dangerouslySetInnerHTML={{
                              __html: description,
                           }}
                        ></span>
                     </p>
                  </article>
               </div>

               {/* Stats section */}
               <div className="mt-10">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                     {post.stats &&
                        Object.keys(post.stats).map((key) => (
                           <div
                              key={key}
                              className="border-t-2 border-gray-100 dark:border-gray-800 pt-6"
                           >
                              <dt className="capitalize  text-base font-medium text-gray-500 dark:text-gray-400">
                                 {key}
                                 {/* {console.log("stat")} */}
                              </dt>
                              <dd className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                                 {post.stats[key]}
                              </dd>
                           </div>
                        ))}
                  </dl>
                  <div className="mt-10"></div>
               </div>
            </div>
         </div>
      </article>
   );
};

export const getServerSideProps = async context => {
   try {
      const data = await getData();
      const posts = await data.blog.posts;
      // console.log( posts.filter( i => i.id == context.params.id ) );
      const post = await posts.filter(
         i => i.id == context.params.id
      )[0];
      const { content } = matter(post.description);
      // console.log(content);
      return {
         props: {
            post: post,
            blog:data.blog,
            content,
         },
      };
   } catch (e) {
      return {
         notFound: true,
      };
   }
};

export default Blog;
