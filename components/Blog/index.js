import Blog_01 from "./variants/Bolg.shuffle.01";
// import Blog_02 from "./variants/Blog.devdojo.01";
import Blog_03 from "./variants/Blog.tailwind.01";



const Blog = ({ variant, title,href, subtitle, posts, items }) => {
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
               title={ title }
               subtitle={ subtitle }
               href={href}
               posts={posts}
               items={items}
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
   title: "Boost your conversion rate",
   href:"/blog",
   subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
   posts:  [],
   items: 3,
};

export default Blog;