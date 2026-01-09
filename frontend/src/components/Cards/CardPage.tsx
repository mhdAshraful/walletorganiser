import React from "react";
import { type User } from "@/Types";
import { cn } from "@/lib/utils";

const FILTERS = {
	all: "All",
	favourites: "Favourites",
	credit: "Credit",
	debit: "Debit",
};

type FilterKey = keyof typeof FILTERS;
function CardPage({ className }: { className?: string }) {
	const user: User = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user") || "null")
		: null;

	const [selectedFilters, setSelectedFilters] =
		React.useState<FilterKey>("all");

	return (
		<div>
			<h1 className="text-2xl">Cards</h1>
			<div>
				{(Object.keys(FILTERS) as FilterKey[]).map((key) => (
					<button
						key={key}
						className={cn(
							"px-4 py-2 m-2  rounded-2xl text-white bg-icon-brand hover:bg-icon-hover transition",
							selectedFilters === key
								? "bg-icon-brand"
								: "bg-icon-hover",
							className
						)}
						onClick={(e) => {
							/* Implement filter logic here */
							setSelectedFilters(
								e.currentTarget.textContent as FilterKey
							);
							console.log(e.currentTarget.textContent);
						}}
					>
						{FILTERS[key]}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4"></div>
		</div>
	);
}

export default CardPage;
