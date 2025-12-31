import { http, HttpResponse } from "msw";
import { MOCK_USER } from "../store/MockData";

export const handlers = [
	// User Authentication Handlers
	http.post("/api/auth/login", async ({ request }) => {
		const { email, password } = (await request.json()) as any;

		if (email === MOCK_USER.email && password === MOCK_USER.password) {
			return HttpResponse.json({
				token: "Some_Fake_JWT_TOKEN",
				user: {
					id: MOCK_USER.id,
					username: MOCK_USER.username,
					firstName: MOCK_USER.firstName,
					lastName: MOCK_USER.lastName,
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
		if (MOCK_USER.cards.length === 0) {
			return HttpResponse.json({
				emptyState: true,
				status: null,
			});
		}
		return HttpResponse.json({
			emptyState: false,
			data: MOCK_USER.dashboardStatus,
		});
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
		MOCK_USER.cards.push(newCard);
		// 4. Return the new card so the UI can update
		return HttpResponse.json(newCard, { status: 201 });
	}),

	// --- CARDS: DELETE (Remove a card) ---
	http.delete("/api/cards/:id", ({ params }) => {
		const { id } = params;

		// Remove the card from the array
		const initialLength = MOCK_USER.cards.length;
		MOCK_USER.cards = MOCK_USER.cards.filter((card) => card.id !== id);

		if (MOCK_USER.cards.length === initialLength) {
			return new HttpResponse(null, {
				status: 404,
				statusText: "Card not found",
			});
		}

		return HttpResponse.json({ success: true, id });
	}),
];
