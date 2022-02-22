// Dependences
import React from "react";
import styled from "styled-components";

// Components
const Caption = ( { img, options } ) => {
  return (
     <Caption_>
        <cation className="flex ">
           <div className=" text-black dark:text-white font-semibold">
              {options?.idx}. {options?.deviceType} Mockup :{" "}
           </div>{" "}
           <div className="flex-1 text-left ml-2 text-black dark:text-gray-400 font-normal">
              showing {img?.description || img?.alt}
           </div>
        </cation>
     </Caption_>
  );
}

export default Caption

const Caption_ = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;
  
`;