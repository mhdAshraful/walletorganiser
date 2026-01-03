export type Card = {
	id: string;
	type: "Credit" | "Debit";
	brand: "Mastercard" | "VISA" | "DISCOVER"; // Extend with more brands if needed
	lastFour: string;
	expiry: string; // Format: "MM/YY"
	isFavorite: boolean;
	name: string;
};

export type CardUsage = {
	cardLastFour: string;
	amount: number;
};

export type Transaction = {
	id: string;
	merchant: string;
	date: string; // ISO date string, e.g., "2025-12-20T12:00:00"
	currency: string; // Currency code like "AED", "USD", "AUD", etc.
	totalAmount: number;
	cardsUsed: CardUsage[];
	category: string; // e.g., 'food', 'travel', 'shopping', etc.
};

export type TopMerchant = {
	name: string;
	value: number;
	color: string;
};

export type RecentOrder = {
	id: string;
	cardLast4: string;
	currency: string;
	amount: number;
};

export type MonthlyChartData = {
	month: string; // e.g., "July", "August", ..., "December", "January"
	splits: number; // Number of split-payment transactions that month
	//totalTx?: number; // Optional: total transactions (if you want to show both)
};

export type TotalSplits = {
	total: number; // Total split transactions across all time (or visible period)
	monthlyData: MonthlyChartData[]; // Ordered: oldest → newest (July 2025 → January 2026)
};



export type DashboardStatus = {
	totalSplits: TotalSplits;
	growthrate: number;
	totalEarnings: number;
	topCards: Card[]; // Reuses the Card export type
	topMerchants: TopMerchant[];
	recentOrders: RecentOrder[];
};

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	image?: string;
	email: string;
	password: string; // Note: In real apps, never store plain passwords!
	recoveryCode: string;
	cards: Card[];
	transactions: Transaction[];
	dashboardStatus: DashboardStatus;
};

export type AuthResponse = {
	accessToken: string;
	refreshToken: string;
	user: {
		firstName: string;
		lastName: string;
		email: string;
	};
};
