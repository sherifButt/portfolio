import HowItWorks_01 from './variants/HowItWorks.shuffle.01'    
import HowItWorks_02 from './variants/HowItWorks.shuffle.02'
import HowItWorks_03 from './variants/HowItWorks.shuffle.03'

const HowItWorks = ( { data,variant } ) => {
   let html

   switch (variant) {
      case 1:
         html = <HowItWorks_01/>;
         break;
      case 2:
         html = <HowItWorks_02/>
         break;
      case 3:
         html = <HowItWorks_03/>
         break;
   
      default:
          html = <HowItWorks_01/>;
         break;
   }
   
   return <>{html}</>;
}

HowItWorks.defaultProps = {
  // howitwork: {},
   variant: 1,
};
export default HowItWorks