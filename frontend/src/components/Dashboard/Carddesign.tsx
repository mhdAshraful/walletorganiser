import React from "react";
import { cn } from "@/lib/utils";

function CardDesign() {
	// palette of six Tailwind background class combinations
	const COLORS = [
		"bg-gradient-to-t from-blue-800 to-indigo-900 text-white",
		"bg-gradient-to-r from-emerald-500 to-emerald-900 text-white",
		"bg-gradient-to-t from-stone-500 to-stone-700 text-white",
		"bg-gradient-to-r from-indigo-500 to-violet-600 text-white",
		"bg-gradient-to-b from-slate-300 to-slate-500 text-white",
		"bg-gradient-to-r from-emerald-500 to-emerald-900 text-white",
	];

	const color = COLORS[Math.floor(Math.random() * COLORS.length)];

	return (
		<CardFrame
			className="flex flex-col justify-between p-4"
			color={color}
			brand="discover"
			exp="12/24"
			lastFour="1234"
		/>
	);
}

export default CardDesign;

export const CardFrame = ({
	className,
	color,
	brand,
	exp,
	lastFour,
	...rest
}: React.ComponentProps<"div"> & {
	color: string;
	brand: string;
	exp: string;
	lastFour: string;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl border relative overflow-hidden aspect-square",
				color,
				className
			)}
			{...rest}
		>
			{/* SVG overlay layer (multiply blend with gradient below) */}
			<div
				className="absolute inset-0 z-20 "
				style={{
					backgroundImage: "url(/overlayMiltiplier.svg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			/>

			{/* Content */}
			<div className="relative z-10 flex justify-between items-start mb-4">
				<div className="flex items-center gap-2">
					{/* Brand icon */}
					{(() => {
						const b = (brand || "").toLowerCase();
						const src = b.includes("master")
							? "/cardMaster.svg"
							: b.includes("visa")
							? "/cardVISA.svg"
							: b.includes("discover")
							? "/cardDiscover.svg"
							: undefined;
						return src ? (
							<img
								src={src}
								alt={brand}
								className="h-6 lg:h-10 w-auto"
							/>
						) : (
							<div className="text-sm font-medium">{brand}</div>
						);
					})()}
				</div>
			</div>
			<div className="flex flex-col gap-1 items-start text-xs md:text-sm lg:text-xl lg:font-medium">
				<div>**** {lastFour}</div>
				<div className="relative z-10">Exp: {exp}</div>
			</div>
		</div>
	);
};
