// Auto-generated by Framer for compatibility with Framer Store packages.
import * as React from "react";
if (typeof window === "undefined" || !window.__framer_importFromPackage) {
	throw Error("Framer Store package @framer/lintonye.parallax/ParallaxScroll.js cannot be used outside of Framer");
}
let CurrentParallaxScroll = window.__framer_importFromPackage(
	"@framer/lintonye.parallax/ParallaxScroll.js",
	"ParallaxScroll",
	(newValue) => {
		CurrentParallaxScroll = newValue;
	}
);
export const ParallaxScroll = React.forwardRef(function ParallaxScroll(props, ref) {
	return React.createElement(CurrentParallaxScroll, { ...props, ref });
});