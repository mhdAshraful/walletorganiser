// import React from "react";
// import { type User } from "../Types";

import { isAuthenticated } from "@/store/authStore";
import type { User } from "@/Types";
import { NavLink } from "react-router";

/***
 * Settings
 * Notifications
 * Profile
 */

function TopMenu(props: {
	topMenuList: { name: string; link: string; icon: string }[];
}): React.JSX.Element {
	const { topMenuList } = props;
	let user: User | null = null;
	const isAuthorized = isAuthenticated();
	if (!isAuthorized) {
		return <></>;
	} else {
		user = JSON.parse(localStorage.getItem("user") || "null");
	}

	return (
		<div className="flex flex-row">
			<NavLink to={topMenuList[0].link} className="w-6 h-6 mr-4">
				<img
					src={topMenuList[0].icon}
					alt={`${topMenuList[0].name} Icon`}
					className="w-6 h-6 mr-2"
				/>
			</NavLink>
			<NavLink to={topMenuList[1].link} className="w-6 h-6 mr-4">
				<img
					src={topMenuList[1].icon}
					alt={`${topMenuList[1].name} Icon`}
					className="w-6 h-6 mr-2"
				/>
			</NavLink>
			<NavLink
				to={topMenuList[2].link}
				className="h-6 mr-4 flex flex-row items-center"
			>
				<img
					src={topMenuList[2].icon}
					alt={`${topMenuList[2].name} Icon`}
					className="w-6 h-6 mr-2"
				/>
				<p>{user?.firstName}</p>
			</NavLink>
		</div>
	);
}

export default TopMenu;
