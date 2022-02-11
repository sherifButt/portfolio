import Contact_01 from "./variants/Contact.tailwind.01";


const Contact = ({variant}) => {
   let html;

   switch (variant) {
      case 1:
         html = <Contact_01 />;
         break;
      

      default:
         html = <Contact_01 />;
         break;
   }

   return <>{html}</>;
};

Contact.defaultProps = {
   variant: 1,
};

export default Contact;
