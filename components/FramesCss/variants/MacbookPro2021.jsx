// Dependences
import React from "react";
import styled from "styled-components";

// Components
const MacbookPro2021 = ({ img }) => {
   return (
      <div>
        <Container>
           <Macbook>
              <Display>
                 <Screen img={img.src} />
              </Display>
              <Base>
                 <Indent />
              </Base>
              <Bottom />
           </Macbook>
        </Container>
           <Caption>
              <cation>
                 <strong>Macbook Por 2021 Mockup Showing: </strong>{" "}
                 {img?.description || img?.alt}
              </cation>
           </Caption>
      </div>
   );
};
MacbookPro2021.defaultProps = {
   img: "https://picturepan2.github.io/devices.css/src/img/bg-07.jpg",
};
export default MacbookPro2021;

// Styled Components
const Container = styled.div`
   font-size: 0.6vw;
   @media (max-width: 768px) {
      font-size: 1.3vw;
   }
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   background-color: lighten(#5cbfe2, 20%);
`;
const Macbook = styled.div`
   width: 68.125em;
   margin-top: 25%;
   transform: translate(0%, -30%);
`;
const Display = styled.div`
   background-color: #000;
   overflow: hidden;
   width: 55.375em;
   height: 36em;
   margin: auto;
   border-top-right-radius: 1.7em;
   border-top-left-radius: 1.7em;
   position: relative;

   &:before {
      content: "";
      width: 6em;
      height: 1.1em;
      background: #000;
      position: absolute;
      top: 0.5em;
      left: 0;
      right: 0;
      margin: auto;
      border-bottom-left-radius: 0.4em;
      border-bottom-right-radius: 0.4em;
      z-index: 999;
   }

   &:after {
      content: "";
      width: 0;
      height: 0;
      border-top: 28.125em solid rgba(255, 255, 255, 0.18);
      border-left: 18.75em solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 150;
   }
`;
const Screen = styled.div`
   z-index: 100;
   top: 1.5%;
   left: 1%;
   border-top-right-radius: 1.2em;
   border-top-left-radius: 1.2em;
   width: 98%;
   height: 96%;
   margin: auto;
   position: absolute;
   background: url(${props => props.img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
`;
const Base = styled.div`
   height: 1.25em;
   width: 68.125em;
   background-color: #eff0f4;
   position: relative;

   &:after,
   &:before {
      width: 4em;
      height: 100%;
      content: "";
      top: 0;
      right: 0;
      position: absolute;
      background: linear-gradient(
         to right,
         rgba(226, 228, 227, 0.35) 0%,
         rgba(140, 141, 145, 0.35) 51%,
         rgba(226, 228, 227, 0.35) 99%,
         rgba(226, 228, 227, 0.35) 100%
      );
   }

   &:before {
      left: 0;
   }
`;
const Indent = styled.div`
   height: 0.75em;
   width: 10em;
   margin: auto;
   background: linear-gradient(
      to bottom,
      rgba(153, 154, 158, 0.75) 30%,
      rgba(44, 45, 47, 0.6) 90%
   );
   border-bottom-right-radius: 8em;
   border-bottom-left-radius: 8em;
`;
const Bottom = styled.div`
   height: 0.55em;
   width: 68m;
   margin: auto;
   background: linear-gradient(
      to bottom,
      rgba(153, 154, 158, 0.75) 30%,
      rgba(44, 45, 47, 0.6) 90%
   );
   border-bottom-right-radius: 8em;
   border-bottom-left-radius: 8em;
   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.05),
      0 15px 12px rgba(0, 0, 0, 0.05);
`;

const Caption = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;

`;