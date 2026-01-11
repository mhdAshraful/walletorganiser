import React from "react";
import { type CardUsage, type User } from "@/Types";
import CardDesign from "@/components/Dashboard/Carddesign";
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

	const cards: CardUsage[] = React.useMemo(() => {
		if (!user?.cards) return [];
		return user.cards.map((card) => ({ ...card, amount: 0 }));
	}, [user]);

	const filteredCards = React.useMemo(() => {
		switch (selectedFilters) {
			case "favourites":
				return cards.filter((card) => card.isFavorite);
			case "credit":
				return cards.filter((card) => card.type === "Credit");
			case "debit":
				return cards.filter((card) => card.type === "Debit");
			default:
				return cards;
		}
	}, [cards, selectedFilters]);

	return (
		<div>
			<h1 className="text-2xl">Cards</h1>
			<div>
				{(Object.keys(FILTERS) as FilterKey[]).map((key) => (
					<button
						key={key}
						className={cn(
							"px-6 py-2 m-2 rounded-3xl transition border border-border",
							selectedFilters === key
								? "bg-primary text-text-white"
								: "bg-accent text-text-primary hover:bg-chart-3 hover:text-white",
							className
						)}
						onClick={() => {
							setSelectedFilters(key);
						}}
					>
						{FILTERS[key]}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
				<div className="rounded-3xl bg-bg-tertiary border-2 border-dashed border-border text-sm text-muted-foreground">
					<div className="flex flex-col items-center justify-center p-6 h-full hover:cursor-pointer">
						<img
							src="addicon.svg"
							alt="Add Card Icon"
							className="w-12 h-12 mb-4"
						/>
						<span className="text-bg-brand text-2xl">Add Card</span>
					</div>
				</div>
				{filteredCards.length === 0 ? (
					<div className="col-span-full text-sm text-muted-foreground">
						No cards match this filter.
					</div>
				) : (
					<CardDesign uniqueCards={filteredCards} />
				)}
			</div>
		</div>
	);
}

export default CardPage;
