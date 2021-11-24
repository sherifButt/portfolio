import HowItWorks_01 from './variants/HowItWorks.shuffle.01'    
import HowItWorks_02 from './variants/HowItWorks.shuffle.02'

const HowItWorks = ( { variant } ) => {
   let html

   switch (variant) {
      case 1:
         html = <HowItWorks_01/>;
         break;
      case 2:
         html = <HowItWorks_02/>
         break;
   
      default:
          html = <HowItWorks_01/>;
         break;
   }
   
   return <>{html}</>;
}

HowItWorks.defaultProps = {
   variant: 1,
};
export default HowItWorks