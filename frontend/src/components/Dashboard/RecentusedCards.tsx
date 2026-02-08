import { type Transaction } from "@/Types";
import { type JSX } from "react";
import CardDesign from "./Carddesign";

type TransactionProps = {
	transactions?: Transaction[];
};

function RecentusedCards(props: TransactionProps): JSX.Element {
	const recentTrx = props.transactions?.filter((trx) => {
		const date = new Date((trx as any).createdAt ?? (trx as any).date);
		if (Number.isNaN(date.getTime())) return false;
		const month = date.getMonth(); // 0 = Jan, 11 = Dec
		const year = date.getFullYear();
		return (year === 2025 && month === 11) || (year === 2026 && month === 0);
	});

	console.log("cards", recentTrx);

	// flatten safely
	const flatCards = recentTrx?.flatMap((trx) => trx.cardsUsed ?? []) ?? [];
	console.log("cards used", flatCards);

	// remove duplicates by `id` (keeps the last occurrence)
	const uniqueCards = Array.from(
		new Map(flatCards.map((c) => [c.id, c])).values()
	);
	console.log("unique cards", uniqueCards);

	return <CardDesign uniqueCards={uniqueCards} />;
}

export default RecentusedCards;
