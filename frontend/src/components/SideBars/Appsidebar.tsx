import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "../ui/sidebar";

import SidebarHeadingComponent from "./SidebarHeadingComponent";
import SidebarContentComponent from "./SidebarContentComponent";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
	const menuData = [
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
	return (
		<Sidebar collapsible="icon" {...props}>
			{/* Sidebar Header */}
			<SidebarHeader>
				<SidebarHeadingComponent />
			</SidebarHeader>
			{/* Sidebar Menu Content */}
			<SidebarContent>
				<SidebarContentComponent items={menuData} />
			</SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
