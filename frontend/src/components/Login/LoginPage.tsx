import { NavLink } from "react-router";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<NavLink
					to="/"
					className="flex flex-row justify-center gap-2 md:justify-start"
				>
					<img
						src="logo_icon.svg"
						alt="CreditPool Logo"
						className="w-6 h-6"
					/>
					<div>
						<p className="font-normal text-lg">Wallet Provider</p>
					</div>
				</NavLink>

				<div className="flex flex-1 items-center  justify-center">
					<div className="w-full max-w-xs ">
						<LoginForm />
					</div>
				</div>
			</div>
			<div className="bg-muted relative hidden lg:block rounded-2xl m-6 md:m-10 overflow-hidden">
				<img
					src="/placeholder.svg"
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
