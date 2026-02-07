"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiSolidError } from "react-icons/bi";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/Button/Button";

export default function VerifyEmail() {
	const router = useRouter();
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Handle input change for each digit
	const handleInputChange = (index: number, value: string) => {
		// Only allow numbers
		if (value && !/^\d$/.test(value)) return;

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		// Auto-focus next input
		if (value && index < 5) {
			const nextInput = document.getElementById(
				`code-${index + 1}`,
			) as HTMLInputElement;
			nextInput?.focus();
		}

		// Clear error when user starts typing
		if (error) setError("");
	};

	// Handle backspace key
	const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			const prevInput = document.getElementById(
				`code-${index - 1}`,
			) as HTMLInputElement;
			prevInput?.focus();
		}
	};

	// Handle paste event
	const handlePaste = (e: React.ClipboardEvent) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("text").trim();

		// Only allow 6 digits
		if (/^\d{6}$/.test(pastedData)) {
			const digits = pastedData.split("");
			setCode(digits);

			// Focus last input
			const lastInput = document.getElementById("code-5") as HTMLInputElement;
			lastInput?.focus();
		}
	};

	// Handle form submission
	const handleSubmit = async () => {
		const verificationCode = code.join("");

		// Validation
		if (verificationCode.length !== 6) {
			setError("Please enter all 6 digits");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			// TODO: Implement verification logic with Supabase
			console.log("Verifying code:", verificationCode);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Redirect to dashboard on success
			router.push("/dashboard");
		} catch (err) {
			setError("Invalid verification code. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	// Handle resend code
	const handleResendCode = async () => {
		setIsLoading(true);

		try {
			// TODO: Implement resend logic with Supabase
			console.log("Resending verification code");

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Clear inputs and focus first
			setCode(["", "", "", "", "", ""]);
			const firstInput = document.getElementById("code-0") as HTMLInputElement;
			firstInput?.focus();
		} catch (err) {
			setError("Failed to resend code. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			className="min-h-screen flex bg-gradient-to-br from-landing-bg via-deep-bg via-55% to-vibrant-orange"
			style={{ backgroundAttachment: "fixed" }}>
			{/* Verification Form (Modal Style) - Centered */}
			<div className="w-full flex items-center justify-center p-8 lg:p-12">
				<Modal
					title="Verify your email"
					subtitle="We've sent a verification email to ginorubengiorgi@gmail.com, please enter the code below."
					maxWidth="md">
					{/* 6-digit code inputs */}
					<div className="flex justify-between gap-2">
						{code.map((digit, index) => (
							<input
								key={index}
								id={`code-${index}`}
								type="text"
								inputMode="numeric"
								pattern="[0-9]*"
								maxLength={1}
								value={digit}
								onChange={(e) => handleInputChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								onPaste={index === 0 ? handlePaste : undefined}
								className={`w-12 h-14 text-center text-2xl font-bold rounded-lg border-2 ${
									error
										? "border-red-500 bg-red-500/10 text-red-500"
										: "border-white-pearl/30 bg-white-pearl/5 text-white-pearl focus:border-vibrant-orange"
								} focus:outline-none focus:ring-2 focus:ring-vibrant-orange/20 transition-all duration-200`}
							/>
						))}
					</div>

					{/* Error message */}
					{error && (
						<div className="flex items-center gap-2 text-red-500 text-sm">
							<BiSolidError className="text-lg" />
							<span>{error}</span>
						</div>
					)}

					{/* Verify Button */}
					<Button
						onClick={handleSubmit}
						className="w-full h-11 rounded-xl text-sm font-semibold">
						{isLoading ? "Verifying..." : "Verify Email"}
					</Button>

					{/* Resend Code */}
					<div className="text-center pt-4">
						<p className="text-white-pearl/70 text-sm mb-2">
							Didn't receive the code?
						</p>
						<button
							onClick={handleResendCode}
							disabled={isLoading}
							className="text-royal-blue hover:underline text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
							{isLoading ? "Sending..." : "Resend Code"}
						</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}
