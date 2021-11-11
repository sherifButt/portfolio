import { useRandomID } from "https://framer.com/m/framer/randomID.js@0.1.0"; import { Icon as Phosphor } from "https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/RBQbVwgqpb3w8EY7NXnQ/Phosphor.js"; import { Twemoji } from "https://framerusercontent.com/modules/xwmmLiR3CC4FXXYz8XsN/AbrB6v4GX7RB74YbIvcq/Twemoji.js"; import * as React from "react"; import { motion , addPropertyControls , cx , useVariantState , useAddVariantProps , useActiveVariantCallback , withCSS , LayoutGroup , ControlType , transformTemplate , Text as Text1 , Stack } from "framer"; const cycleOrder = ["fRkcQSg3k", "GaXDNa8Wl"]; const variantClassNames = {fRkcQSg3k: "framer-v-wz5l4v", GaXDNa8Wl: "framer-v-15mt7sv"}; const humanReadableVariantMap = {"Variant 1": "fRkcQSg3k", "Variant 2": "GaXDNa8Wl"}; const transitions = {default: {type: "spring", ease: [0.44, 0, 0.56, 1], duration: 0.3, delay: 0, stiffness: 400, damping: 30, mass: 1}}; const Component = React.forwardRef(function ({ style, className, layoutId, width, height, variant: outerVariant = "fRkcQSg3k", title: PVJ9AktTj = "Row", content: Dz3CrV_sb = "Draw, move and edit layers within any component variant.", emoji: XrVkAMy_F = "💎", ...restProps }, ref) { const outerVariantId = humanReadableVariantMap[outerVariant]; const variant = outerVariantId || outerVariant; const { variants, baseVariant, gestureVariant, classNames, transition, setVariant, setGestureState } = useVariantState({defaultVariant: "fRkcQSg3k", variant, transitions, variantClassNames, cycleOrder}); const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant); const onTapwz5l4v = activeVariantCallback(async (...args) => { setVariant("GaXDNa8Wl"); }); const onTap15mt7sv = activeVariantCallback(async (...args) => { setVariant("fRkcQSg3k"); }); const variantProps = React.useMemo(() => { return ({GaXDNa8Wl: {fRkcQSg3k: {onTap: onTap15mt7sv, gap: 0, center: false, "data-framer-name": "Variant 2", "data-highlight": true, __contentWrapperStyle: {width: "100%", height: "auto", padding: "0px 0px 30px 0px"}}}}); }, []); const addVariantProps = useAddVariantProps(baseVariant, gestureVariant, variantProps); const isDisplayed1 = () => { if (baseVariant === "GaXDNa8Wl") { return true }; return false; }; const defaultLayoutId = useRandomID(); return (React.createElement(LayoutGroup, {id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId}, React.createElement(motion.div, {initial: variant, animate: variants, className: cx("framer-kr5nm", classNames), style: {display: "contents"}, onHoverStart: () => { return setGestureState({isHovered: true}); }, onHoverEnd: () => { return setGestureState({isHovered: false}); }, onTapStart: () => { return setGestureState({isPressed: true}); }, onTap: () => { return setGestureState({isPressed: false}); }, onTapCancel: () => { return setGestureState({isPressed: false}); }}, React.createElement(Stack, Object.assign({}, restProps, {style: {borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopRightRadius: 15, borderTopLeftRadius: 15, backgroundColor: "rgb(255, 255, 255)", rotate: 0, ...style}, layoutId: "fRkcQSg3k", className: cx("framer-wz5l4v", className), direction: "vertical", distribution: "start", alignment: "center", gap: 0, __fromCanvasComponent: true, __contentWrapperStyle: {width: "100%", height: "auto", padding: "0px 0px 0px 0px"}, center: false, "data-highlight": true, "data-framer-name": "Variant 1", onTap: onTapwz5l4v, transition, ref}, addVariantProps("fRkcQSg3k")), React.createElement(Stack, Object.assign({style: {borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, rotate: 0}, layoutId: "gyXfxqXOe", className: "framer-n1jk2b", background: null, direction: "horizontal", distribution: "start", alignment: "center", gap: 10, __fromCanvasComponent: true, __contentWrapperStyle: {width: "100%", height: "100%", padding: "20px 20px 20px 20px"}, center: false, "data-framer-name": "Variant 1", transition}, addVariantProps("gyXfxqXOe")), React.createElement(motion.div, Object.assign({style: {rotate: -90}, layoutId: "yIaHppDA5-container", className: "framer-ynbf2u-container", transformTemplate: transformTemplate(false), variants: {GaXDNa8Wl: {rotate: 0}}, transition}, addVariantProps("yIaHppDA5-container")), React.createElement(Phosphor, Object.assign({width: "100%", height: "100%", layoutId: "yIaHppDA5", id: "yIaHppDA5", selectByList: true, iconSelection: "CaretDown", iconSearch: "House", color: "rgb(153, 153, 153)", weight: "bold", mirrored: false, transition}, addVariantProps("yIaHppDA5")))), React.createElement(Text1, Object.assign({style: {rotate: 0}, withExternalLayout: true, verticalAlignment: "top", __fromCanvasComponent: true, alignment: "left", fonts: ["GF;DM Sans-700"], layoutId: "xZZ2RD5Q_", className: "framer-13i1mpq", rawHTML: "<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style='-webkit-text-fill-color: #333; font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-style: normal; font-weight: 700; letter-spacing: 0px; line-height: 1; text-align: left'>Row</span><br></div></div>", text: PVJ9AktTj, transition}, addVariantProps("xZZ2RD5Q_"))), React.createElement(motion.div, Object.assign({style: {rotate: 0}, layoutId: "SiguEr3d0", className: "framer-a21tug", background: null, transition}, addVariantProps("SiguEr3d0"))), React.createElement(motion.div, Object.assign({style: {rotate: 0}, layoutId: "eCuDptxIY-container", className: "framer-8otfus-container", transformTemplate: transformTemplate(false), transition}, addVariantProps("eCuDptxIY-container")), React.createElement(Twemoji, Object.assign({width: "100%", height: "100%", layoutId: "eCuDptxIY", id: "eCuDptxIY", isSelection: false, selection: "🔥", search: XrVkAMy_F, style: {width: "100%", height: "100%"}, transition}, addVariantProps("eCuDptxIY"))))), isDisplayed1() && React.createElement(Stack, Object.assign({style: {opacity: 0, rotate: 0}, layoutId: "IAs8a4bYj", className: "framer-ur5swn", background: null, direction: "horizontal", distribution: "start", alignment: "center", gap: 0, __fromCanvasComponent: true, __contentWrapperStyle: {width: "100%", height: "auto", padding: "0px 60px 0px 54px"}, center: false, variants: {GaXDNa8Wl: {opacity: 1}}, transition}, addVariantProps("IAs8a4bYj")), React.createElement(Text1, Object.assign({style: {rotate: 0}, withExternalLayout: true, verticalAlignment: "top", __fromCanvasComponent: true, alignment: "left", fonts: ["GF;DM Sans-regular"], layoutId: "lq4lZbLhh", className: "framer-1w9vj2p", rawHTML: "<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style='-webkit-text-fill-color: #999; font-family: &quot;DM Sans&quot;, sans-serif; font-size: 16px; font-style: normal; font-weight: 400; letter-spacing: 0px; line-height: 1.4; text-align: left'>Draw, move and edit layers within any component variant.</span><br></div></div>", text: Dz3CrV_sb, transition}, addVariantProps("lq4lZbLhh")))))))); }); const css = [".framer-kr5nm [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}", ".framer-kr5nm .framer-wz5l4v {position: relative; cursor: pointer; overflow: hidden; width: 300px; height: min-content;}", ".framer-kr5nm .framer-n1jk2b {position: relative; overflow: visible; width: 100%; height: 80px; flex: none;}", ".framer-kr5nm .framer-ynbf2u-container {position: relative; width: 24px; height: 24px; flex: none;}", ".framer-kr5nm .framer-13i1mpq {position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre;}", ".framer-kr5nm .framer-a21tug {position: relative; overflow: visible; width: 1px; height: 20px; flex: 1 0 0px;}", ".framer-kr5nm .framer-8otfus-container {position: relative; width: 24px; height: 24px; flex: none;}", ".framer-kr5nm .framer-ur5swn {position: relative; overflow: visible; width: 100%; height: min-content; flex: none;}", ".framer-kr5nm .framer-1w9vj2p {position: relative; overflow: hidden; width: 1px; height: auto; flex: 1 0 0px; white-space: pre-wrap; word-wrap: break-word; word-break: break-word;}", ".framer-kr5nm.framer-v-15mt7sv .framer-wz5l4v {cursor: pointer; width: 300px; height: min-content;}"]; const FramernEYUMz4Dl = withCSS(Component, css); export default FramernEYUMz4Dl; FramernEYUMz4Dl.displayName = "Row"; FramernEYUMz4Dl.defaultProps = {width: 300, height: 80}; addPropertyControls(FramernEYUMz4Dl, {variant: {type: ControlType.Enum, title: "Variant", options: ["fRkcQSg3k", "GaXDNa8Wl"], optionTitles: ["Variant 1", "Variant 2"]}, PVJ9AktTj: {type: ControlType.String, title: "Title", defaultValue: "Row", displayTextArea: false}, Dz3CrV_sb: {type: ControlType.String, title: "Content", defaultValue: "Draw, move and edit layers within any component variant.", displayTextArea: true}, XrVkAMy_F: {type: ControlType.String, title: "Emoji", defaultValue: "💎", placeholder: "Paste Emoji…"}}); export const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerIntrinsicHeight: "80", framerSupportedLayoutWidth: "any", framerSupportedLayoutHeight: "any", framerVariables: "{\"PVJ9AktTj\": \"title\", \"Dz3CrV_sb\": \"content\", \"XrVkAMy_F\": \"emoji\"}", framerCanvasComponentVariantDetails: "{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"auto\"]}, \"GaXDNa8Wl\": {\"layout\": [\"fixed\", \"auto\"]}}}", framerIntrinsicWidth: "300"}}}}; 