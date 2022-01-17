import { motion } from "framer-motion";

const MorphedSvg = ({
   paths,
   start,
   end,
   fill,
   repeat,
   duration,
   stroke,
   strokeWidth,
   strokeLinecap,
   width,
   height,
   viewBox,
   times,
   opacity,
  blur,
  rotate,
   scale,
}) => {
   const variants = {
      start: {
         d: start,

      },
      end: {
         d: end,
      },
   };

   return (
      <div>
         <motion.svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg">
            {paths?.map((p, i) => (
               <>
                  <filter key={"filter_" + i} id={"filter_" + i}>
                     <feGaussianBlur
                        stdDeviation={p.blur ? p.blur : blur}
                     />
                  </filter>
                  <motion.path
                     
                     key={"path" + i}
                     variants={variants}
                     style={{
                        stroke: p.stroke ? p.stroke : stroke,
                        strokeWidth: p.strokeWidth
                           ? p.strokeWidth
                           : strokeWidth,
                        strokeLinecap: p.strokeLinecap
                           ? p.strokeLinecap
                           : strokeLinecap,
                        fill: p.fill ? p.fill : fill,
                        opacity: p.opacity ? p.opacity : opacity,
                        filter: `url(#${"filter_" + i})`,
                     }}
                     initial={{
                        d: p.start,
                        rotateZ: 0,
                        rotateY: 0,
                        scale: 1,
                        originX: 0,
                        
                     }}
                     animate={{
                        d: p.end,
                        
                        rotateZ: p.rotate ? p.rotate : rotate,
                        rotateY: p.rotate ? p.rotate : rotate,
                       scale: p.scale ? p.scale : scale,
                        originX: [0.5,1,.3,.5],
                        transition: {
                           repeat: p.repeat ? p.repeat : repeat,
                           ease: "easeInOut",
                           type: "spring",
                           bounce: 1.25,
                           duration: p.duration
                              ? p.duration
                              : duration,
                           times: p.times ? p.times : times,
                        },
                     }}
                  />
               </>
            ))}
         </motion.svg>
      </div>
   );
};
export default MorphedSvg;

MorphedSvg.defaultProps = {
   paths: [
      {
         start: "M 40,40 Q 160,40 160,160",
         end: [
            "M 40,40 Q 160,40 160,160",
            "M 160,40 Q 100,100 40,160",
            "M 160,160 Q 100,160 40,160",
            "M 160,40 Q 100,160 40,40",
            "M 160,40 Q 100,40 40,40",
            "M 40,40 Q 160,40 160,160",
         ],
      },
   ],

   fill: "#5C63FE",
   opacity: 1,
   blur: 1,
  rotate: 0,
   scale:[1,1.1,.9,1.2,1],
   repeat: Infinity,
   duration: 2,
   stroke: "#70f",
   strokeWidth: 20,
   strokeLinecap: "round",
   fill: "transparent",
   width: "500",
   height: "500",
   viewBox: "-200 -200 500 500",
   times: [0, 0.16, 0.33, 0.5, 0.66, 0.83],
};
