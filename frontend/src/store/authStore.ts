import { type Card, type User } from "../Types";
import { MOCK_USER } from "./MockData";

// Cookie utility functions
export const setCookie = (
	name: string,
	value: string,
	days: number = 7
): void => {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
};

export const getCookie = (name: string): string | null => {
	const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
	return match ? match[2] : null;
};

export const deleteCookie = (name: string): void => {
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const isAuthenticated = (): boolean => {
	return (
		getCookie("authToken") !== null ||
		localStorage.getItem("authorized") === "true"
	);
};

export const logout = (): void => {
	deleteCookie("authToken");
	deleteCookie("refreshToken");
	localStorage.removeItem("authorized");
	localStorage.removeItem("user");
};

export const loginRequest = async (
	username: string,
	password: string
): Promise<User> => {
	const response = await fetch("https://dummyjson.com/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: username, password: password }),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Login failed");
	}

	const data = await response.json();

	// Set auth cookies
	if (data.accessToken) {
		setCookie("authToken", data.accessToken, 1); // 1 day
	}
	if (data.refreshToken) {
		setCookie("refreshToken", data.refreshToken, 7); // 7 days
	}

	// Also keep localStorage for client-side auth checks
	localStorage.setItem("authorized", "true");

	let currentUser: User | null = null;

	currentUser = {
		...MOCK_USER,
		id: MOCK_USER.id,
		firstName: data?.firstName,
		lastName: data?.lastName,
		email: data?.email,
		username: username,
		password: password,
		image: data?.image,
		transactions: MOCK_USER.transactions || [],
		cards: (MOCK_USER.cards as Card[]) || [],
		dashboardStatus: {
			totalSplits: MOCK_USER.dashboardStatus?.totalSplits || {},
			growthrate: MOCK_USER.dashboardStatus?.growthrate || 0,
			totalEarnings: MOCK_USER.dashboardStatus?.totalEarnings || 0,
			topCards: (MOCK_USER.dashboardStatus?.topCards as Card[]) || [],
			topMerchants: MOCK_USER.dashboardStatus?.topMerchants || [],
			recentOrders: MOCK_USER.dashboardStatus?.recentOrders || [],
		},
	};

	// Store user data in localStorage
	localStorage.setItem("user", JSON.stringify(currentUser));

	return currentUser as User;
};
