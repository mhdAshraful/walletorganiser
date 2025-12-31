import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginForm } from "./components/LoginForm.tsx";
import { SignupForm } from "./components/SignupForm.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

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
					<Route path="/login" element={<LoginForm />} />
					<Route path="/signup" element={<SignupForm />} />

					{/* Protected routes */}
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<App />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>
	);
}

init();
