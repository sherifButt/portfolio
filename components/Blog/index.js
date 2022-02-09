import Blog_01 from "./variants/Bolg.shuffle.01";
import Blog_03 from "./variants/Blog.tailwind.01";

const Blog = ({
   variant,
   items,
   columns,
   rows,
   isTitle,
   title,
   subtitle,
   isSubtitle,
   isBackground,
   href,
   posts,
   isPagination,
   isPaginationArrows,
   noObservation,
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
               href={href}
               posts={posts}
               items={items}
               columns={columns}
               rows={rows}
               isTitle={isTitle}
               isSubtitle={isSubtitle}
               isBackground={isBackground}
               isPagination={isPagination}
               isPaginationArrows={isPaginationArrows}
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
   items: 3,
   columns: 3,
   rows: 1,
   isTitle: true,
   isSubtitle: true,
   isBackground: true,
   title: "From the Blog",
   subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
   posts: [],
   isPagination: true,
   isPaginationArrows: false,
};

export default Blog;
