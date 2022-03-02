// Dependencies
import React from "react";
import styled from "styled-components";

// Componenets
import Caption from "../Caption"
const IphoneX = ({ img,options }) => {
  
  return (
     <div>
        <Container>
           <Iphone id="iphone-x" img={img.src} />
        </Container>
        {options?.isCaption && (
           <Caption
              img={img}
              options={{
                 ...options,
                deviceType: "Mobile Phone",
                 showing:"- (Mobile screen version)"
              }}
           />
        )}
     </div>
  );
};

IphoneX.defaultProps = {
   img: "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg",
   options: { isCaption: true },
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
   margin-top: 15%;
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
