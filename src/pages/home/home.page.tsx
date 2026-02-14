import AnimatedBg from "@/components/AnimatedBg.tsx";

export function HomePage() {
	return (
		<AnimatedBg>
			<title>Foxes Are Sleeping</title>
			<div
				className="
      min-h-screen // Make the div take up the full viewport height
      flex           // Enable Flexbox
      items-center   // Align items vertically (middle)
      justify-center // Align items horizontally (middle)
      p-4            // Padding for safety on small screens
    "
			>
				<p
					className="
        text-4xl      // Large text size
        font-bold     // Bold font weight
        text-gray-800 // Dark text color
        text-center   // Ensure text is centered inside the paragraph box
      "
				>
					<span className="text-white">Foxes Are Sleeping</span>
					<span>💛🧡</span>
				</p>
			</div>
		</AnimatedBg>
	);
}
