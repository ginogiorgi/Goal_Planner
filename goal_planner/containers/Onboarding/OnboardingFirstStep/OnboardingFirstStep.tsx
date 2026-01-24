import Link from "next/link";

interface OnboardingFirstStepProps {
	onNext: () => void;
}

const OnboardingFirstStep = ({ onNext }: OnboardingFirstStepProps) => {
	return (
		<div className="min-h-screen bg-deep-bg flex flex-col">
			{/* Header with Progress */}
			<header className="px-4 md:px-16 lg:px-64 pt-8">
				<div className="flex justify-between items-end mb-3">
					<div className="text-vibrant-orange font-manrope text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase">
						Step 1 of 3
					</div>
					<div className="text-pearl-white font-manrope text-[12px] font-medium leading-[16px] uppercase">
						Goal Selection
					</div>
				</div>
				{/* Progress Bar */}
				<div className="h-[6px] w-full bg-[#27272A] rounded-full overflow-hidden">
					<div
						className="h-full bg-vibrant-orange rounded-full shadow-[0_0_8px_0_rgba(255,94,0,0.5)]"
						style={{ width: "33.33%" }}
					/>
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-12">
				<div className="w-full max-w-[500px] flex flex-col items-center gap-12">
					{/* Image Section */}
					<div className="w-full max-w-[500px] aspect-[500/341.86] relative">
						<img
							src="https://api.builder.io/api/v1/image/assets/TEMP/0c6372f9e9dc93ac5ef76b3639cce52ceffd8249?width=1000"
							alt="GoalPlanner Dashboard Preview"
							className="w-full h-full object-cover rounded-[27px] border-[3px] border-[#3D2B26]"
						/>
					</div>

					{/* Text Content */}
					<div className="flex flex-col items-center gap-6 text-center">
						<h1 className="font-montserrat font-bold text-[40px] md:text-[52px] lg:text-[60px] leading-[1] tracking-[-0.025em]">
							<span className="text-pearl-white">Transform Your </span>
							<span className="text-vibrant-orange">Ambitions</span>
							<br />
							<span className="text-pearl-white">into Reality</span>
						</h1>

						<p className="font-manrope font-normal text-[18px] md:text-[20px] leading-[1.4] text-pearl-white max-w-[500px]">
							GoalPlanner helps you organize your life, track your habits, and
							achieve your biggest dreams through a simple, visual, and
							rewarding experience.
						</p>
					</div>
				</div>
			</main>

			{/* Footer with Button */}
			<footer className="px-4 md:px-8 pb-12 pt-6 flex flex-col items-center gap-6">
				<button
					onClick={onNext}
					className="flex items-center justify-center w-full max-w-[384px] h-[64px] bg-vibrant-orange text-pearl-white font-manrope font-bold text-[18px] leading-[28px] rounded-[16px] shadow-[0_8px_30px_0_rgba(255,94,0,0.3)] hover:opacity-90 transition-opacity">
					Start Your Journey
					<svg
						className="ml-2"
						width="25"
						height="28"
						viewBox="0 0 25 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.069 14.9723H4.23218V13.0278H16.069L10.6245 7.58339L12.01 6.22228L19.7877 14.0001L12.01 21.7778L10.6245 20.4167L16.069 14.9723Z"
							fill="#F0EAD6"
						/>
					</svg>
				</button>
			</footer>
		</div>
	);
};

export default OnboardingFirstStep;
