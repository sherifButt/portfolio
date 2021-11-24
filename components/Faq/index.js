import Faq_01 from './variants/Faq.shuffle.01'    
import Faq_02 from './variants/Faq.shuffle.02'    


const Faq = ( { variant } ) => {
   let html

   switch (variant) {
      case 1:
         html = <Faq_01/>;
         break;
      case 2:
         html = <Faq_02/>
         break;
   
      default:
          html = <Faq_01/>;
         break;
   }
   
   return <>{html}</>;
}

Faq.defaultProps = {
   variant: 1,
};
export default Faq