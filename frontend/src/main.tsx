import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginForm } from "./components/Login/LoginForm.tsx";
import { SignupForm } from "./components/Login/SignupForm.tsx";
import { ProtectedRoute } from "./components/Login/ProtectedRoute.tsx";
import Settings from "./components/NavSideBars/Settings.tsx";
import DashboardContent from "./components/Dashboard/DashboardContent.tsx";

async function init() {
	// Start MSW in development only so local API calls are intercepted.
	if (import.meta.env.DEV && typeof window !== "undefined") {
		const { worker } = await import("./mocks/browser");
		await worker.start({
			onUnhandledRequest: "bypass",
		});
	}

	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<BrowserRouter>
				<Routes>
					{/* Public routes */}
					<Route path="login" element={<LoginForm />} />
					<Route path="signup" element={<SignupForm />} />
					<Route path="payment-preview" element={<> payment element</>} />
					{/* Protected routes */}
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<App />}>
							<Route index element={<DashboardContent />} />
							<Route path="cards" element={<> cards element</>} />
							<Route path="orders" element={<> orders element</>} />
							<Route path="support" element={<> support element</>} />
							<Route path="settings" element={<Settings />} />
							<Route
								path="notifications"
								element={<> notifications element</>}
							/>
							<Route
								path="userprofile"
								element={<> userprofile element</>}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>
	);
}

init();
