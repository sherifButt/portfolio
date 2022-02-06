import axios from "axios";
import { useEffect, useState } from "react";
import Navigation_01 from "./variants/Navigation.suffle.01";
import Navigation_02 from "./variants/Navigation.tailwind.02";
import Navigation_03 from "./variants/Navigation.tailwind.03";

const Navigation = ({ className, variant }) => {
   const [data, setData] = useState({});
   let html;

   const fetchData = async () => {
      try {
         const res = await axios("/api/data");
         setData(res.data);
      } catch (e) {
         console.log( "error while fetching data on navigation", e );
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   switch (variant) {
      case 1:
         html = (
            <Navigation_01
               variant={variant}
               className={className}
               data={data}
            />
         );
         break;
      case 2:
         html = (
            <Navigation_02
               variant={variant}
               className={className}
               data={data}
            />
         );
         break;
      case 3:
         html = (
            <Navigation_03
               variant={variant}
               className={className}
               data={data}
            />
         );
         break;

      default:
         <Navigation_01
            variant={variant}
            className={className}
            data={data}
         />;
         break;
   }

   return html;
};

Navigation.defaultProps = {
   variant: 3,
};
export default Navigation;
