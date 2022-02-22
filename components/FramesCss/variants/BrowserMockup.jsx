// Dependences
import React from "react";
import styled from "styled-components";
// Components
const BrowserMockup = ({ img }) => {
   return (
      <div>
         
            <BrowserMockupD>
               <img style={{"border-radius":"0 0 5px 5px"}} src={img.src} />
            </BrowserMockupD>
           
         <Caption>
            <cation>
               <strong>Macbook Pro 2015 Mockup Showing: </strong>{" "}
               {img?.description || img?.alt}
            </cation>
         </Caption>
      </div>
   );
};

BrowserMockup.defaultProps = {
   img: "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg",
};

export default BrowserMockup;

const BrowserMockupD = styled.div`
   border-top: 2em solid rgba(230, 230, 230, 0.7);
   box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.20);
   position: relative;
   border-radius: 5px;
   margin-top: 25%;
   
   transform: translate(0%, -5%);
   :before {
      display: block;
      position: absolute;
      content: "";
      top: -1.25em;
      left: 1em;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #f44;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3,
         3em 0 0 2px #fb5;
   }
   :after {
      display: block;
      position: absolute;
      content: "";
      top: -2em;
      left: 5.5em;
      width: 20%;
      height: 0em;
      border-bottom: 2em solid white;
      border-left: 0.8em solid transparent;
      border-right: 0.8em solid transparent;
   }
`;

const Caption = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;
`;