import type { TotalSplits } from "@/Types";

export const gettotalSplitsCurrentMonth = (obj: TotalSplits) => {
	const now = new Date();
	const currentMonthYear =
		now.toLocaleString("default", { month: "short" }) +
		now.getFullYear().toString().slice(-2); // gives "Jan26"

	// filter current monts data
	const currentmonthsData = obj.monthlyData.find(
		(data) => data.month.toLowerCase() === currentMonthYear.toLowerCase()
	);
	// console.log("You got splits for current month:", currentmonthsData?.month);

	return currentmonthsData?.splits || 0;
};
