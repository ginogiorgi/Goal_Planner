"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthDebug() {
	const [user, setUser] = useState<any>(null);
	const [session, setSession] = useState<any>(null);
	const [loading, setLoading] = useState(true);

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

						<button
							onClick={async () => {
								const supabase = createClient();
								await supabase.auth.signOut();
								window.location.reload();
							}}
							className="mt-4 px-4 py-2 bg-carmin text-white rounded hover:bg-carmin/80">
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}
