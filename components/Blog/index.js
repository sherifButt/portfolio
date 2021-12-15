import Blog_01 from "./variants/Bolg.shuffle.01";
// import Blog_02 from "./variants/Blog.devdojo.01";
import Blog_03 from "./variants/Blog.tailwind.01";

import data from "../../siteData.config";

const { title, subtitle, posts } = data?.portafolio
   ? data.portafolio
   : "";

const Blog = ({
   variant,
   title,
   subtitle,
   posts,
}) => {
   let html;

   switch (variant) {
      case 1:
         html = <Blog_01 />;
         break;
      case 2:
         html = <Blog_02 />;
         break;
      case 3:
         html = (
            <Blog_03
               title={title}
               subtitle={subtitle}
               posts={posts}
            />
         );
         break;

      default:
         html = <Blog_01 />;
         break;
   }

   return <>{html}</>;
};

Blog.defaultProps = {
   variant: 1,
   title: title ? title : "Boost your conversion rate",
   subtitle: subtitle
      ? subtitle
      : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
   posts: posts ? posts : [],
};
export default Blog;
