// Dependencies
import React from "react";
import styled from "styled-components";

// Componenets

const Imac27 = ({ img }) => {
   return (
      <div>
         <Imac>
            <Screen>
               <Viewport img={img?.src} />
            </Screen>
            <Logo />
            <Leg />
            <Foot />
            <Caption>
               <cation>
                  <strong>Imac 27" Mockup Showing: </strong>{" "}
                  {img?.description || img?.alt}
               </cation>
            </Caption>
         </Imac>
      </div>
   );
};

Imac27.defaultProps = {
   img: "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg",
};

export default Imac27;

//styled componenets

const Imac = styled.div`
   padding: 4% 0%;
   /* margin: 0 auto; */
   max-width: 620px;
   background: radial-gradient(
      circle at right bottom,
      transparent 75%,
      rgba(255, 255, 255, 0.05) 75%,
      transparent
   );
   background-size: 100% auto;
   overflow: hidden;
   bottom: 0;
   content: "";
   left: 0;
   position: relative;
   right: 0;
   /* top: 0; */
   margin-top: 15%;
   transform: translate(0%, -10%);
`;
const Screen = styled.div`
   background: #000;
   border-radius: 3% 3% 0 0 / 5% 5% 0 0;
   /* for aspect ratio */
   position: relative;
   width: 100%;
   transition: background-position 3s ease;
   background-position: 0 0;
   background-size: 100% auto;
   overflow: hidden;
   margin: 0 auto;
   cursor: pointer;
   :before {
      content: "";
      display: block;
      /* for aspect ratio ~3:5 */
      padding-top: 60%;
   }
`;
const Viewport = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   margin: 4%;
   background: #333333;
   background-image: url(${props => props.img});
   transition: background-position 3s ease;
   background-position: 0 0;
   background-size: 100% auto;
   overflow: hidden;
   cursor: pointer;
   :after {
      background: radial-gradient(
         circle at right bottom,
         transparent 75%,
         rgba(255, 255, 255, 0.05) 75%,
         transparent
      );
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
   }
`;
const Logo = styled.div`
   background: linear-gradient(90deg, #a6a6aa, #e1e2e4);
   border-radius: 0 0 3% 3%/ 0 0 33.33% 33.33%;
   /* for aspect ratio */
   position: relative;
   width: 100%;
   :before {
      content: "";
      display: block;
      /* for aspect ratio ~9:100 */
      padding-top: 9%;
      :after {
         content: "";
         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 100 100' style='height:24px;width:24px;'%3E%3Cpath d='M77.295 53.134c-0.126-12.664 10.328-18.738 10.795-19.040-5.874-8.596-15.024-9.773-18.285-9.909-7.787-0.788-15.195 4.585-19.147 4.585-3.942 0-10.041-4.468-16.499-4.351-8.488 0.126-16.314 4.935-20.685 12.537-8.819 15.303-2.258 37.973 6.337 50.383 4.2 6.075 9.208 12.898 15.784 12.654 6.332-0.253 8.727-4.097 16.382-4.097 7.656 0 9.807 4.097 16.509 3.972 6.814-0.127 11.131-6.191 15.302-12.285 4.823-7.048 6.809-13.871 6.926-14.221-0.151-0.069-13.287-5.101-13.419-20.228zM64.703 15.969c3.49-4.234 5.846-10.109 5.203-15.969-5.027 0.205-11.121 3.349-14.728 7.573-3.237 3.748-6.069 9.729-5.31 15.472 5.612 0.438 11.341-2.852 14.834-7.077z'/%3E%3C/svg%3E");
         left: 50%;
         margin-left: -2.4%;
         position: absolute;
         top: 20%;
         width: 4.8%;
         padding-top: 4.8%;
      }
   }
`;
const Leg = styled.div`
   margin: 0 auto;
   /* for aspect ratio */
   position: relative;
   width: 20%;
   :before {
      content: "";
      display: block;
      /* for aspect ratio ~46:100 */
      padding-top: 46%;
      background: linear-gradient(
         #7a7b80,
         #abacaf 26%,
         #d0d1d2 57%,
         #f2f2f2 76%,
         #e4e4e4 84%,
         #787878
      );
   }
`;
const Foot = styled.div`
   /* for aspect ratio */
   position: relative;
   width: 20%;
   margin: 0 auto;
   /* for perspective */
   perspective: 180px;
   :before {
      content: "";
      display: block;
      /* for aspect ratio ~2:5 */
      padding-top: 40%;
      /* for perspective */
      transform: rotateX(68deg);
      transform-origin: center top;
      background: linear-gradient(
         #7b7b7b,
         #7f7f7f 39%,
         #a6a6a6 53%,
         #ccc 67%,
         #aaa 86%,
         #eee 88%,
         #fff 95%,
         #a9a9a9 95%,
         #000
      );
      border-radius: 0 0 10% 10% / 0 0 30% 30%;
      box-shadow: 0 -10px 5px rgba(255, 255, 255, 0.1) inset,
         0 -17px 6px rgba(0, 0, 0, 0.1) inset;
   }
`;
const Caption = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;
   margin-top:40px;
`;
