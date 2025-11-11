// src/components/AnimatedGradient.jsx

import styles from "../AnimatedGradient.module.css";
import { Component } from "react";

class AnimatedGradient extends Component<{
	children: any;
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
		let {
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
