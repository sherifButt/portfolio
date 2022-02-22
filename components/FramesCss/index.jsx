// Dependencies
import React from "react";

// Componenets
import IphoneX from "./variants/IphoneX";
import IphoneXX from "./variants/IphoneXX";
import MacbookPro2021 from "./variants/MacbookPro2021";
import MacbookPro2015 from "./variants/MacbookPro2015";
import Imac27 from "./variants/Imac27";
import BrowserMockup from "./variants/BrowserMockup";

const FramesCss = ({ variant, img,options,className }) => {
  switch (variant) {
    case 1:
      return <IphoneX img={img} options={options} className={className} />;
    case 2:
      return <IphoneXX img={img} options={options} className={className} />;
    case 3:
      return <MacbookPro2021 img={img} options={options} className={className}/>;
    case 4:
      return <MacbookPro2015 img={img} options={options} className={className} />;
    case 5:
      return <Imac27 img={img} options={options} className={className} />;
    case 6:
      return <BrowserMockup img={img} options={options} className={className} />;

    default:
      return <IphoneX img={img} options={options} className={className} />;
  }
};
export default FramesCss;
