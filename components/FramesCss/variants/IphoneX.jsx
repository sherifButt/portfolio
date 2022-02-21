// Dependencies
import React from "react";
import styled from "styled-components";

// Componenets

const IphoneX = ({ img }) => {
  
  return (
     <div>
       <Container>
          <Iphone id="iphone-x" img={img.src} />
       </Container>
          <Caption>
             <cation>
                <strong>Imac 27" Mockup Showing: </strong>{" "}
                {img?.description || img?.alt}
             </cation>
          </Caption>
     </div>
  );
};

IphoneX.defaultProps = {
  img:
    "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg"
};

export default IphoneX;

//styled componenets

const Container = styled.div`
   font-size: 1vw;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   background-color: lighten(#5cbfe2, 20%);
   margin-top: 25%;
   transform: translate(0%, -5%);
`;
const Iphone = styled.div`
   top: 0;
   height: 678px;
   width: 314px;
   display: inline-block;
   background-image: url(${props => props.img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   border: 12px solid #080808;
   border-radius: 44px;
   /* margin-top: 45%;
   transform: translate(0%, -20%); */
   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
   position: relative;
   :before {
      position: absolute;
      left: calc(50% - 28%);
      top: 0;
      width: 56%;
      background: #080808;
      height: 26px;
      content: "";
      border-radius: 0 0 15px 15px;
   }
`;
const Caption = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;
   margin-top: 40px;
`;