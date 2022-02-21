// Dependences
import React from "react";
import styled from "styled-components";
// Components
const MacbookPro2015 = ({ img }) => {
  return (
     <div>
        <Macbook>
           <Screen>
              <Viewport img={img.src} />
           </Screen>
           <Base />
           <Notch />
        </Macbook>
        <Caption>
           <cation>
              <strong>Macbook Pro 2015 Mockup Showing: </strong>{" "}
              {img?.description || img?.alt}
           </cation>
        </Caption>
     </div>
  );
};

MacbookPro2015.defaultProps = {
img:"https://picturepan2.github.io/devices.css/src/img/bg-07.jpg"
}

export default MacbookPro2015;

const Macbook = styled.div`
   padding: 2% 1%;
   margin: 0 auto;
   max-width: 800px;
   transition: background-position 3s ease;
   background-position: 0 0;
   background-size: 100% auto;
   overflow: hidden;
   cursor: pointer;
   margin-top: 25%;
   transform: translate(0%, -25%);
`;
const Screen = styled.div`
  background: #000;
  border-radius: 3% 3% 0.5% 0.5% / 5%;
  margin: 0 auto;
  /* for aspect ratio */
  position: relative;
  width: 80%;
  :before {
    border: 2px solid #cacacc;
    border-radius: 3% 3% 0.5% 0.5% / 5%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8) inset,
      0 0 1px 2px rgba(255, 255, 255, 0.3) inset;
    content: "";
    display: block;
    /* for aspect ratio ~67:100 */
    padding-top: 67%;
  }
  :after {
    content: "";
    border-top: 2px solid rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: 0.75%;
    left: 0.5%;
    padding-top: 1%;
    width: 99%;
  }
`;
const Viewport = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: 4.3% 3.2%;
  background: #333;
  background-image: url(${(props) => props.img});
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
const Base = styled.div`
  /* for aspect ratio */
  position: relative;
  width: 100%;
  :before {
    content: "";
    display: block;
    /* for aspect ratio ~33:1000*/
    padding-top: 3.3%;
    /* stylin */
    background: linear-gradient(
      #eaeced,
      #edeef0 55%,
      #fff 55%,
      #8a8b8f 56%,
      #999ba0 61%,
      #4b4b4f 84%,
      #262627 89%,
      rgba(0, 0, 0, 0.01) 98%
    );
    border-radius: 0 0 10% 10%/ 0 0 50% 50%;
  }
  :after {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.8) 0.5%,
      rgba(0, 0, 0, 0.4) 3.3%,
      transparent 15%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 85%,
      rgba(0, 0, 0, 0.4) 96.7%,
      rgba(255, 255, 255, 0.8) 99.5%,
      rgba(0, 0, 0, 0.5) 100%
    );
    content: "";
    height: 53%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
const Notch = styled.div`
  background: #ddd;
  border-radius: 0 0 7% 7% / 0 0 95% 95%;
  box-shadow: -5px -1px 3px rgba(0, 0, 0, 0.2) inset,
    5px -1px 3px rgba(0, 0, 0, 0.2) inset;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3.5%;
  z-index: 2;
  /* for aspect ratio */
  position: relative;
  width: 14%;
  :before {
    content: "";
    display: block;
    /* for aspect ratio ~1:10 */
    padding-top: 10%;
  }
`;
const Caption = styled.div`
   /* margin-top: -20%; */
   font-size: 0.75rem;
   text-align: center;
   transparent: 0.8;

`;