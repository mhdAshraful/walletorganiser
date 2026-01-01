import {
	Sidebar,
	SidebarHeader,
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "./ui/sidebar";
import AppSidebar from "./NavSideBars/Appsidebar";

import { Outlet } from "react-router";
import TopMenu from "./NavSideBars/TopMenu";

const Navigation = () => {
	const sidebarMenuList = [
		{ name: "Dashboard", link: "/dashboard", icon: "dashboard_icon.svg" },
		{ name: "Cards", link: "/cards", icon: "card_icon.svg" },
		{
			name: "Transactions",
			link: "/transactions",
			icon: "transaction_icon.svg",
		},
		{
			name: "Help & Support",
			link: "/help-support",
			icon: "support_icon.svg",
		},
	];

	const topMenuList = [
		{ name: "Settings", link: "/settings", icon: "settings_icon.svg" },
		{
			name: "Notifications",
			link: "/notifications",
			icon: "notification_icon.svg",
		},
		{ name: "Profile", link: "/userprofile", icon: "profile_icon.svg" },
	];

	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 50)",
					"--header-height": "calc(var(--spacing) * 70)",
				} as React.CSSProperties
			}
		>
			<AppSidebar sidebarmenulist={sidebarMenuList} />

			<SidebarInset>
				<header className="flex relative h-16 shrink-40 items-center justify-between px-4 border-b gap-2 transition-[width, height] ease-linear group-has-data[collapsible=icon]/sidebar-wrapper:h12">
					<div className="flex gap-2">
						<SidebarTrigger className="-ml-1" />
					</div>
					<TopMenu topMenuList={topMenuList} />
				</header>
				<div className="flex flex-1 flex-col ">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4  p-4 md:gap-6 md:py-6">
							<main>
								<Outlet />
							</main>
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default Navigation;
