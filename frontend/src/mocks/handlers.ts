import { http, HttpResponse } from "msw";

/**
 * Mock Database. Resets when user refreshes the page.
 */

// DefaultUser
const MOCK_USER = {
	id: "user_01",
	name: "Administrator",
	email: "admin@example.com",
	password: "password01",
	recoveryCode: "123456",
};

let cardsDB = [
	{
		id: "card_01",
		type: "Visa",
		cardLast4: "4912",
		brand: "Debit",
		expiry: "12/24",
		usage: 143,
	},
	{
		id: "card_02",
		type: "Mastercard",
		cardLast4: "3746",
		brand: "Credit",
		expiry: "2/26",
		usage: 443,
	},
	{
		id: "card_03",
		type: "Visa",
		cardLast4: "6420",
		brand: "Debit",
		expiry: "1/27",
		usage: 230,
	},
];

const DASHBOARD_STATUS = {
	totalSplits: 4,
	groth: 4,
	totalEarnings: 12450,
	topMerchants: [
		{ name: "The Artisan's Nook", value: 37, color: "#6366f1" },
		{ name: "Chic Finds", value: 26, color: "#a855f7" },
		{ name: "Modern Marvels", value: 21, color: "#0ea5e9" },
		{ name: "Amazon", value: 9, color: "#22c55e" },
		{ name: "Grameenphone", value: 7, color: "#eab308" },
	],
	recentOrders: [
		{ id: "ORD-7X8Y9Z0A", cardLast4: "4912", currency: "AED", amount: 215 },
		{ id: "ORD-7X8Y9Z0B", cardLast4: "3746", currency: "AED", amount: 289 },
		{ id: "ORD-7X8Y9Z0C", cardLast4: "6420", currency: "AED", amount: 456 },
	],
};
