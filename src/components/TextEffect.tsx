import { useEffect, useState } from "react";

export const TextEffect = (props: {
	text: string;
	delay: number;
	className: string;
}) => {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < props.text.length) {
			const timeout = setTimeout(() => {
				setCurrentText((prevText) => prevText + props.text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, props.delay);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, props.delay, props.text]);
	return <h2 className={props.className}>{currentText}</h2>;
};
