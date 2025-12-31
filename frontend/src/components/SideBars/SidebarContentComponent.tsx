import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
} from "../ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../ui/collapsible";

const SidebarContentComponent = ({
	items,
}: {
	items: { name: string; link: string; icon: string }[];
}) => {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.name} asChild className="icon/collapse">
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton tooltip={item.name}>
									{item.icon && (
										<img src={item.icon} alt={item.name} />
									)}
									<span>{item.name}</span>
								</SidebarMenuButton>
							</CollapsibleTrigger>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default SidebarContentComponent;
