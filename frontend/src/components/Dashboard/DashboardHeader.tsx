import { gettotalSplitsCurrentMonth } from "@/lib/SplitCalculations";
import type { TotalSplits } from "@/Types";
import React from "react";
type DashboardHeaderProps = {
	firstName: string;
	splitdata: TotalSplits;
};
function DashboardHeader({
	firstName,
	splitdata,
}: DashboardHeaderProps): React.JSX.Element {
	return (
		<div>
			<h1 className="text-pretty font-semibold text-[24px] md:text-[32px]">
				Hey, {firstName}
			</h1>
			<p className="text-slate-600">
				You have completed{" "}
				{(gettotalSplitsCurrentMonth(splitdata) ?? 0) > 1
					? gettotalSplitsCurrentMonth(splitdata) + " splits"
					: (gettotalSplitsCurrentMonth(splitdata) ?? 0) + " split"}{" "}
				this month! Make the most out of your cards.
			</p>
		</div>
	);
}

export default DashboardHeader;
