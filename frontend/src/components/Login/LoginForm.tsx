import * as React from "react";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldError,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginRequest } from "@/store/authStore";

const loginFormSchema = z.object({
	username: z.string().min(1, "Username is required"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [loginError, setLoginError] = useState<string | null>(null);

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof loginFormSchema>) {
		setIsLoading(true);
		setLoginError(null);

		try {
			await loginRequest(data.username, data.password);
			// Redirect to dashboard on successful login
			navigate("/", { replace: true });
		} catch (error) {
			setLoginError(
				error instanceof Error
					? error.message
					: "Login failed. Please try again."
			);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<form
			className={cn("flex flex-col gap-6", className)}
			{...props}
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<FieldGroup>
				<div className="flex flex-col items-start gap-1 text-left">
					<h1 className="text-2xl font-bold">Log in </h1>
					<p className="text-muted-foreground text-sm text-balance">
						Welcome back, we missed you!
					</p>
				</div>

				{loginError && (
					<div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
						{loginError}
					</div>
				)}
				<Controller
					name="username"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="username">Username</FieldLabel>
							<Input
								{...field}
								id="username"
								type="text"
								placeholder="Enter Username"
								aria-invalid={fieldState.invalid}
								required
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>

				<Controller
					name="password"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<div className="flex items-center">
								<FieldLabel htmlFor="password">Password</FieldLabel>
								<a
									href="#"
									className="ml-auto text-sm underline-offset-2 hover:underline"
								>
									Forgot your password?
								</a>
							</div>
							<Input
								{...field}
								id="password"
								type="password"
								aria-invalid={fieldState.invalid}
								placeholder="Enter Password"
								required
							/>
						</Field>
					)}
				/>
				<Field>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Logging in..." : "Login"}
					</Button>
				</Field>
				<FieldSeparator>Or continue with</FieldSeparator>
				<FieldDescription className="text-center">
					Don&apos;t have an account? <a href="/signup">Sign up</a>
				</FieldDescription>
			</FieldGroup>
		</form>
	);
}
