import React from "react";
type DashboardHeaderProps = {
	firstName: string;
	numberofSplits?: number;
};
function DashboardHeader({
	firstName,
	numberofSplits,
}: DashboardHeaderProps): React.JSX.Element {
	return (
		<div>
			<h1 className="text-pretty font-semibold text-[24px] md:text-[32px]">
				Hey, {firstName}
			</h1>
			<p className="text-slate-600">
				You have completed{" "}
				{(numberofSplits ?? 0) > 1
					? numberofSplits + " splits"
					: (numberofSplits ?? 0) + " split"}{" "}
				this month! Make the most out of your cards.
			</p>
		</div>
	);
}

export default DashboardHeader;
