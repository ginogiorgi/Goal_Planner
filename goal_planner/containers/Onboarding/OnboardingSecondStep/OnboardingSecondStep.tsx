"use client";
import Link from "next/link";
import NewGoal from "../../../components/common/NewGoal/NewGoal";

interface OnboardingSecondStepProps {
	onNext: () => void;
	onPrevious: () => void;
}

const OnboardingSecondStep = ({
	onNext,
	onPrevious,
}: OnboardingSecondStepProps) => {
	return (
		<div className="min-h-screen bg-deep-bg flex flex-col">
			{/* Header with Progress */}
			<header className="px-4 md:px-16 lg:px-64 xl:px-[344px] pt-8">
				<div className="flex justify-between items-end mb-3">
					<div className="text-vibrant-orange font-manrope text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase">
						Step 2 of 3
					</div>
					<div className="text-[#94A3B8] font-manrope text-[12px] font-medium leading-[16px] tracking-[0.6px] uppercase">
						Goal Configuration
					</div>
				</div>
				{/* Progress Bar */}
				<div className="h-[6px] w-full bg-[#27272A] rounded-full overflow-hidden">
					<div
						className="h-full bg-vibrant-orange rounded-full shadow-[0_0_12px_0_rgba(255,94,0,0.5)]"
						style={{ width: "66.66%" }}
					/>
				</div>
			</header>
			{/*main content*/}
			<NewGoal />

			{/* Footer */}
			<footer className="border-t border-[#27272A] bg-[rgba(26,10,5,0.8)] backdrop-blur-[6px] px-4 md:px-16 lg:px-64 xl:px-[320px] py-6">
				<div className="flex justify-between items-center max-w-[800px] mx-auto">
					<button
						onClick={onPrevious}
						className="flex items-center gap-2 text-[#94A3B8] hover:text-pearl-white transition-colors">
						<svg
							width="18"
							height="22"
							viewBox="0 0 18 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5.86875 11.75L10.0688 15.95L9 17L3 11L9 5L10.0688 6.05L5.86875 10.25H15V11.75H5.86875Z"
								fill="currentColor"
							/>
						</svg>
						<span className="font-manrope font-medium text-[16px] leading-[24px]">
							Back
						</span>
					</button>

					<button
						onClick={onNext}
						className="flex items-center justify-center min-w-[180px] h-[56px] px-10 bg-vibrant-orange text-white font-manrope font-bold text-[16px] leading-[24px] tracking-[0.4px] rounded-[24px] shadow-[0_10px_15px_-3px_rgba(255,94,0,0.2),0_4px_6px_-4px_rgba(255,94,0,0.2)] hover:opacity-90 transition-opacity">
						Continue
						<svg
							className="ml-2"
							width="20"
							height="24"
							viewBox="0 0 20 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13.4792 12.8332H3.33333V11.1665H13.4792L8.8125 6.49984L10 5.33317L16.6667 11.9998L10 18.6665L8.8125 17.4998L13.4792 12.8332Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</footer>
		</div>
	);
};

export default OnboardingSecondStep;
