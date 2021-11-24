import Features_01 from "./variants/Features.shuffle.01";

const Features = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Features_01 />;
         break;
      case 2:
         html = <Features_02 />;
         break;

      default:
         html = <Features_01 />;
         break;
   }

   return <>{html}</>;
};

Features.defaultProps = {
   variant: 1,
};
export default Features;
