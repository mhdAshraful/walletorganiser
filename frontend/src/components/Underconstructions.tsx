import React, { useState } from "react";
import { Construction, ArrowRight, CheckCircle2 } from "lucide-react";
export function UnderConstruction() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		setIsSubmitting(true);
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setEmail("");
		}, 1500);
	};
	return (
		<main className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
			<div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
				{/* Icon Container */}
				<div className="relative">
					<div className="absolute -inset-4 bg-[#5155FE]/10 rounded-full blur-xl animate-pulse"></div>
					<div className="relative bg-white p-4 rounded-2xl shadow-sm border border-[#E5E7EB]">
						<Construction
							className="w-12 h-12 text-[#5155FE]"
							strokeWidth={1.5}
						/>
					</div>
				</div>

				{/* Text Content */}
				<div className="space-y-4 max-w-lg">
					<h1 className="text-4xl md:text-5xl font-bold text-[#101828] tracking-tight">
						Under Construction
					</h1>
					<p className="text-lg text-[#364153] leading-relaxed">
						We're working hard to bring you something amazing. Our new
						platform is coming soon with improved features and a fresh
						look.
					</p>
				</div>

				{/* Notification Form */}
				<div className="w-full max-w-md mt-8">
					{isSuccess ? (
						<div className="flex items-center justify-center space-x-2 text-[#00A63E] bg-[#F0FDF4] p-4 rounded-lg border border-[#B9F8CF] animate-in zoom-in duration-300">
							<CheckCircle2 className="w-5 h-5" />
							<span className="font-medium">
								You'll be notified when we launch!
							</span>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-3"
						>
							<div className="flex-grow">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email for updates"
									className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] text-[#101828] placeholder-[#99A1AF] focus:outline-none focus:ring-2 focus:ring-[#5155FE]/20 focus:border-[#5155FE] transition-all"
									required
								/>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#5155FE] text-white font-medium hover:bg-[#4144D3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5155FE] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
							>
								{isSubmitting ? (
									<span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
								) : (
									<>
										Notify Me <ArrowRight className="ml-2 w-4 h-4" />
									</>
								)}
							</button>
						</form>
					)}
					<p className="text-sm text-[#6A7282] mt-4">
						No spam, just important updates. Unsubscribe anytime.
					</p>
				</div>
			</div>

			{/* Footer */}
			<footer className="absolute bottom-6 text-sm text-[#99A1AF]">
				&copy; {new Date().getFullYear()} Company Name. All rights reserved.
			</footer>
		</main>
	);
}
