import { logout } from "@/store/authStore";
import React from "react";
import { useNavigate } from "react-router";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Collapsible } from "../ui/collapsible";

function SidebarFooterContent(): React.JSX.Element {
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login", { replace: true });
	};

	return (
		<SidebarMenu>
			<Collapsible asChild className="icon/collapse">
				<SidebarMenuItem className="w-full flex items-center text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100">
					<SidebarMenuButton onClick={handleLogout}>
						<img
							src="logout_icon.svg"
							alt="Logout Icon"
							className="w-6 h-6 mr-0"
						/>
						<span>Logout</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</Collapsible>
		</SidebarMenu>
	);
}

export default SidebarFooterContent;
