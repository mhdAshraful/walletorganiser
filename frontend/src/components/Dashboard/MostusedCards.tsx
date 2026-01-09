import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "../ui/chart";
import type { MostusedCards, Transaction } from "@/Types";

type UsedcardProps = {
	topcards: MostusedCards[];
	transactions: Transaction[];
};

export default function MostusedcardsChart(
	props: UsedcardProps
): React.JSX.Element {
	// console.log("topcards:", props.topcards);
	// console.log("transactions:", props.transactions);
	// console.log(
	// 	"First transaction cardsUsed:",
	// 	props.transactions?.[0]?.cardsUsed
	// );

	// console.log(
	// 	"topcards lastFour values:",
	// 	props.topcards?.map((c) => c.lastFour)
	// );
	// console.log("All unique lastFour in transactions:", [
	// 	...new Set(
	// 		props.transactions?.flatMap((tx) =>
	// 			tx.cardsUsed.map((c) => c.lastFour)
	// 		)
	// 	),
	// ]);

	// const chartData = props.topcards.map((card) => ({
	// 	brand: card.brand,
	// 	lastFour: card.lastFour,
	// 	usageCount: props.transactions.filter((tx) =>
	// 		tx.cardsUsed.some((c) => c.lastFour === card.lastFour)
	// 	).length,
	// }));

	const chartData = props.topcards.map((card) => {
		const matchingTxs = props.transactions.filter((tx) =>
			tx.cardsUsed.some((c) => c.lastFour === card.lastFour)
		);
		// console.log(
		// 	`Card ${card.lastFour}: found ${matchingTxs.length} transactions`,
		// 	matchingTxs
		// );

		return {
			brand: card.brand + " ****" + card.lastFour,
			lastFour: card.lastFour,
			usageCount: matchingTxs.length,
		};
	});

	const chartConfig = {
		brand: {
			label: "Brand",
			color: "var(--chart-5)",
		},
		usageCount: {
			label: "Usage Count",
			color: "var(--chart-3)",
		},
	} satisfies ChartConfig;

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle className="flex flex-row justify-between text-xl font-semibold tabular-nums @[250px]/card:text-xl">
					<span>Most Used Cards</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							right: 16,
						}}
					>
						<CartesianGrid horizontal={false} />
						<XAxis
							dataKey="usageCount"
							type="number"
							axisLine={false}
							tickLine={false}
						/>
						<YAxis
							dataKey="brand"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 6)}
						/>
						<Bar
							dataKey="usageCount"
							fill="var(--color-chart-5)"
							activeBar={{ fill: "var(--chart-3)" }}
							radius={6}
							barSize={40}
						>
							<LabelList dataKey="usageCount" position="right" />
						</Bar>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent />}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
