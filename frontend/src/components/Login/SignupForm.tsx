import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSignupStore } from "@/store/signupStore";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password complexity requirements
const passwordRequirements = {
	minLength: 8,
	hasUppercase: /[A-Z]/,
	hasLowercase: /[a-z]/,
	hasNumber: /[0-9]/,
	hasSpecial: /[!@#$%^&*(),.?":{}|<>]/,
};

function validateEmail(email: string): { valid: boolean; error?: string } {
	if (!email) {
		return { valid: false, error: "Email is required" };
	}
	if (!emailRegex.test(email)) {
		return { valid: false, error: "Please enter a valid email address" };
	}
	return { valid: true };
}

function validatePassword(password: string): {
	valid: boolean;
	errors: string[];
	checks: Record<string, boolean>;
} {
	const checks = {
		minLength: password.length >= passwordRequirements.minLength,
		hasUppercase: passwordRequirements.hasUppercase.test(password),
		hasLowercase: passwordRequirements.hasLowercase.test(password),
		hasNumber: passwordRequirements.hasNumber.test(password),
		hasSpecial: passwordRequirements.hasSpecial.test(password),
	};

	const errors: string[] = [];
	if (!checks.minLength) errors.push("At least 8 characters");
	if (!checks.hasUppercase) errors.push("One uppercase letter");
	if (!checks.hasLowercase) errors.push("One lowercase letter");
	if (!checks.hasNumber) errors.push("One number");
	if (!checks.hasSpecial) errors.push("One special character");

	return {
		valid: Object.values(checks).every(Boolean),
		errors,
		checks,
	};
}

function validateName(
	name: string,
	fieldName: string
): { valid: boolean; error?: string } {
	if (!name.trim()) {
		return { valid: false, error: `${fieldName} is required` };
	}
	if (name.trim().length < 2) {
		return {
			valid: false,
			error: `${fieldName} must be at least 2 characters`,
		};
	}
	return { valid: true };
}

// Step 1: Email Input
function EmailStep() {
	const { email, setEmail, nextStep } = useSignupStore();
	const [touched, setTouched] = useState(false);

	const validation = useMemo(() => validateEmail(email), [email]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setTouched(true);
		if (validation.valid) {
			nextStep();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-2xl font-bold">Sign up to Credipool</h1>
					<p className="text-muted-foreground text-balance">
						Start paying with multiple cards online
					</p>
				</div>
				<p className="text-muted-foreground text-center text-2xl">
					{" "}
					<span className="text-amber-500"> To login</span> You can use any{" "}
					<span className="text-blue-400">username</span>And{" "}
					<span className="text-blue-400"> password</span> from this link{" "}
					<a href="https://dummyjson.com/users" target="_blank">
						https://dummyjson.com/users
					</a>
				</p>

				{/* Progress indicator */}
				{/* <div className="flex justify-center gap-2">
					<div className="h-2 w-8 rounded-full bg-primary" />
					<div className="h-2 w-8 rounded-full bg-muted" />
					<div className="h-2 w-8 rounded-full bg-muted" />
				</div> */}

				<Field>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						id="email"
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={() => setTouched(true)}
						aria-invalid={touched && !validation.valid}
						className={cn(
							touched &&
								!validation.valid &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{touched && !validation.valid && (
						<FieldDescription className="text-destructive">
							{validation.error}
						</FieldDescription>
					)}
				</Field>

				{/* Confirm email */}
				<Field>
					<FieldLabel htmlFor="confirmEmail">Confirm Email</FieldLabel>
					<Input
						id="confirmEmail"
						type="email"
						placeholder="Enter Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={() => setTouched(true)}
						aria-invalid={touched && !validation.valid}
						className={cn(
							touched &&
								!validation.valid &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{touched && !validation.valid && (
						<FieldDescription className="text-destructive">
							{validation.error}
						</FieldDescription>
					)}
				</Field>

				<Field>
					<Button type="submit" className="w-full">
						Next
					</Button>
				</Field>

				<FieldDescription className="text-center">
					Already have an account?{" "}
					<a
						href="/login"
						className="underline underline-offset-2 hover:text-primary"
					>
						Sign in
					</a>
				</FieldDescription>
			</FieldGroup>
		</form>
	);
}

// Step 2: Password Creation
function PasswordStep() {
	const { password, setPassword, nextStep, prevStep } = useSignupStore();
	const [confirmPassword, setConfirmPassword] = useState("");
	const [touched, setTouched] = useState({ password: false, confirm: false });

	const validation = useMemo(() => validatePassword(password), [password]);
	const passwordsMatch = password === confirmPassword;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setTouched({ password: true, confirm: true });
		if (validation.valid && passwordsMatch) {
			nextStep();
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-2xl font-bold">Create a password</h1>
					<p className="text-muted-foreground text-balance">
						Choose a strong password for your account
					</p>
				</div>

				{/* Progress indicator */}
				{/* <div className="flex justify-center gap-2">
					<div className="h-2 w-8 rounded-full bg-primary" />
					<div className="h-2 w-8 rounded-full bg-primary" />
					<div className="h-2 w-8 rounded-full bg-muted" />
				</div> */}

				<Field>
					<FieldLabel htmlFor="password">Password</FieldLabel>
					<Input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onBlur={() => setTouched((t) => ({ ...t, password: true }))}
						aria-invalid={touched.password && !validation.valid}
						className={cn(
							touched.password &&
								!validation.valid &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{/* Password requirements checklist */}
					<div className="mt-2 space-y-1 text-sm">
						{Object.entries({
							minLength: "At least 8 characters",
							hasUppercase: "One uppercase letter",
							hasLowercase: "One lowercase letter",
							hasNumber: "One number",
							hasSpecial: "One special character",
						}).map(([key, label]) => (
							<div
								key={key}
								className={cn(
									"flex items-center gap-2",
									validation.checks[
										key as keyof typeof validation.checks
									]
										? "text-primary"
										: "text-muted-foreground"
								)}
							>
								{validation.checks[
									key as keyof typeof validation.checks
								] ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-4 w-4"
									>
										<path
											fillRule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-4 w-4"
									>
										<path d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
									</svg>
								)}
								<span>{label}</span>
							</div>
						))}
					</div>
				</Field>

				<Field>
					<FieldLabel htmlFor="confirmPassword">
						Confirm Password
					</FieldLabel>
					<Input
						id="confirmPassword"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
						aria-invalid={touched.confirm && !passwordsMatch}
						className={cn(
							touched.confirm &&
								!passwordsMatch &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{touched.confirm && !passwordsMatch && (
						<FieldDescription className="text-destructive">
							Passwords do not match
						</FieldDescription>
					)}
				</Field>

				<div className="flex gap-3">
					<Button
						type="button"
						variant="outline"
						onClick={prevStep}
						className="flex-1"
					>
						Back
					</Button>
					<Button type="submit" className="flex-1">
						Next
					</Button>
				</div>
			</FieldGroup>
		</form>
	);
}

// Step 3: Name and Confirmation
function NameStep() {
	const {
		firstName,
		lastName,
		setFirstName,
		setLastName,
		prevStep,
		isLoading,
		setLoading,
		setError,
		error,
		getFormData,
		reset,
	} = useSignupStore();

	const [touched, setTouched] = useState({
		firstName: false,
		lastName: false,
	});
	const [success, setSuccess] = useState(false);

	const firstNameValidation = useMemo(
		() => validateName(firstName, "First name"),
		[firstName]
	);
	const lastNameValidation = useMemo(
		() => validateName(lastName, "Last name"),
		[lastName]
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setTouched({ firstName: true, lastName: true });

		if (!firstNameValidation.valid || !lastNameValidation.valid) {
			return;
		}

		setLoading(true);
		setError(null);

		try {
			const formData = getFormData();

			const response = await fetch("/walletprovider/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Signup failed. Please try again.");
			}

			setSuccess(true);
			// Optionally reset the form after successful signup
			// reset();
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
		} finally {
			setLoading(false);
		}
	};

	if (success) {
		return (
			<FieldGroup>
				<div className="flex flex-col items-center gap-4 text-center py-8">
					<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-8 w-8 text-primary"
						>
							<path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h1 className="text-2xl font-bold">Account Created!</h1>
					<p className="text-muted-foreground">
						Your account has been successfully created. You can now sign
						in.
					</p>
					<Button
						onClick={() => {
							reset();
							// Navigate to login or redirect
						}}
						className="mt-4"
					>
						Go to Sign In
					</Button>
				</div>
			</FieldGroup>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-2xl font-bold">Almost there!</h1>
					<p className="text-muted-foreground text-balance">
						Tell us your name to complete your profile
					</p>
				</div>

				{/* Progress indicator */}
				{/* <div className="flex justify-center gap-2">
					<div className="h-2 w-8 rounded-full bg-primary" />
					<div className="h-2 w-8 rounded-full bg-primary" />
					<div className="h-2 w-8 rounded-full bg-primary" />
				</div> */}

				{error && (
					<div className="rounded-md bg-destructive/10 p-3 text-center text-sm text-destructive">
						{error}
					</div>
				)}

				<Field>
					<FieldLabel htmlFor="firstName">First Name</FieldLabel>
					<Input
						id="firstName"
						type="text"
						placeholder="John"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
						aria-invalid={touched.firstName && !firstNameValidation.valid}
						className={cn(
							touched.firstName &&
								!firstNameValidation.valid &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{touched.firstName && !firstNameValidation.valid && (
						<FieldDescription className="text-destructive">
							{firstNameValidation.error}
						</FieldDescription>
					)}
				</Field>

				<Field>
					<FieldLabel htmlFor="lastName">Last Name</FieldLabel>
					<Input
						id="lastName"
						type="text"
						placeholder="Doe"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
						aria-invalid={touched.lastName && !lastNameValidation.valid}
						className={cn(
							touched.lastName &&
								!lastNameValidation.valid &&
								"border-destructive focus-visible:ring-destructive"
						)}
					/>
					{touched.lastName && !lastNameValidation.valid && (
						<FieldDescription className="text-destructive">
							{lastNameValidation.error}
						</FieldDescription>
					)}
				</Field>

				<div className="flex gap-3">
					<Button
						type="button"
						variant="outline"
						onClick={prevStep}
						disabled={isLoading}
						className="flex-1"
					>
						Back
					</Button>
					<Button type="submit" disabled={isLoading} className="flex-1">
						{isLoading ? (
							<>
								<svg
									className="mr-2 h-4 w-4 animate-spin"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
								Creating Account...
							</>
						) : (
							"Create Account"
						)}
					</Button>
				</div>
			</FieldGroup>
		</form>
	);
}

// Main SignupForm component
export function SignupForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const { currentStep } = useSignupStore();

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<div className="p-6 md:p-8">
						{currentStep === 1 && <EmailStep />}
						{currentStep === 2 && <PasswordStep />}
						{currentStep === 3 && <NameStep />}
					</div>
					<div className="bg-muted relative hidden md:block">
						<img
							src="/placeholder.svg"
							alt="Signup illustration"
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
						/>
					</div>
				</CardContent>
			</Card>
			<FieldDescription className="px-6 text-center">
				By clicking continue, you agree to our{" "}
				<a
					href="#"
					className="underline underline-offset-2 hover:text-primary"
				>
					Terms of Service
				</a>{" "}
				and{" "}
				<a
					href="#"
					className="underline underline-offset-2 hover:text-primary"
				>
					Privacy Policy
				</a>
				.
			</FieldDescription>
		</div>
	);
}
