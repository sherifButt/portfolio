import CallToAction_01 from "./variants/CallToAction.shuffle.01";

const CallToAction = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <CallToAction_01 />;
         break;
      case 2:
         html = <CallToAction_02 />;
         break;

      default:
         html = <CallToAction_01 />;
         break;
   }

   return <>{html}</>;
};

CallToAction.defaultProps = {
   variant: 1,
};
export default CallToAction;