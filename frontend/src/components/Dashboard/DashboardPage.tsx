import DashboardHeader from "./DashboardHeader";
import type { User } from "@/Types";
import TotalsplitChart from "./Totalsplit";
import MostusedcardsChart from "./MostusedCards";
import Topmerchents from "./Topmerchents";
import AverageSplits from "./AverageSplits";
import RecentOrders from "./RecentOrders";
import RecentusedCards from "./RecentusedCards";
import CardDesign from "./Carddesign";

function DashboardPage() {
	const user: User = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user") || "null")
		: null;

	return (
		<div>
			<DashboardHeader
				firstName={user?.firstName}
				splitdata={user?.dashboardStatus.totalSplits}
			/>
			{/* Top Three charts */}
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
					totalmixedPayments={user?.dashboardStatus.totalSplits.total}
				/>
				<MostusedcardsChart
					topcards={user?.dashboardStatus.topCards}
					transactions={user?.transactions}
				/>
				<Topmerchents topmerchants={user?.dashboardStatus.topMerchants} />
			</div>
			{/* Main Charts (2) */}
			<div
				className="grid grid-cols-1 gap-4 p-4 lg:px-4
                        @xl/main:grid-cols-2
                        @5xl/main:grid-cols-2
                        *:data-[slot=card]:bg-liner-to-t
                        *:data-[slot=card]:from-primary/5
                        *:data-[slot=card]:to-card
                        dark:*:data-[slot=card]:bg-card
                        *:data-[slot=card]:shadow-xs
						
						"
			>
				<AverageSplits transactions={user?.transactions} />
				<RecentOrders transactions={user?.transactions} />
			</div>

			{/* Recently Used Cards */}
			<div>
				<h2 className="px-4 pt-4 text-lg font-semibold">
					Recently Used Cards
				</h2>
				<div
					className="grid grid-cols-2 gap-4 p-4 lg:px-4
								@xl/main:grid-cols-3
								@5xl/main:grid-cols-5
								"
				>
					<RecentusedCards transactions={user?.transactions} />
				</div>
			</div>
		</div>
	);
}

export default DashboardPage;
