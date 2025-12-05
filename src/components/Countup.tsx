import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { NumberBadge } from "@/components/NumberBadge.tsx";

export const Countup = (props: {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
}) => {
	const [elapsed, setElapsed] = useState<{
		M: number;
		Y: number;
		D: number;
		H: number;
		m: number;
		S: number;
	}>({
		Y: 0,
		M: 0,
		D: 0,
		H: 0,
		m: 0,
		S: 0,
	});
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const updateTime = () => {
			const timeElapsed = calculateTimeElapsed(
				props.year,
				props.month,
				props.day,
				props.hour,
				props.minute,
			);
			setElapsed(timeElapsed);

			// Ensure the component shows after the first update
			if (!isLoaded) {
				setIsLoaded(true);
			}
		};
		updateTime();

		const intervalId = setInterval(updateTime, 1000);

		// CLEANUP
		return () => clearInterval(intervalId);
	}, [props.year, props.month, props.day, props.hour, props.minute, isLoaded]);

	// --- New Tailwind Logic Starts Here ---

	// 1. Define the base and transition classes
	// Base classes ensure a smooth transition over 500ms
	const baseClasses = "transition-opacity duration-1000 ease-in-out";

	// 2. Conditional opacity class:
	// - If isLoaded is true, opacity is 100 (visible).
	// - If isLoaded is false (before the first update), opacity is 0 (hidden).
	const opacityClass = isLoaded ? "opacity-100" : "opacity-0";

	// 3. Combine classes
	const finalClasses = `${baseClasses} ${opacityClass} flex items-center text-xl`;

	return (
		<div
			className={`flex flex-row gap-1 justify-center align-middle ${finalClasses}`}
		>
			<NumberBadge text={elapsed.Y} />
			<NumberBadge text={"Y"} />
			<NumberBadge text={elapsed.M} />
			<NumberBadge text={"M"} />
			<NumberBadge text={elapsed.D} />
			<NumberBadge text={"D"} />
			<NumberBadge text={elapsed.H} />
			<NumberBadge text={"H"} />
			<NumberBadge text={elapsed.m} />
			<NumberBadge text={"M"} />
			<NumberBadge text={elapsed.S} />
			<NumberBadge text={"S"} />
		</div>
	);
};

const calculateTimeElapsed = (
	year: number,
	month: number,
	day: number,
	hour: number,
	minute: number,
) => {
	const start = DateTime.local(year, month, day, hour, minute);
	const end = DateTime.now();
	const diff = end.diff(start, [
		"years",
		"months",
		"days",
		"hours",
		"minutes",
		"seconds",
	]);
	return {
		Y: diff.years,
		M: diff.months,
		D: diff.days,
		H: diff.hours,
		m: diff.minutes,
		S: Math.round(diff.seconds),
	};
};
