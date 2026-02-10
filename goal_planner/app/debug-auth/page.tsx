"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthDebug() {
	const [user, setUser] = useState<any>(null);
	const [session, setSession] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [isDeleting, setIsDeleting] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const checkAuth = async () => {
			const supabase = createClient();

			// Get current user
			const { data: userData } = await supabase.auth.getUser();
			setUser(userData.user);

			// Get current session (includes access_token)
			const { data: sessionData } = await supabase.auth.getSession();
			setSession(sessionData.session);

			setLoading(false);
		};

		checkAuth();
	}, []);

	const handleLogout = async () => {
		const supabase = createClient();
		await supabase.auth.signOut();
		router.push("/landing");
	};

	const handleDeleteAccount = async () => {
		if (
			!confirm(
				"Are you sure you want to delete your account? This action cannot be undone.",
			)
		) {
			return;
		}

		setIsDeleting(true);
		try {
			const supabase = createClient();

			console.log("Attempting to delete account...");

			// Delete user account using RPC function
			const { error } = await supabase.rpc("delete_own_account");

			console.log("Delete response:", { error });

			if (error) {
				console.error("Error deleting account:", error);
				alert(`Error deleting account: ${error.message}`);
				setIsDeleting(false);
				return;
			}
			alert("Account deleted successfully!");

			// Redirect to landing after successful deletion
			router.push("/landing");
		} catch (error) {
			console.error("Error deleting account:", error);
			alert(
				`Error deleting account: ${error instanceof Error ? error.message : "Please try again."}`,
			);
			setIsDeleting(false);
		}
	};

	if (loading) return <div>Checking auth...</div>;

	return (
		<div className="p-6 bg-modal-bg rounded-lg border border-vibrant-orange">
			<h2 className="text-xl font-bold mb-4 text-white-pearl">Auth Status</h2>

			<div className="space-y-4">
				<div className="text-white-pearl">
					<strong>Status:</strong>{" "}
					{user ? (
						<span className="text-sea-green">✅ Logged in</span>
					) : (
						<span className="text-carmin">❌ Not logged in</span>
					)}
				</div>

				{user && (
					<>
						<div className="text-white-pearl">
							<strong>Email:</strong> {user.email}
						</div>
						<div className="text-white-pearl">
							<strong>User ID:</strong> {user.id}
						</div>
						<div className="text-white-pearl">
							<strong>Email Verified:</strong>{" "}
							{user.email_confirmed_at ? "✅ Yes" : "❌ No"}
						</div>

						{/* User Metadata Section */}
						<div className="text-white-pearl">
							<strong>Full Name:</strong>{" "}
							{user.user_metadata?.full_name || "Not set"}
						</div>

						{/* Show all metadata if there's more */}
						{Object.keys(user.user_metadata || {}).length > 0 && (
							<div className="text-white-pearl/70 text-sm mt-4 p-2 bg-black/30 rounded">
								<div className="mb-2">
									<strong>User Metadata:</strong>
								</div>
								<pre className="text-xs overflow-x-auto">
									{JSON.stringify(user.user_metadata, null, 2)}
								</pre>
							</div>
						)}

						{session && (
							<div className="text-white-pearl/70 text-sm mt-4 p-2 bg-black/30 rounded">
								<div>
									<strong>Access Token:</strong>
								</div>
								<div className="break-all font-mono text-xs">
									{session.access_token.substring(0, 50)}...
								</div>
								<div className="mt-2 text-xs">
									Expires:{" "}
									{new Date(session.expires_at! * 1000).toLocaleString()}
								</div>
							</div>
						)}

						{/* Action Buttons */}
						<div className="flex gap-3 mt-6">
							<button
								onClick={handleLogout}
								className="px-4 py-2 bg-vibrant-orange text-white-pearl rounded hover:bg-vibrant-orange/80 transition-colors">
								Logout
							</button>

							<button
								onClick={handleDeleteAccount}
								disabled={isDeleting}
								className="px-4 py-2 bg-carmin text-white-pearl rounded hover:bg-carmin/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
								{isDeleting ? "Deleting..." : "Delete Account"}
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
