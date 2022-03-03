// Dependences
import React from "react";
import styled from "styled-components";
// Components
import Caption from "../Caption"
const IphoneXX = ({ img, options }) => {
   return (
      <Container>
         <FrameBase>
            <FrameBaseLight />
            <SideButtonMute />
            <SideButtonVolumeUp />
            <SideButtonVolumeDown />
            <SideButtonHold />
            <StripTop />
            <StripBottom />
            <Port />
            <Layer2>
               <Layer2Light />
               <Layer2LightLightRight />
               <Screen>
                  <Img src={img.src} />
                  <Mask>
                     <LeftPie />
                     <RightPie />
                     <Speaker />
                     <Camera>
                        <LenzLeft />
                        <LenzRight />
                     </Camera>
                  </Mask>
               </Screen>
            </Layer2>
         </FrameBase>
         {options?.isCaption && (
            <Caption
               img={img}
               options={{
                  ...options,
                  deviceType: "Mobile Phone",
                  showing: "- (mobile screen version)",
               }}
            />
         )}
      </Container>
   );
};

IphoneXX.defaultProps = {
   img: "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg",
   options:{isCaption: true},
};

export default IphoneXX;

const Container = styled.div`
   font-size: 0.28vw;
   /* display: flex; */
   align-items: center;
   justify-content: center;
   height: 60%;
   background-color: lighten(#5cbfe2, 20%);
`;
const Body = styled.div`
   margin: 0;
   background: #000;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center center;
`;

const FrameBase = styled.div`
   display: block;
   width: 319.6px;
   height: 664.4px;
   background: white;
   margin-left: 50%;
   margin-top: -5%;
   transform: translate(-50%, -10%);
   border-radius: 48.6px;
   -moz-box-shadow: inset 0 0 12px #494949;
   -webkit-box-shadow: inset 0 0 12px #494949;
   box-shadow: inset 2px 0 12px #494949, 10px 10px 20px #24242480;
`;

const FrameBaseLight = styled.div`
   position: absolute;
   width: 0px;
   height: 99.2%;
   border-radius: 48.6px;
   border: 157.4px solid white;
   border-top: 0px;
   top: 2px;
   margin-left: 2px;
   :after {
      position: absolute;
      content: " ";
      opacity: 0.5;
      width: 0px;
      height: 97.2px;
      border-radius: 50px;
      filter: blur(1px);
      border: 155.4px solid black;
      border-top: 0px;
      top: 2px;
      left: 0;
      transform: translateX(-50%);
   }
`;

const SideButton = styled.div`
   position: absolute;
   /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,e5e5e5+7,ffffff+50,ffffff+93,000000+100 */
   background: #000000; /* Old browsers */
   background: -moz-linear-gradient(
      top,
      #494949 0%,
      #aaaaaa 12%,
      #dddddd 50%,
      #aaaaaa 88%,
      #494949 100%
   ); /* FF3.6-15 */
   background: -webkit-linear-gradient(
      top,
      #494949 0%,
      #aaaaaa 12%,
      #dddddd 50%,
      #aaaaaa 88%,
      #494949 100%
   ); /* Chrome10-25,Safari5.1-6 */
   background: linear-gradient(
      to bottom,
      #494949 0%,
      #aaaaaa 12%,
      #dddddd 50%,
      #aaaaaa 88%,
      #494949 100%
   ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
   width: 3px;
`;

const SideButtonMute = styled(SideButton)`
   height: 25px;
   top: 75px;
   left: -3px;
   border-radius: 1.5px 0 0 1.5px;
`;

const SideButtonVolumeUp = styled(SideButton)`
   height: 50px;
   top: 125px;
   left: -3px;
   border-radius: 1.5px 0 0 1.5px;
`;
const SideButtonVolumeDown = styled(SideButton)`
   height: 50px;
   top: 190px;
   left: -3px;
   border-radius: 1.5px 0 0 1.5px;
`;
const SideButtonHold = styled(SideButton)`
   height: 75px;
   top: 145px;
   left: 99.9%;
   border-radius: 0px 1.5px 1.5px 0px;
`;

const Layer2 = styled.div`
   width: 306.6px;
   height: 651.4px;
   background: black;
   margin-left: 50%;
   margin-top: 50%;
   transform: translate(-50%, 6.5px);
   border-radius: 44.6px;
   -moz-box-shadow: 0px 0px 15px 1.5px #494949;
   -webkit-box-shadow: 0px 0px 15px 1.5px #494949;
   box-shadow: -2px 0px 15px 1.5px #494949;
   border: 1px 2px solid black;
`;

const Screen = styled.div`
   background: white;
   width: 286.6px;
   height: 631.4px;
   margin-left: 50%;
   margin-top: 50%;
   transform: translate(-50%, 9px);
   border-radius: 38.6px;
`;

const Stripe = styled.div`
   position: absolute;
   background: white;
   width: 100%;
   height: 4px;
`;

const StripTop = styled(Stripe)`
   top: 10%;
`;
const StripBottom = styled(Stripe)`
   bottom: 10%;
`;

const Port = styled.div`
   position: absolute;
   background: white;
   width: 30px;
   height: 2px;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   border-radius: 50% 50% 0 0;
`;

const Layer2Light = styled.div`
   position: absolute;
   width: 0px;
   height: 645.4px;
   border-radius: 50px;
   opacity: 0.5;
   filter: blur(2px);
   border: 44.6px solid white;
   border-top: 0px;
   top: 2px;
   margin-left: 4px;
   :after {
      position: absolute;
      content: " ";
      width: 0px;
      height: 643.4px;
      border-radius: 50px;
      border: 44.6px solid black;
      border-top: 0px;
      top: 2px;
      margin-left: -40px;
      z-index: 2;
   }
`;

const Layer2LightLightRight = styled(Layer2Light)`
   left: 100%;
   transform: rotate(180deg) translateX(96.2px);
`;

const Img = styled.img`
   border-radius: 38.6px;
   position: absolute;
   object-fit: cover;
   top: -1px;
   width: 100%;
   height: 100.5%;
   filter: brightness(80%);
`;

const Mask = styled.div`
   background: black;
   width: 160px;
   height: 25px;
   margin-left: 50%;
   transform: translate(-50%, -1px);
   border-radius: 0% 0% 20px 20px;
`;

const LeftPie = styled.div`
   position: absolute;
   overflow: hidden;
   height: 8px;
   width: 8px;
   left: -8px;
   transform: rotate(90deg);
   :after {
      content: " ";
      position: absolute;
      left: 0%;
      top: 0%;
      box-shadow: 0 0 0 8px black;
      height: 200%;
      width: 200%;
      border-radius: 50%;
   }
`;

const RightPie = styled.div`
   position: absolute;
   overflow: hidden;
   height: 8px;
   width: 8px;
   right: -8px;
   transform: rotate(0deg);
   :after {
      content: " ";
      position: absolute;
      left: 0%;
      top: 0%;
      box-shadow: 0 0 0 8px black;
      height: 200%;
      width: 200%;
      border-radius: 50%;
   }
`;

const Speaker = styled.div`
   position: absolute;
   height: 4px;
   width: 35px;
   background: #222222;
   margin-top: 5px;
   margin-left: 50%;
   transform: translateX(-50%);
   border-radius: 10px;
`;

const Camera = styled.div`
   position: absolute;
   height: 8px;
   width: 8px;
   background: #222222;
   margin-top: 3px;
   margin-left: 70%;
   transform: translateX(-50%);
   border-radius: 10px;
`;

const Lenz = styled.div`
   position: absolute;
   background: blue;
   -moz-box-shadow: inset 0 0 2px #0d1a53;
   -webkit-box-shadow: inset 0 0 2px #0d1a53;
   box-shadow: inset 0px 0 2px #0d1a53;
   border-radius: 8px;
`;

const LenzLeft = styled(Lenz)`
   filter: brightness(70%);
   width: 4px;
   height: 4px;
   margin: 1px 2px 0 0;
`;

const LenzRight = styled(Lenz)`
   filter: brightness(50%);
   width: 5px;
   height: 5px;
   left: 2px;
   top: 1px;
`;

