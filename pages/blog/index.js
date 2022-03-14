import Blog from "../../components/Blog";
import Breadcrumb from "../../components/Breadcrumbs";
import { getData } from "../api/data";

const Work = ({ posts, title, href, subtitle }) => {
   return (
      <>
         {/* <Breadcrumb className="mt-8 ml-8" /> */}
         <Blog
            variant={2}
            items={6}
            href={href}
            title={title}
            subtitle={subtitle}
            posts={posts}
         />
      </>
   );
};

export default Work;

export const getStaticProps = async context => {
   console.log(`context`, context);
   const data = await getData();
   return {
      props: {
         posts: data.blog.posts,
         title: data.blog.title,
         href: data.blog.href,
         subtitle: data.blog.subtitle,
      },
   };
};
