export interface MonthlyData {
	month: string;
	splits: number;
}

export interface GrowthResult {
	/** The growth multiplier (e.g., 2 means "2x more") */
	multiplier: number;
	/** The percentage change (e.g., 100 means "100% increase") */
	percentageChange: number;
	/** Human-readable description */
	description: string;
	/** Whether it's an increase, decrease, or no change */
	trend: "increase" | "decrease" | "unchanged";
}

/**
 * Calculates the growth rate between the last two months of split payments.
 *
 * Example:
 * - January: 5 splits, February: 10 splits
 * - Result: multiplier = 2, percentageChange = 100%, description = "2x increase"
 *
 * @param monthlyData - Array of monthly split data, ordered chronologically
 * @returns GrowthResult object with multiplier, percentage, and description
 */
export function calculateGrowthRate(monthlyData: MonthlyData[]): GrowthResult {
	// Need at least 2 months to compare
	if (monthlyData.length < 2) {
		return {
			multiplier: 1,
			percentageChange: 0,
			description: "Not enough data",
			trend: "unchanged",
		};
	}

	const previousMonth = monthlyData[monthlyData.length - 2];
	const currentMonth = monthlyData[monthlyData.length - 1];

	const prevSplits = previousMonth.splits;
	const currSplits = currentMonth.splits;

	// Handle edge cases
	if (prevSplits === 0 && currSplits === 0) {
		return {
			multiplier: 1,
			percentageChange: 0,
			description: "No change (0 → 0)",
			trend: "unchanged",
		};
	}

	if (prevSplits === 0) {
		return {
			multiplier: Infinity,
			percentageChange: Infinity,
			description: `∞ increase (0 → ${currSplits})`,
			trend: "increase",
		};
	}

	if (currSplits === 0) {
		return {
			multiplier: 0,
			percentageChange: -100,
			description: `100% decrease (${prevSplits} → 0)`,
			trend: "decrease",
		};
	}

	// Calculate growth
	const multiplier = currSplits / prevSplits;
	const percentageChange = ((currSplits - prevSplits) / prevSplits) * 100;

	// Determine trend and description
	let trend: "increase" | "decrease" | "unchanged";
	let description: string;

	if (multiplier > 1) {
		trend = "increase";
		description = `${multiplier.toFixed(
			1
		)}x increase (+${percentageChange.toFixed(1)}%)`;
	} else if (multiplier < 1) {
		trend = "decrease";
		const decreaseFactor = (1 / multiplier).toFixed(1);
		description = `${decreaseFactor}x decrease (${percentageChange.toFixed(
			1
		)}%)`;
	} else {
		trend = "unchanged";
		description = "No change";
	}

	return {
		multiplier,
		percentageChange,
		description,
		trend,
	};
}

/**
 * Formats the growth rate for display in UI
 *
 * @param monthlyData - Array of monthly split data
 * @returns A formatted string like "+100%" or "-50%" or "2x"
 */
export function formatGrowthRate(
	monthlyData: MonthlyData[],
	format: "percentage" | "multiplier" = "percentage"
): string {
	const result = calculateGrowthRate(monthlyData);

	if (result.percentageChange === Infinity) return "+∞%";
	if (result.percentageChange === -Infinity) return "-∞%";

	if (format === "multiplier") {
		if (result.trend === "unchanged") return "1x";
		return `${result.multiplier.toFixed(1)}x`;
	}

	// percentage format
	const sign = result.percentageChange >= 0 ? "+" : "";
	return `${sign}${result.percentageChange.toFixed(1)}%`;
}
