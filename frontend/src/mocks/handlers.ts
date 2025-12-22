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

export const handlers = [
	// User Authentication Handlers
	http.post("/api/auth/login", async ({ request }) => {
		const { email, password } = (await request.json()) as any;

		if (email === MOCK_USER.email && password === MOCK_USER.password) {
			return HttpResponse.json({
				token: "Some_Fake_JWT_TOKEN",
				user: {
					id: MOCK_USER.id,
					name: MOCK_USER.name,
					email: MOCK_USER.email,
				},
			});
		}
		return HttpResponse.json(null, {
			status: 401,
			statusText: "Invalid credentials",
		});
	}),

	// User Registration handler
	http.post("/api/auth/register", async ({ request }) => {
		const { email, password } = (await request.json()) as any;
		// fake saving user
		MOCK_USER.email = email;
		MOCK_USER.password = password;

		return HttpResponse.json({
			message:
				"User registered successfully, please verify OTP sent to your email.",
		});
	}),

	// OTP Handlers
	http.post("/api/auth/verifyotp", async ({ request }) => {
		const { otp } = (await request.json()) as any;

		// 6 digit OTP check
		if (otp === MOCK_USER.recoveryCode) {
			return HttpResponse.json({
				message: "OTP verified successfully.",
			});
		}
		return HttpResponse.json(null, {
			status: 400,
			statusText: "Invalid OTP",
		});
	}),

	// Reset Password Handler
	http.post("/api/auth/resetPassword", async ({ request }) => {
		const { newPassword } = (await request.json()) as any;
		// fake updating password
		MOCK_USER.password = newPassword;

		return HttpResponse.json({
			success: true,
			message: "Password reset successfully.",
		});
	}),

	/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Dashboard Data Handler                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

	http.get("api/dashboard", () => {
		// If no card added, we show empty dashboard
		if (cardsDB.length === 0) {
			return HttpResponse.json({
				emptyState: true,
				status: null,
			});
		}
		return HttpResponse.json({
			emptyState: false,
			status: DASHBOARD_STATUS,
			user: MOCK_USER.name,
		});
	}),

	// --- CARDS: READ (Get all cards) ---
	http.get("/api/cards", () => {
		return HttpResponse.json(cardsDB);
	}),

	// --- CARDS: CREATE (Add a card) ---
	http.post("/api/cards", async ({ request }) => {
		const newCardData = (await request.json()) as any;

		// 1. Simulate "Tokenization" (Network delay)
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// 2. Create the new card object
		const newCard = {
			id: `c${Date.now()}`, // Generate a random ID
			type: newCardData.brand || "Visa",
			cardLast4: newCardData.cardNumber.slice(-4), // Take last 4 digits
            brand: "Debit", // Default for demo
            expiry: newCardData.expiry, // Default expiry
			usage: 0, // New cards have 0 usage
		};

		// 3. "SAVE" it to our mock database array
		cardsDB.push(newCard);

		// 4. Return the new card so the UI can update
		return HttpResponse.json(newCard, { status: 201 });
	}),

	// --- CARDS: DELETE (Remove a card) ---
	http.delete("/api/cards/:id", ({ params }) => {
		const { id } = params;

		// Remove the card from the array
		const initialLength = cardsDB.length;
		cardsDB = cardsDB.filter((card) => card.id !== id);

		if (cardsDB.length === initialLength) {
			return new HttpResponse(null, {
				status: 404,
				statusText: "Card not found",
			});
		}

		return HttpResponse.json({ success: true, id });
	}),
];
