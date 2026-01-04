import DashboardHeader from "./DashboardHeader";
import type { User } from "@/Types";
import TotalsplitChart from "./Totalsplit";
import MostusedcardsChart from "./MostusedCards";
import Topmerchents from "./Topmerchents";

function DashboardContent() {
	const user: User = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user") || "null")
		: null;

	return (
		<div>
			<DashboardHeader
				firstName={user?.firstName}
				numberofSplits={user?.dashboardStatus.totalSplits.total}
			/>
			<div
				className="grid grid-cols-1 gap-4 p-4 lg:px-4
                        @xl/main:grid-cols-2
                        @5xl/main:grid-cols-3
                        *:data-[slot=card]:bg-liner-to-t
                        *:data-[slot=card]:from-primary/5
                        *:data-[slot=card]:to-card
                        dark:*:data-[slot=card]:bg-card
                        *:data-[slot=card]:shadow-xs
						
						"
			>
				<TotalsplitChart
					totalsplit={user?.dashboardStatus.totalSplits}
					growthrate={user?.dashboardStatus.growthrate}
				/>
				<MostusedcardsChart
					topcards={user?.dashboardStatus.topCards}
					transactions={user?.transactions}
				/>
				<Topmerchents topmerchants={user?.dashboardStatus.topMerchants} />
			</div>
		</div>
	);
}

export default DashboardContent;
