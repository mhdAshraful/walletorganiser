import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
	CardContent,
} from "../ui/card";
import type { TotalSplits } from "@/Types";

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "../ui/chart";

type TotalsplitProps = {
	totalsplit: TotalSplits;
	growthrate?: number;
	totalmixedPayments?: number;
};

export default function TotalsplitChart(
	props: TotalsplitProps
): React.JSX.Element {
	const { totalsplit } = props;

	const chartData = totalsplit.monthlyData;
	const chartConfig = {
		splits: {
			label: "Transactions",
			color: "var(--chart-5)",
		},
	} satisfies ChartConfig;

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle className="flex flex-row justify-between font-semibold tabular-nums @[250px]/card:text-lg">
					<span>Total splits</span>
					<span>{props.totalmixedPayments}</span>
				</CardTitle>
				<CardDescription>
					{props.growthrate}% up from last month{" "}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={10}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={true}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Line
							dataKey="splits"
							type="natural"
							stroke="var(--chart-5)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
