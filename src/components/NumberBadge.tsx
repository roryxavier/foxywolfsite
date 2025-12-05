export const NumberBadge = (props: { text: string | number }) => {
	return (
		<div
			className={`
    // 1. Base Styles (Mobile first - up to 768px)
    w-7 h-7
    text-xl // Smallest text size
    
    // 2. Medium Styles (Starts at 768px - 'md' breakpoint)
    md:w-10 md:h-10
    md:text-xl
    
    // 3. Large Styles (Starts at 1024px - 'lg' breakpoint)
    lg:w-12 lg:h-12
    lg:text-2xl
    
    // Shared styles
    rounded
    shadow-md
    flex items-center justify-center
    text-white
    font-bold
    text-center
  `}
			style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
		>
			{props.text}
		</div>
	);
};
