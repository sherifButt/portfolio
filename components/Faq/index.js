import Faq_01 from "./variants/Faq.shuffle.01";
import Faq_02 from "./variants/Faq.shuffle.02";
import Faq_03 from "./variants/Faq.tailwind.01";
import data from "../../siteData.config";

const Faq = ({ variant, logoSrc }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Faq_01 logoSrc={logoSrc} />;
         break;
      case 2:
         html = <Faq_02 logoSrc={logoSrc} />;
         break;
      case 3:
         html = <Faq_03 logoSrc={logoSrc} />;
         break;

      default:
         html = <Faq_01 logoSrc={logoSrc} />;
         break;
   }

   return <>{html}</>;
};

Faq.defaultProps = {
   variant: 3,
   logoSrc: data?.logo.src ? data.logo.src : "/sbolio.svg",
};
export default Faq;
