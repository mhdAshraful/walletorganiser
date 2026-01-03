// This is to show in dummy UI
export const MOCK_USER = {
	id: "user_01",
	name: "Administrator",
	email: "admin@example.com",
	password: "password01",
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
			id: "TXN5779PPP441",
			merchant: "Electricity Bill",
			date: "2026-01-01T00:00:00",
			currency: "AED",
			totalAmount: 298.89,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 206.02,
				},
				{
					cardLastFour: "6772",
					amount: 92.87,
				},
			],
			category: "utilities",
		},
		{
			id: "TXN4784III644",
			merchant: "Whole Foods Market",
			date: "2025-12-31T00:00:00",
			currency: "AUD",
			totalAmount: 1969.78,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 1969.78,
				},
			],
			category: "food",
		},
		{
			id: "TXN4405HHH922",
			merchant: "Emirates Airlines",
			date: "2025-12-30T00:00:00",
			currency: "USD",
			totalAmount: 670.39,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 97.3,
				},
				{
					cardLastFour: "6772",
					amount: 573.09,
				},
			],
			category: "travel",
		},
		{
			id: "TXN6996RRR577",
			merchant: "Gym Membership",
			date: "2025-12-30T00:00:00",
			currency: "EUR",
			totalAmount: 337.34,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 337.34,
				},
			],
			category: "health",
		},
		{
			id: "TXN2328YYY723",
			merchant: "Modern Marvels",
			date: "2025-12-25T00:00:00",
			currency: "AUD",
			totalAmount: 1874.45,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 1874.45,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN3113TTT787",
			merchant: "Movie Theater",
			date: "2025-12-23T00:00:00",
			currency: "GBP",
			totalAmount: 1934.11,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 1934.11,
				},
			],
			category: "entertainment",
		},
		{
			id: "TXN6478UUU417",
			merchant: "Amazon Online",
			date: "2025-12-20T00:00:00",
			currency: "AUD",
			totalAmount: 319.33,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 233.77,
				},
				{
					cardLastFour: "9090",
					amount: 65.44,
				},
				{
					cardLastFour: "7432",
					amount: 20.12,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN3240PPP718",
			merchant: "Gym Membership",
			date: "2025-12-17T00:00:00",
			currency: "AUD",
			totalAmount: 1019.38,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 735.97,
				},
				{
					cardLastFour: "7432",
					amount: 283.41,
				},
			],
			category: "health",
		},
		{
			id: "TXN6624TTT471",
			merchant: "Whole Foods Market",
			date: "2025-12-12T00:00:00",
			currency: "AED",
			totalAmount: 29.2,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 4.36,
				},
				{
					cardLastFour: "6772",
					amount: 16.46,
				},
				{
					cardLastFour: "7230",
					amount: 8.38,
				},
			],
			category: "food",
		},
		{
			id: "TXN5631QQQ390",
			merchant: "Chic Finds",
			date: "2025-12-12T00:00:00",
			currency: "GBP",
			totalAmount: 1438.22,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 622.38,
				},
				{
					cardLastFour: "9090",
					amount: 569.55,
				},
				{
					cardLastFour: "7230",
					amount: 246.29,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN3410RRR428",
			merchant: "Doctor Visit",
			date: "2025-12-08T00:00:00",
			currency: "USD",
			totalAmount: 1235.82,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 1235.82,
				},
			],
			category: "health",
		},
		{
			id: "TXN2769XXX694",
			merchant: "Grocery Store",
			date: "2025-12-07T00:00:00",
			currency: "AUD",
			totalAmount: 620.31,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 620.31,
				},
			],
			category: "food",
		},
		{
			id: "TXN2948CCC309",
			merchant: "Restaurant - Nobu",
			date: "2025-12-03T00:00:00",
			currency: "USD",
			totalAmount: 1578.12,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 1578.12,
				},
			],
			category: "food",
		},
		{
			id: "TXN4101HHH544",
			merchant: "Apple Store",
			date: "2025-11-30T00:00:00",
			currency: "USD",
			totalAmount: 1041.91,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 652.97,
				},
				{
					cardLastFour: "0800",
					amount: 388.94,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN3384YYY610",
			merchant: "The Artisan's Nook",
			date: "2025-11-28T00:00:00",
			currency: "AED",
			totalAmount: 794.65,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 794.65,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN5523YYY282",
			merchant: "Netflix Subscription",
			date: "2025-11-24T00:00:00",
			currency: "GBP",
			totalAmount: 866.89,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 866.89,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN8113HHH979",
			merchant: "Chic Finds",
			date: "2025-11-19T00:00:00",
			currency: "GBP",
			totalAmount: 1752.17,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 1752.17,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN8583ZZZ653",
			merchant: "Fuel Station",
			date: "2025-11-13T00:00:00",
			currency: "EUR",
			totalAmount: 735.28,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 160.22,
				},
				{
					cardLastFour: "7432",
					amount: 403.87,
				},
				{
					cardLastFour: "0800",
					amount: 171.19,
				},
			],
			category: "transport",
		},
		{
			id: "TXN4055LLL683",
			merchant: "Concert Tickets",
			date: "2025-11-12T00:00:00",
			currency: "USD",
			totalAmount: 1605.33,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 1605.33,
				},
			],
			category: "entertainment",
		},
		{
			id: "TXN1829TTT860",
			merchant: "Chic Finds",
			date: "2025-11-12T00:00:00",
			currency: "USD",
			totalAmount: 1841.22,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 979.23,
				},
				{
					cardLastFour: "7432",
					amount: 861.99,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN4459RRR756",
			merchant: "Taxi Ride",
			date: "2025-11-12T00:00:00",
			currency: "EUR",
			totalAmount: 1177.49,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 1177.49,
				},
			],
			category: "transport",
		},
		{
			id: "TXN5686HHH176",
			merchant: "Apple Store",
			date: "2025-11-11T00:00:00",
			currency: "AED",
			totalAmount: 1047.94,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 399.26,
				},
				{
					cardLastFour: "0800",
					amount: 648.68,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN9842VVV810",
			merchant: "Dubai Mall Parking",
			date: "2025-11-11T00:00:00",
			currency: "USD",
			totalAmount: 1639.93,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 1639.93,
				},
			],
			category: "transport",
		},
		{
			id: "TXN1468WWW295",
			merchant: "Online Shopping - Noon",
			date: "2025-11-10T00:00:00",
			currency: "AED",
			totalAmount: 344.86,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 162.77,
				},
				{
					cardLastFour: "0800",
					amount: 49.84,
				},
				{
					cardLastFour: "9090",
					amount: 132.25,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN9450WWW192",
			merchant: "Netflix Subscription",
			date: "2025-11-08T00:00:00",
			currency: "AED",
			totalAmount: 839.3,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 839.3,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN2792KKK916",
			merchant: "Electricity Bill",
			date: "2025-11-02T00:00:00",
			currency: "USD",
			totalAmount: 890.9,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 280.87,
				},
				{
					cardLastFour: "7432",
					amount: 610.03,
				},
			],
			category: "utilities",
		},
		{
			id: "TXN4426PPP503",
			merchant: "The Artisan's Nook",
			date: "2025-11-01T00:00:00",
			currency: "GBP",
			totalAmount: 1593.64,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 1593.64,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN4160WWW991",
			merchant: "Starbucks",
			date: "2025-10-31T00:00:00",
			currency: "GBP",
			totalAmount: 584.19,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 584.19,
				},
			],
			category: "food",
		},
		{
			id: "TXN4840AAA805",
			merchant: "Gym Membership",
			date: "2025-10-28T00:00:00",
			currency: "AUD",
			totalAmount: 1609.32,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 1609.32,
				},
			],
			category: "health",
		},
		{
			id: "TXN9467FFF360",
			merchant: "University Fees",
			date: "2025-10-27T00:00:00",
			currency: "AED",
			totalAmount: 1484.5,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 680.83,
				},
				{
					cardLastFour: "0800",
					amount: 803.67,
				},
			],
			category: "education",
		},
		{
			id: "TXN3445LLL413",
			merchant: "McDonald's",
			date: "2025-10-23T00:00:00",
			currency: "AED",
			totalAmount: 1370.98,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 1370.98,
				},
			],
			category: "food",
		},
		{
			id: "TXN6964EEE635",
			merchant: "Fuel Station",
			date: "2025-10-21T00:00:00",
			currency: "USD",
			totalAmount: 1291.3,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 622.35,
				},
				{
					cardLastFour: "7230",
					amount: 316.81,
				},
				{
					cardLastFour: "7432",
					amount: 352.14,
				},
			],
			category: "transport",
		},
		{
			id: "TXN4864FFF123",
			merchant: "Modern Marvels",
			date: "2025-10-20T00:00:00",
			currency: "GBP",
			totalAmount: 1373.42,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 1373.42,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN6690MMM827",
			merchant: "Whole Foods Market",
			date: "2025-10-19T00:00:00",
			currency: "USD",
			totalAmount: 1429.02,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 1429.02,
				},
			],
			category: "food",
		},
		{
			id: "TXN7127NNN328",
			merchant: "Hotel Booking - Booking.com",
			date: "2025-10-12T00:00:00",
			currency: "EUR",
			totalAmount: 525.49,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 525.49,
				},
			],
			category: "travel",
		},
		{
			id: "TXN7099VVV831",
			merchant: "Starbucks",
			date: "2025-10-12T00:00:00",
			currency: "EUR",
			totalAmount: 1548.95,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 1548.95,
				},
			],
			category: "food",
		},
		{
			id: "TXN8359AAA578",
			merchant: "Spotify",
			date: "2025-10-10T00:00:00",
			currency: "AUD",
			totalAmount: 1516.31,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 749.49,
				},
				{
					cardLastFour: "7432",
					amount: 766.82,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN4870HHH562",
			merchant: "Book Store",
			date: "2025-10-10T00:00:00",
			currency: "USD",
			totalAmount: 452.28,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 452.28,
				},
			],
			category: "education",
		},
		{
			id: "TXN4132VVV295",
			merchant: "Netflix Subscription",
			date: "2025-10-04T00:00:00",
			currency: "AED",
			totalAmount: 449.71,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 449.71,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN3269EEE541",
			merchant: "Fuel Station",
			date: "2025-10-03T00:00:00",
			currency: "USD",
			totalAmount: 933.43,
			cardsUsed: [
				{
					cardLastFour: "0800",
					amount: 648.25,
				},
				{
					cardLastFour: "7432",
					amount: 285.18,
				},
			],
			category: "transport",
		},
		{
			id: "TXN1489KKK414",
			merchant: "Apple Store",
			date: "2025-09-28T00:00:00",
			currency: "AED",
			totalAmount: 202.42,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 202.42,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN7481LLL499",
			merchant: "Spotify",
			date: "2025-09-22T00:00:00",
			currency: "AED",
			totalAmount: 950.42,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 515.71,
				},
				{
					cardLastFour: "6772",
					amount: 189.31,
				},
				{
					cardLastFour: "9090",
					amount: 99.52,
				},
				{
					cardLastFour: "9644",
					amount: 145.88,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN3193KKK373",
			merchant: "Netflix Subscription",
			date: "2025-09-19T00:00:00",
			currency: "USD",
			totalAmount: 1595.28,
			cardsUsed: [
				{
					cardLastFour: "6772",
					amount: 721.04,
				},
				{
					cardLastFour: "9644",
					amount: 578.49,
				},
				{
					cardLastFour: "7432",
					amount: 295.75,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN3714AAA306",
			merchant: "Movie Theater",
			date: "2025-09-16T00:00:00",
			currency: "GBP",
			totalAmount: 1533.84,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 1533.84,
				},
			],
			category: "entertainment",
		},
		{
			id: "TXN1478TTT936",
			merchant: "Spotify",
			date: "2025-09-13T00:00:00",
			currency: "USD",
			totalAmount: 75.38,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 39.84,
				},
				{
					cardLastFour: "9090",
					amount: 35.54,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN8581HHH141",
			merchant: "Netflix Subscription",
			date: "2025-09-10T00:00:00",
			currency: "EUR",
			totalAmount: 1607.28,
			cardsUsed: [
				{
					cardLastFour: "9644",
					amount: 305.1,
				},
				{
					cardLastFour: "0800",
					amount: 1302.18,
				},
			],
			category: "subscription",
		},
		{
			id: "TXN6954MMM791",
			merchant: "Online Shopping - Noon",
			date: "2025-09-06T00:00:00",
			currency: "EUR",
			totalAmount: 1340.15,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 1340.15,
				},
			],
			category: "shopping",
		},
		{
			id: "TXN5379RRR957",
			merchant: "Fuel Station",
			date: "2025-09-05T00:00:00",
			currency: "USD",
			totalAmount: 1551.96,
			cardsUsed: [
				{
					cardLastFour: "7432",
					amount: 1551.96,
				},
			],
			category: "transport",
		},
		{
			id: "TXN6936OOO346",
			merchant: "Book Store",
			date: "2025-09-04T00:00:00",
			currency: "GBP",
			totalAmount: 1932.25,
			cardsUsed: [
				{
					cardLastFour: "9090",
					amount: 1309.44,
				},
				{
					cardLastFour: "0800",
					amount: 378.35,
				},
				{
					cardLastFour: "7432",
					amount: 244.46,
				},
			],
			category: "education",
		},
		{
			id: "TXN8962SSS319",
			merchant: "Spotify",
			date: "2025-09-04T00:00:00",
			currency: "AED",
			totalAmount: 1651.36,
			cardsUsed: [
				{
					cardLastFour: "7230",
					amount: 1651.36,
				},
			],
			category: "subscription",
		},
	],
	dashboardStatus: {
		totalSplits: {
			total: 96,
			monthlyData: [
				{ month: "Sep25", splits: 15 },
				{ month: "Oct25", splits: 30 },
				{ month: "Nov25", splits: 23 },
				{ month: "Dec25", splits: 7 },
				{ month: "Jan26", splits: 21 },
			],
		},
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
			{
				name: "The Artisan's Nook",
				value: 37,
				color: "#6366f1",
			},
			{
				name: "Chic Finds",
				value: 26,
				color: "#a855f7",
			},
			{
				name: "Modern Marvels",
				value: 21,
				color: "#0ea5e9",
			},
			{
				name: "Amazon",
				value: 9,
				color: "#22c55e",
			},
			{
				name: "Grameenphone",
				value: 7,
				color: "#eab308",
			},
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
