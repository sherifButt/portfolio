import Testimonials from "../../components/Testimonials";
import { getData } from "../api/data";

const ToolKit = ({ data }) => {
   return <Testimonials variant={4} data={data} />;
};

export default ToolKit;

export const getStaticProps = async context => {
   const data = await getData();
   return {
      props: {
         data: data.category,
      },
   };
};
