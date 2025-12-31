export type Card = {
	id: string;
	type: "Credit" | "Debit";
	brand: "Mastercard" | "VISA" | "DISCOVER"; // Add more brands if needed
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

export type DashboardStatus = {
	totalSplits: number;
	growthrate: number;
	totalEarnings: number;
	topCards: Card[]; // Reuses the Card export type
	topMerchants: TopMerchant[];
	recentOrders: RecentOrder[];
};

export type User = {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string; // Note: In real apps, never store plain passwords!
	image?: string;
	recoveryCode?: string;
	cards?: Card[];
	transactions?: Transaction[];
	dashboardStatus?: DashboardStatus;
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
