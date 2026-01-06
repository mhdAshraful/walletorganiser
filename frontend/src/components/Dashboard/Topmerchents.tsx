import React from "react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";

export const description = "A pie chart with no separator";

type TopMerchentProps = {
	topmerchants: {
		name: string;
		value: number;
		fill: string;
	}[];
};

function Topmerchents(props: TopMerchentProps): React.JSX.Element {
	const { topmerchants } = props;

	let chartData = topmerchants.map((merchant) => ({
		name: merchant.name,
		count: merchant.value,
		fill: merchant.fill,
	}));

	const chartConfig = {
		"The Artisan's Nook": {
			label: "The Artisan's Nook",
			color: "#6366f1",
		},
		"Chic Finds": {
			label: "Chic Finds",
			color: "#a855f7",
		},
		"Modern Marvels": {
			label: "Modern Marvels",
			color: "#0ea5e9",
		},
		Amazon: {
			label: "Amazon",
			color: "#22c55e",
		},
		Grameenphone: {
			label: "Grameenphone",
			color: "#eab308",
		},
	} satisfies ChartConfig;
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center ">
				<CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-xl">
					Top Merchants
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-row items-center justify-between pr-0 mr-0">
				<ChartContainer
					config={chartConfig}
					className="flex flex-row  aspect-square w-[50%] max-w-62.5"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey="count"
							nameKey="name"
							stroke="0"
						/>
					</PieChart>
				</ChartContainer>
				<CardContent className="w-[50%]">
					{chartData.map((entry, index) => (
						<div key={`item-${index}`}>
							<div
								className="inline-block h-2 w-2 rounded-full"
								style={{ backgroundColor: entry.fill }}
							/>
							<span className="ml-2 text-[12px]">{entry.name}</span>
							<span className="ml-auto tabular-nums text-[12px]">
								{" "}
								{entry.count}%
							</span>
						</div>
					))}
				</CardContent>
			</CardContent>
		</Card>
	);
}

export default Topmerchents;
