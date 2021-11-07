import{jsx as _jsx}from"react/jsx-runtime";import{addPropertyControls,ControlType}from"framer";import{motion}from"framer-motion";// Learn more: https://www.framer.com/docs/guides/code-components/
export default function Compleation_bar(props){const{width,onTap,style}=props;// "...style" enables switching between auto & fixed sizing
// Learn more: https://www.framer.com/docs/guides/auto-sizing
return(/*#__PURE__*/ _jsx(motion.div,{style:{...style,...containerStyle},children:/*#__PURE__*/ _jsx(motion.div,{style:{...squareStyle,width},onTap:onTap,whileTap:{scale:1.25,rotate:90,backgroundColor:"#07F"}})}));};Compleation_bar.defaultProps={text:"Tap"};// Learn More: https://www.framer.com/docs/property-controls/
addPropertyControls(Compleation_bar,{width:{title:"Width",type:ControlType.Number},onTap:{type:ControlType.EventHandler}});const containerStyle={display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"};const squareStyle={width:75,height:6,backgroundColor:"#ffffff",overflow:"visible",borderRadius:4};
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Compleation_bar","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Compleation_bar.map