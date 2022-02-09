import Testimonials_01 from "./variants/Testimonials.shuffle.01";
import Testimonials_02 from "./variants/Testimonials.shuffle.02";
import Testimonials_03 from "./variants/Testimonials.uinel.03";
import Testimonials_04 from "./variants/Testimonials.uinel.04";
import Testimonials_05 from "./variants/Testimonials.uinel.05";

const Testimonials = ({ variant,data }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Testimonials_01 data={data} />
         break;
      case 2:
         html = <Testimonials_02 data={data} />
         break;
      case 3:
         html = <Testimonials_03 data={data} />
         break;
      case 4:
         html = <Testimonials_04 data={data} />
         break;
      case 5:
         html = <Testimonials_05 data={data} />
         break;

      default:
         html = <Testimonials_01 data={data} />
         break;
   }

   return <>{html}</>;
};

Testimonials.defaultProps = {
   variant: 1,
   data: {
      pretitle: "What they say about us",
      title: "Trusted by <span>brands</span> all over",
      subtitle:
         "The nulla commodo, commodo eros a, tristique lectus.",
      posts: [
         {
            title: "WeTransfare",
            img: {
               imgSrc: "assets/imgs/we-transfer.png",
               width: "2/3",
               alt: "WeTransfare",
               css: "",
            },
         },]}
};
export default Testimonials;

