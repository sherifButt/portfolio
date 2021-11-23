import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Lottie = ({ name, loop, autoplay, renderer, path }) => {
   const container = useRef(null);

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         renderer,
         loop,
         autoplay,
         animationData: path ? require(`${path}`) : data,
         name,
      });
   }, []);

   return <span className="container" ref={container}></span>;
};

Lottie.defaultProps = {
   loop: true,
   autoplay: true,
   renderer: "svg",
   name: "social",
};

const data = {
   v: "5.5.7",
   meta: {
      g: "LottieFiles AE 0.1.20",
      a: "",
      k: "",
      d: "",
      tc: "",
   },
   fr: 30,
   ip: 0,
   op: 30,
   w: 200,
   h: 200,
   nm: "Comp 1",
   ddd: 0,
   assets: [],
   layers: [
      {
         ddd: 0,
         ind: 1,
         ty: 4,
         nm: "build_black_24dp Outlines",
         sr: 1,
         ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: {
               a: 1,
               k: [
                  {
                     i: { x: [0.667], y: [1] },
                     o: { x: [0.167], y: [0.167] },
                     t: 0,
                     s: [0],
                  },
                  {
                     i: { x: [0.667], y: [1] },
                     o: { x: [0.333], y: [0] },
                     t: 10,
                     s: [-12],
                  },
                  {
                     i: { x: [0.833], y: [0.833] },
                     o: { x: [0.333], y: [0] },
                     t: 21,
                     s: [14],
                  },
                  { t: 30, s: [0] },
               ],
               ix: 10,
            },
            p: { a: 0, k: [69.25, 71, 0], ix: 2 },
            a: { a: 0, k: [5.361, 5.568, 0], ix: 1 },
            s: { a: 0, k: [845.047, 845.047, 100], ix: 6 },
         },
         ao: 0,
         shapes: [
            {
               ty: "gr",
               it: [
                  {
                     ind: 0,
                     ty: "sh",
                     ix: 1,
                     ks: {
                        a: 0,
                        k: {
                           i: [
                              [0.301, 0.227],
                              [0, 0],
                              [1.426, 1.426],
                              [1.801, -0.824],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [-1.5, -1.5],
                              [-1.727, 0.676],
                              [0, 0],
                              [-0.301, 0.301],
                              [0, 0],
                           ],
                           o: [
                              [0, 0],
                              [0.676, -1.727],
                              [-1.5, -1.5],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [-0.898, 1.801],
                              [1.426, 1.426],
                              [0, 0],
                              [0.301, 0.301],
                              [0, 0],
                              [0.375, -0.301],
                           ],
                           v: [
                              [8.211, 5.364],
                              [1.387, -1.46],
                              [0.262, -6.637],
                              [-5.289, -7.613],
                              [-2.063, -4.387],
                              [-4.313, -2.136],
                              [-7.613, -5.363],
                              [-6.637, 0.188],
                              [-1.461, 1.313],
                              [5.363, 8.137],
                              [6.414, 8.137],
                              [8.137, 6.415],
                           ],
                           c: true,
                        },
                        ix: 2,
                     },
                     nm: "Path 1",
                     mn: "ADBE Vector Shape - Group",
                     hd: false,
                  },
                  {
                     ind: 1,
                     ty: "sh",
                     ix: 2,
                     ks: {
                        a: 0,
                        k: {
                           i: [[0, 0]],
                           o: [[0, 0]],
                           v: [[8.211, 5.364]],
                           c: false,
                        },
                        ix: 2,
                     },
                     nm: "Path 2",
                     mn: "ADBE Vector Shape - Group",
                     hd: false,
                  },
                  {
                     ty: "mm",
                     mm: 1,
                     nm: "Merge Paths 1",
                     mn: "ADBE Vector Filter - Merge",
                     hd: false,
                  },
                  {
                     ty: "fl",
                     c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                     o: { a: 0, k: 100, ix: 5 },
                     r: 1,
                     bm: 0,
                     nm: "Fill 1",
                     mn: "ADBE Vector Graphic - Fill",
                     hd: false,
                  },
                  {
                     ty: "tr",
                     p: { a: 0, k: [8.813, 8.886], ix: 2 },
                     a: { a: 0, k: [0, 0], ix: 1 },
                     s: { a: 0, k: [100, 100], ix: 3 },
                     r: { a: 0, k: 0, ix: 6 },
                     o: { a: 0, k: 100, ix: 7 },
                     sk: { a: 0, k: 0, ix: 4 },
                     sa: { a: 0, k: 0, ix: 5 },
                     nm: "Transform",
                  },
               ],
               nm: "Group 1",
               np: 4,
               cix: 2,
               bm: 0,
               ix: 1,
               mn: "ADBE Vector Group",
               hd: false,
            },
         ],
         ip: 0,
         op: 321,
         st: 0,
         bm: 0,
      },
   ],
   markers: [],
};

export default Lottie;
