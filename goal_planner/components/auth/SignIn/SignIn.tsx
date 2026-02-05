"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/InputField/InputField";

interface SignInProps {
	onClose: () => void;
}

const SignIn = ({ onClose }: SignInProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [keepLoggedIn, setKeepLoggedIn] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Validación simple
		setEmailError("");
		setPasswordError("");

		if (!email) {
			setEmailError("Email is required");
			return;
		}
		if (!password) {
			setPasswordError("Password is required");
			return;
		}

		console.log("Sign in:", { email, password, keepLoggedIn });
	};

	const handleLoginSubmit = () => {
		// Validación simple
		setEmailError("");
		setPasswordError("");

		if (!email) {
			setEmailError("Email is required");
			return;
		}
		if (!password) {
			setPasswordError("Password is required");
			return;
		}

		console.log("Sign in:", { email, password, keepLoggedIn });
	};

	return (
		<div className="fixed inset-0 bg-modal-bg/90 backdrop-blur-sm flex items-center justify-center z-50 ">
			<div className="w-full max-w-[440px] bg-modal-bg rounded-[28px] border-[3px] border-vibrant-orange shadow-[0_0_13.3px_0_hsl(var(--vibrant-orange))] px-14 py-10 my-4">
				<div className="flex flex-col items-center mb-6">
					<h1 className="text-white-pearl text-center font-montserrat text-4xl font-semibold">
						Login
					</h1>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Email Field */}
					<div>
						<InputField
							label="Email Address"
							type="email"
							placeholder="your@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{emailError && <span className="text-xs">{emailError}</span>}
					</div>

					{/* Password Field */}
					<div>
						<div className="flex items-center justify-between">
							<label className="text-white-pearl text-sm font-medium">
								Password
							</label>
							<Link
								href="/"
								className="text-royal-blue text-xs hover:underline">
								Forgot Password
							</Link>
						</div>
						<InputField
							label=""
							type="password"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{passwordError && <span className="text-xs">{passwordError}</span>}
					</div>

					{/* Keep me signed in */}
					<div className="flex items-center gap-2 pt-1">
						<button
							type="button"
							className="flex items-center justify-center w-4 h-4 rounded-sm border-2 border-vibrant-orange bg-transparent hover:bg-vibrant-orange/10 transition-colors"></button>
						<label className="text-white-pearl text-sm cursor-pointer">
							Keep me signed in
						</label>
					</div>

					{/* Login Button */}
					<Button
						onClick={handleLoginSubmit}
						className="w-full h-10 rounded-xl text-sm font-semibold">
						Login
					</Button>
				</form>

				{/* Divider */}
				<div className="relative my-6">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-input-bg"></div>
					</div>
					<div className="relative flex justify-center">
						<span className="px-2 bg-modal-bg text-white-pearl text-xs">
							or sign in with
						</span>
					</div>
				</div>

				{/* Google Sign In */}
				<Button
					onClick={() => console.log("Google sign in")}
					className="w-full h-10 rounded-xl text-base font-semibold">
					Sign in with Google
				</Button>

				{/* Sign Up Link */}
				<p className="text-center mt-6 text-white-pearl text-sm">
					Don't have an Account?{" "}
					<Link href="/" className="text-royal-blue hover:underline">
						Sign up here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
