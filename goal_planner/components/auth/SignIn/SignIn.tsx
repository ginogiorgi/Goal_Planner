"use client";
import { useState } from "react";

interface SignInProps {
    onClose: () => void;
}

const SignIn = ({ onClose }: SignInProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [emailError, setEmailError] = useState("Email is required");
    const [passwordError, setPasswordError] = useState("Password is required");

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

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-deep-bg border-2 border-vibrant-orange rounded-2xl p-8 w-full max-w-md mx-4 shadow-[0px_0px_20px_4px_rgba(217,78,6,0.6)]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white-pearl hover:text-vibrant-orange transition text-2xl"
                >
                    ×
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2
                        className="font-title text-3xl font-bold text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "var(--main-gradient)",
                        }}
                    >
                        Welcome Back
                    </h2>
                    <p className="font-text text-white-pearl/70 mt-2">
                        Sign in to continue
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block font-text text-white-pearl mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white-pearl font-text focus:outline-none transition ${
                                emailError
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-white-pearl/20 focus:border-vibrant-orange"
                            }`}
                            placeholder="your@email.com"
                        />
                        {emailError && (
                            <p className="mt-1 text-sm text-red-500 font-text">
                                {emailError}
                            </p>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label
                                htmlFor="password"
                                className="font-text text-white-pearl"
                            >
                                Password
                            </label>
                            <a
                                href="#"
                                className="font-text text-sm text-vibrant-orange hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 pr-12 bg-black/40 border rounded-lg text-white-pearl font-text focus:outline-none transition ${
                                    passwordError
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-white-pearl/20 focus:border-vibrant-orange"
                                }`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white-pearl/60 hover:text-vibrant-orange transition"
                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="mt-1 text-sm text-red-500 font-text">
                                {passwordError}
                            </p>
                        )}
                    </div>

                    {/* Keep me logged in */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="keepLoggedIn"
                            checked={keepLoggedIn}
                            onChange={(e) => setKeepLoggedIn(e.target.checked)}
                            className="w-4 h-4 bg-black/40 border border-white-pearl/20 rounded text-vibrant-orange focus:ring-vibrant-orange focus:ring-2"
                        />
                        <label
                            htmlFor="keepLoggedIn"
                            className="ml-2 font-text text-sm text-white-pearl cursor-pointer"
                        >
                            Keep me logged in
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-title font-semibold text-lg text-white-pearl transition hover:opacity-90"
                        style={{
                            background: "var(--main-gradient)",
                        }}
                    >
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center">
                        <div className="flex-grow border-t border-white-pearl/20"></div>
                        <span className="flex-shrink mx-4 font-text text-sm text-white-pearl/60">
                            or sign in with
                        </span>
                        <div className="flex-grow border-t border-white-pearl/20"></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        className="w-full py-3 rounded-lg font-title font-semibold text-lg text-white-pearl transition hover:opacity-90 bg-white/10 border border-white-pearl/20 hover:border-vibrant-orange flex items-center justify-center gap-3"
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="font-text text-white-pearl/70 text-sm">
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="text-vibrant-orange hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
