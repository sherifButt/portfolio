import { motion } from "framer-motion";
import styled from 'styled-components'
import { divideColor } from "tailwindcss/defaultTheme";
const AnimatedText = ( { children } ) => {
  return (
    <ShadedText>
      {/* split sentences into words */ }
      {
        children.split( ' ' ).map( ( word, i ) => {
          return (<div key={ `word-${word}-${i}` } style={{display:'inline-block'}}>
            {
              // split words into letters
             
              Array.from( word ).map( ( letter, i ) => {
                
                return (
                  <motion.span whileHover={ { textShadow:'none'} } transition={ { ease: "easeIn", duration: 1 } }  key={ `${ i }` } style={ { position: 'relative', display: 'inline-block', width: 'auto' } } >
                    { letter }
                  </motion.span>
                )

              })
            
            }{ '\u00A0' }
          </div>)
        } )
      }


    </ShadedText>
  )
}

export default AnimatedText;

const ShadedText = styled.div`

  // width: auto; /* 32px */
  // height: auto; /* 145px */
  // white-space: pre;
  overflow: visible;
  // text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.25), 0px 8px 21px rgba(0,0,0,0.25), 4px 8px 4px rgba(0, 0, 0, 0.2),  -4px 7px 4px rgba(0, 0, 0, 0.2);
text-shadow: 0px 12px 23px rgba(169, 180, 203, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 0px #D6DADF;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 1.2;
  // font-family: "Poppins", serif;
  // color: #000000;
  // font-size: 121px;

`
const DivingText = {
  textShadow: '0px 0px 0px rgba( 0, 0, 0, 0.25 ), 0px 0px 21px rgba( 0, 0, 0, 0.25 ), 0px 0px 4px rgba( 0, 0, 0, 0.2 ), 0px 0px 0px rgba( 0, 0, 0, 0.2 ), 0px 0px 4px rgba( 0, 0, 0, 0.2 )'
}
