import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import AppSidebar from "./SideBars/Appsidebar";

const Header = () => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center border-b gap-2 transition-[width, height] ease-linear group-has-data[collapsible=icon]/sidebar-wrapper:h1-2">
					<div className="flex gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
					</div>
				</header>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default Header;
