import Testimonials_01 from "./variants/Testimonials.shuffle.01";
import Testimonials_02 from "./variants/Testimonials.shuffle.02";
import Testimonials_03 from "./variants/Testimonials.uinel.03";

const Testimonials = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Testimonials_01 />;
         break;
      case 2:
         html = <Testimonials_02 />;
         break;
      case 3:
         html = <Testimonials_03 />;
         break;

      default:
         html = <Testimonials_01 />;
         break;
   }

   return <>{html}</>;
};

Testimonials.defaultProps = {
   variant: 1,
};
export default Testimonials;

