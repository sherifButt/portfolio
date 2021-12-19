import Blog from "../../components/Blog";
import Breadcrumb from "../../components/Breadcrumbs";
import { getData } from "../api/data";

const Portafolio = ({ posts, title,href, subtitle }) => {
   return (
      <>
         {/* <Breadcrumb className="mt-8 ml-8" /> */}
         <Blog
            variant={3}
            items={ 6 }
            href={href}
            title={title}
            subtitle={subtitle}
            posts={posts}
         />
      </>
   );
};

export default Portafolio;

export const getStaticProps = async context => {
   console.log(`context`, context);
   const data = await getData();
   return {
      props: {
         posts: data.portafolio.posts,
         title: data.portafolio.title,
         href: data.portafolio.href,
         subtitle: data.portafolio.subtitle,
      },
   };
};
