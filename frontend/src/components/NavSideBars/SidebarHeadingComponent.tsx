import { NavLink } from "react-router";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function SidebarHeadingComponent() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton size="sm" asChild>
					<NavLink to="/">
						<img
							src="logo_icon.svg"
							alt="CreditPool Logo"
							className="w-6 h-6"
						/>
						<div>
							<p className="font-normal text-xl">CreditPool</p>
						</div>
					</NavLink>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

export default SidebarHeadingComponent;
