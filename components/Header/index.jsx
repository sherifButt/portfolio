import Header_1 from "./variants/Header.shuffle.01";
import data from "../../siteData.config";

const Header = ({
   variant,
   title,
   subtitle,
   button,
   img,
   posts,
}) => {
   let html;

   // title = title.replace(
   //    /<span[^>]*>/g,
   //    '<span class="text-indigo-700 tracking-wide">'
   // );

   switch (variant) {
      case 1:
         html = (
            <Header_1
               title={title}
               subtitle={subtitle}
               button={button}
               img={img}
               posts={posts}
            />
         );
         break;

      default:
         html = <Header_1 />;
         break;
   }
   return <>{html}</>;
};

Header.defaultProps = {
   variant: 1,
   title: data?.header.title
      ? data.header.title
      : "hi from defualt",
   subtitle: data?.header.subtitle
      ? data.header.subtitle
      : "hi from defualt subtitle",
   button: data?.header.button
      ? data.header.button
      : {
           enabled: true,
           text: "click me",
           textLight: "for free",
           href: "/contact",
           icon: 8594,
        },
   img: data?.header.img
      ? data.header.img
      : {
           imgSrc: { light: "48604-leadership.json", dark: "" },
           width: 4,
        },
};

export default Header;
