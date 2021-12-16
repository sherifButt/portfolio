import Blog from "../../components/Blog";
import data from "../../siteData.config_02";
import { getData } from "../api/data";

const { title, subtitle, posts } = data?.portafolio
   ? data.portafolio
   : "";

const Portafolio = ({posts,title,subtitle}) => {
   return (
      <Blog
         variant={3}
         items={3}
         title={title}
         subtitle={subtitle}
         posts={posts} 
      />
   );
};

export default Portafolio;

export const getStaticProps = async () => {
   const data = await getData();
   return {
      props: {
         posts: data.portafolio.posts,
         title: data.portafolio.title,
         subtitle: data.portafolio.subtitle,
      },
   };
};
