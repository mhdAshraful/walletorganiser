import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "@/store/authStore";

interface ProtectedRouteProps {
	redirectTo?: string;
}

export function ProtectedRoute({ redirectTo = "/login" }: ProtectedRouteProps) {
	const isAuthorized = isAuthenticated();

	if (!isAuthorized) {
		return <Navigate to={redirectTo} replace />;
	}

	return <Outlet />;
}
