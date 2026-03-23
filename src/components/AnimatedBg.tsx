// src/components/AnimatedGradient.jsx

import { Component } from "react";
import styles from "./AnimatedBg.module.scss";

class AnimatedGradient extends Component<{
	fromColor?: string;
	viaColor?: string;
	toColor?: string;
}> {
	render() {
		const {
			fromColor = "from-orange-400",
			viaColor = "via-blue-500",
			toColor = "to-yellow-500",
		} = this.props;

		return (
			<div className={`${styles["animated-bg"]} h-screen w-screen relative`}>
				<div
					className={`
						bg-size-[400%_400%] 
						bg-linear-to-r 
						${fromColor} ${viaColor} ${toColor} 
 						-z-10
					`}
				/>
			</div>
		);
	}
}

export default AnimatedGradient;
