// Dependencies
import React from "react";

// Componenets
import IphoneX from "./variants/IphoneX";
import IphoneXX from "./variants/IphoneXX";
import MacbookPro2021 from "./variants/MacbookPro2021";
import MacbookPro2015 from "./variants/MacbookPro2015";
import Imac27 from "./variants/Imac27";

const FramesCss = ({ variant, img,className }) => {
  switch (variant) {
    case 1:
      return <IphoneX img={img} className={className} />;
    case 2:
      return <IphoneXX img={img} className={className} />;
    case 3:
      return <MacbookPro2021 img={img} className={className}/>;
    case 4:
      return <MacbookPro2015 img={img} className={className} />;
    case 5:
      return <Imac27 img={img} className={className} />;

    default:
      return <IphoneX img={img} className={className} />;
  }
};
export default FramesCss;
