import type { RecentOrder } from "@/Types";
import { type JSX } from "react";
import CardDesign from "./Carddesign";

function RecentusedCards(props: RecentOrder): JSX.Element {
	const recentcards = props;

	return <CardDesign />;
}

export default RecentusedCards;
