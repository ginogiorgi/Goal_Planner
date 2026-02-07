"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiSolidError } from "react-icons/bi";
import Modal from "@/components/ui/Modal/Modal";
import InputField from "@/components/ui/InputField/InputField";
import Button from "@/components/ui/Button/Button";

export default function ChangePassword() {
	const router = useRouter();
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Handle form submission
	const handleSubmit = async () => {
		// Validation
		if (!newPassword) {
			setError("New password is required");
			return;
		}

		if (newPassword.length < 8) {
			setError("Password must be at least 8 characters long");
			return;
		}

		if (newPassword !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			// TODO: Implement change password logic with Supabase
			console.log("Changing password");

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Show success message
			setSuccess(true);
		} catch (err) {
			setError("Failed to change password. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	// Handle input changes
	const handleNewPasswordChange = (value: string) => {
		setNewPassword(value);
		if (error) setError("");
	};

	const handleConfirmPasswordChange = (value: string) => {
		setConfirmPassword(value);
		if (error) setError("");
	};

	return (
		<div
			className="min-h-screen flex bg-gradient-to-br from-landing-bg via-deep-bg via-55% to-vibrant-orange"
			style={{ backgroundAttachment: "fixed" }}>
			{/* Change Password Form (Modal Style) - Centered */}
			<div className="w-full flex items-center justify-center p-8 lg:p-12">
				<Modal
					title="Change Password"
					subtitle="Enter your new password and confirm it to update your account."
					maxWidth="md">
					{!success ? (
						<>
							{/* New Password Input */}
							<InputField
								label="New Password"
								type="password"
								placeholder="Enter your new password"
								value={newPassword}
								onChange={(e) => handleNewPasswordChange(e.target.value)}
								labelClassName="block text-white-pearl mb-2 text-sm font-medium"
								showPasswordToggle={true}
								isPasswordVisible={showNewPassword}
								onPasswordToggle={() => setShowNewPassword(!showNewPassword)}
							/>

							{/* Confirm Password Input */}
							<InputField
								label="Confirm Password"
								type="password"
								placeholder="Confirm your new password"
								value={confirmPassword}
								onChange={(e) => handleConfirmPasswordChange(e.target.value)}
								labelClassName="block text-white-pearl mb-2 text-sm font-medium"
								showPasswordToggle={true}
								isPasswordVisible={showConfirmPassword}
								onPasswordToggle={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
							/>

							{/* Error message */}
							{error && (
								<div className="flex items-center gap-2 text-red-500 text-sm">
									<BiSolidError className="text-lg" />
									<span>{error}</span>
								</div>
							)}

							{/* Change Password Button */}
							<Button
								onClick={handleSubmit}
								className="w-full h-11 rounded-xl text-sm font-semibold">
								{isLoading ? "Changing..." : "Change Password"}
							</Button>

							{/* Back to Sign In */}
							<div className="text-center pt-4 border-t border-input-bg">
								<p className="text-white-pearl/70 text-sm">
									Remember your password?{" "}
									<Link
										href="/signin"
										className="text-vibrant-orange hover:text-vibrant-orange/80 font-medium transition-colors">
										Sign In
									</Link>
								</p>
							</div>
						</>
					) : (
						/* Success State */
						<div className="text-center space-y-4">
							<div className="w-16 h-16 bg-sea-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-sea-green"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<h3 className="text-white-pearl text-xl font-semibold">
								Password Changed!
							</h3>
							<p className="text-white-pearl/80 text-base">
								Your password has been successfully updated. You can now sign in
								with your new password.
							</p>
							<div className="pt-4 border-t border-input-bg">
								<Link
									href="/signin"
									className="inline-flex items-center justify-center w-full h-11 rounded-xl text-sm font-semibold bg-vibrant-orange text-white-pearl hover:bg-vibrant-orange/90 transition-all duration-200">
									Sign In
								</Link>
							</div>
						</div>
					)}
				</Modal>
			</div>
		</div>
	);
}
