import Team_01 from "./variants/Team.shuffle.01";

const Team = ({ variant }) => {
   let html;

   switch (variant) {
      case 1:
         html = <Team_01 />;
         break;
      case 2:
         html = <Team_02 />;
         break;

      default:
         html = <Team_01 />;
         break;
   }

   return <>{html}</>;
};

Team.defaultProps = {
   variant: 1,
};
export default Team;
