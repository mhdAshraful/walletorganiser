// This is to show in dummy UI
export const MOCK_USER = {
	id: "user_01",
	username: "Administrator",
    email: "admin@example.com",
    firstName: "Admin",
    lastName: "User",
	password: "password01",
	image: "replaceThisString.com",
	recoveryCode: "123456",
	cards: [
		{
			id: "mastercard-credit-6772",
			type: "Credit",
			brand: "Mastercard",
			lastFour: "6772",
			expiry: "08/05",
			isFavorite: true,
			name: "Primary Card",
		},
		{
			id: "mastercard-credit-9090",
			type: "Credit",
			brand: "Mastercard",
			lastFour: "9090",
			expiry: "02/32",
			isFavorite: true,
			name: "Travel Card",
		},
		{
			id: "visa-debit-7432",
			type: "Debit",
			brand: "VISA",
			lastFour: "7432",
			expiry: "02/28",
			isFavorite: false,
			name: "Everyday Debit",
		},
		{
			id: "discover-debit-0800",
			type: "Debit",
			brand: "DISCOVER",
			lastFour: "0800",
			expiry: "02/28",
			isFavorite: false,
			name: "Savings Linked",
		},
		{
			id: "mastercard-credit-7230",
			type: "Credit",
			brand: "Mastercard",
			lastFour: "7230",
			expiry: "02/28",
			isFavorite: false,
			name: "Business Card",
		},
		{
			id: "visa-debit-9644",
			type: "Debit",
			brand: "VISA",
			lastFour: "9644",
			expiry: "02/28",
			isFavorite: false,
			name: "Secondary Debit",
		},
	],
	transactions: [
		{
			id: "TXN2540AUD001",
			merchant: "Emirates Airlines - Flight to Sydney",
			date: "2025-12-20T12:00:00",
			currency: "AUD",
			totalAmount: 2540.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 800.0,
				},
				{
					cardLastFour: "9090",
					amount: 900.0,
				},
				{
					cardLastFour: "7230",
					amount: 500.0,
				},
				{
					cardLastFour: "0800",
					amount: 340.0,
				},
			],
		},
		{
			id: "TXN5J6K7L8M9",
			merchant: "The Artisan's Nook",
			date: "2025-09-18T15:45:00",
			currency: "AED",
			totalAmount: 215.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 215.0,
				},
			],
		},
		{
			id: "TXN4A3B2C1D5",
			merchant: "The Artisan's Nook",
			date: "2025-09-18T16:20:00",
			currency: "AED",
			totalAmount: 289.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 289.0,
				},
			],
		},
		{
			id: "TXN2D3E4F5G6",
			merchant: "The Artisan's Nook",
			date: "2025-09-19T10:10:00",
			currency: "AED",
			totalAmount: 456.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 456.0,
				},
			],
		},
		{
			id: "TXN3N2O1P4Q5",
			merchant: "Chic Finds",
			date: "2025-09-20T14:30:00",
			currency: "AED",
			totalAmount: 763.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 763.0,
				},
			],
		},
		{
			id: "TXN7H8I9J0K1",
			merchant: "Amazon Online",
			date: "2025-10-05T11:15:00",
			currency: "USD",
			totalAmount: 118.5,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 118.5,
				},
			],
		},
		{
			id: "TXN9F8E7D6C4",
			merchant: "Hotel Booking - Paris",
			date: "2025-10-12T09:45:00",
			currency: "EUR",
			totalAmount: 847.2,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 500.0,
				},
				{
					cardLastFour: "9090",
					amount: 347.2,
				},
			],
		},
		{
			id: "TXN8R7S6T5U4",
			merchant: "Starbucks",
			date: "2025-11-01T08:20:00",
			currency: "GBP",
			totalAmount: 12.5,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 12.5,
				},
			],
		},
		{
			id: "TXN1H2G3F4E8",
			merchant: "Apple Store - MacBook",
			date: "2025-11-15T14:20:00",
			currency: "USD",
			totalAmount: 1299.0,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 800.0,
				},
				{
					cardLastFour: "6772",
					amount: 499.0,
				},
			],
		},
		{
			id: "TXN6Z5A4B3C2",
			merchant: "Uber Eats",
			date: "2025-11-20T19:45:00",
			currency: "AED",
			totalAmount: 145.0,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 145.0,
				},
			],
		},
		{
			id: "TXN0V1W2X3Y4",
			merchant: "Netflix Subscription",
			date: "2025-12-01T00:00:00",
			currency: "USD",
			totalAmount: 15.99,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 15.99,
				},
			],
		},
		{
			id: "TXN123ABC456",
			merchant: "Gym Membership Renewal",
			date: "2025-12-01T06:00:00",
			currency: "AED",
			totalAmount: 399.0,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 399.0,
				},
			],
		},
		{
			id: "TXN789DEF012",
			merchant: "Whole Foods Market",
			date: "2025-12-15T17:30:00",
			currency: "GBP",
			totalAmount: 85.4,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 85.4,
				},
			],
		},
		{
			id: "TXN456GHI789",
			merchant: "Restaurant - Nobu",
			date: "2025-12-23T21:00:00",
			currency: "AED",
			totalAmount: 650.0,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 400.0,
				},
				{
					cardLastFour: "7230",
					amount: 250.0,
				},
			],
		},
		{
			id: "TXN321JKL654",
			merchant: "Online Shopping - Noon",
			date: "2025-12-21T15:30:00",
			currency: "AED",
			totalAmount: 320.0,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 320.0,
				},
			],
		},
	],
	dashboardStatus: {
		totalSplits: 24,
		growthrate: 12,
		totalEarnings: 12450,
		topCards: [
			{
				id: "mastercard-credit-6772",
				type: "Credit",
				brand: "Mastercard",
				lastFour: "6772",
				expiry: "08/05",
				isFavorite: true,
				name: "Primary Card",
			},
			{
				id: "mastercard-credit-9090",
				type: "Credit",
				brand: "Mastercard",
				lastFour: "9090",
				expiry: "02/32",
				isFavorite: true,
				name: "Travel Card",
			},
		],
		topMerchants: [
			{ name: "The Artisan's Nook", value: 37, color: "#6366f1" },
			{ name: "Chic Finds", value: 26, color: "#a855f7" },
			{ name: "Modern Marvels", value: 21, color: "#0ea5e9" },
			{ name: "Amazon", value: 9, color: "#22c55e" },
			{ name: "Grameenphone", value: 7, color: "#eab308" },
		],
		recentOrders: [
			{
				id: "ORD-7X8Y9Z0A",
				cardLast4: "4912",
				currency: "AED",
				amount: 215,
			},
			{
				id: "ORD-7X8Y9Z0B",
				cardLast4: "3746",
				currency: "AED",
				amount: 289,
			},
			{
				id: "ORD-7X8Y9Z0C",
				cardLast4: "6420",
				currency: "AED",
				amount: 456,
			},
		],
	},
};
