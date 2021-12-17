import Blog from "../../components/Blog";
import { getData } from "../api/data";

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

export const getStaticProps = async ( context ) => {
  console.log(`context`, context)
   const data = await getData();
   return {
      props: {
         posts: data.portafolio.posts,
         title: data.portafolio.title,
         subtitle: data.portafolio.subtitle,
      },
   };
};
