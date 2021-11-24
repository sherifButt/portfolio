import Pricing_01 from "./variants/Pricing.shuffle.01";
import Pricing_02 from "./variants/Pricing.shuffle.02";

const Pricing = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Pricing_01 />;
         break;
      case 2:
         html = <Pricing_02 />;
         break;

      default:
         html = <Pricing_01 />;
         break;
   }

   return <>{html}</>;
};

Pricing.defaultProps = {
   variant: 1,
};
export default Pricing;
