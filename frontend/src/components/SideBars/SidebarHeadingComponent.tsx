import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function SidebarHeadingComponent() {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<SidebarMenuButton size="sm" asChild>
					<a href="/" className="">
						<img
							src="logo_icon.svg"
							alt="CreditPool Logo"
							className="w-6 h-6"
						/>
						<div>
							<p className="font-normal text-xl">CreditPool</p>
						</div>
					</a>
				</SidebarMenuButton>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

export default SidebarHeadingComponent;
