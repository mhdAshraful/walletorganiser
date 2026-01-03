import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { NavLink } from "react-router";

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
									<NavLink
										to={item.link}
										className="flex items-center gap-2"
									>
										{item.icon && (
											<img src={item.icon} alt={item.name} />
										)}
										<span>{item.name}</span>
									</NavLink>
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
