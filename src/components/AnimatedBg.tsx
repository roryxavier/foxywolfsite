// src/components/AnimatedGradient.jsx

import { Component, type ReactNode } from "react";
import styles from "./AnimatedBg.module.css";

class AnimatedGradient extends Component<{
	children: ReactNode;
	fromColor: string;
	viaColor: string;
	toColor: string;
}> {
	static defaultProps = {
		fromColor: "from-orange-400",
		viaColor: "via-blue-500",
		toColor: "to-yellow-500",
	};

	render() {
		const {
			children, // Destructure the children prop
			fromColor,
			viaColor,
			toColor,
		} = this.props;

		return (
			<div className="h-screen w-screen relative">
				{/* BACKGROUND LAYER: Handles the animation and colors */}
				<div
					className={`
          absolute inset-0 
          bg-[length:400%_400%] 
          bg-gradient-to-r 
          ${fromColor} ${viaColor} ${toColor} 
          ${styles.gradientAnimation}  /* <-- The isolated class is applied here */
          -z-10
        `}
				/>

				{/* CONTENT LAYER: Renders whatever is passed as children */}
				<div>
					{children} {/* <-- Renders the children content here */}
				</div>
			</div>
		);
	}
}

export default AnimatedGradient;
