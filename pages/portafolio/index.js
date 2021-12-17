import Blog from "../../components/Blog";
import Breadcrumb from "../../components/Breadcrumbs";
import { getData } from "../api/data";

const Portafolio = ({ posts, title, subtitle }) => {
   return (
      <>
         {/* <Breadcrumb className="mt-8 ml-8" /> */}
         <Blog
            variant={3}
            items={3}
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
         subtitle: data.portafolio.subtitle,
      },
   };
};
