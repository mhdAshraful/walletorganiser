import React from "react";
import { Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";

export const description = "A pie chart with no separator";

// const chartData = [
// 	{ browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
// 	{ browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// 	{ browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
// 	{ browser: "edge", visitors: 173, fill: "var(--color-edge)" },
// 	{ browser: "other", visitors: 90, fill: "var(--color-other)" },
// ];

const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "var(--chart-1)",
	},
	safari: {
		label: "Safari",
		color: "var(--chart-2)",
	},
	firefox: {
		label: "Firefox",
		color: "var(--chart-3)",
	},
	edge: {
		label: "Edge",
		color: "var(--chart-4)",
	},
	other: {
		label: "Other",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

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
