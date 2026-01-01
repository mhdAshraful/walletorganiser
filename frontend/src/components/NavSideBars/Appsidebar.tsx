import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "../ui/sidebar";

import SidebarHeadingComponent from "./SidebarHeadingComponent";
import SidebarContentComponent from "./SidebarContentComponent";
import SidebarFooterContent from "./SidebarFooterContent";

// React.ComponentProps<typeof Sidebar>

const AppSidebar = (props: {
	sidebarmenulist: { name: string; link: string; icon: string }[];
}) => {
	const { sidebarmenulist } = props;
	return (
		<Sidebar collapsible="icon" {...props}>
			{/* Sidebar Header */}
			<SidebarHeader>
				<SidebarHeadingComponent />
			</SidebarHeader>
			{/* Sidebar Menu Content */}
			<SidebarContent>
				<SidebarContentComponent items={sidebarmenulist} />
			</SidebarContent>
			{/* Sidebar Footer */}
			<SidebarFooter>
				<SidebarFooterContent />
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
