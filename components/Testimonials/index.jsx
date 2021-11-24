import Testimonials_01 from "./variants/Testimonials.shuffle.01";
import Testimonials_02 from "./variants/Testimonials.shuffle.02";

const Testimonials = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Testimonials_01 />;
         break;
      case 2:
         html = <Testimonials_02 />;
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
