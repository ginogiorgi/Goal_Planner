"use client";
import Link from "next/link";
import NewGoal from "../../../components/common/NewGoal/NewGoal";
import { TfiArrowRight, TfiArrowLeft } from "react-icons/tfi";
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
			<header className="px-4 md:px-16 lg:px-96 pt-4">
				<div className="flex justify-between items-end mb-1">
					<div className="text-vibrant-orange font-manrope text-xs font-bold leading-[16px] tracking-[1.2px] uppercase">
						Step 2 of 3
					</div>
					<div className=" text-input-text font-manrope text-xs font-medium leading-[16px] uppercase">
						Goal Configuration
					</div>
				</div>
				{/* Progress Bar */}
				<div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
					<div
						className="h-full bg-vibrant-orange rounded-full bg-main-gradient"
						style={{ width: "66.66%" }}
					/>
				</div>
			</header>
			{/*main content*/}
			<main className="flex-1 px-4 md:px-10 lg:px-20 md:pt-4 overflow-y-auto">
				<div className="max-w-[1280px] mx-auto">
					<div className="mb-6">
						<h1 className=" text-white-pearl font-montserrat font-bold text-3xl md:text-3xl leading-[1.1] tracking-[-0.025em] mb-2">
							Define Your First Goal
						</h1>
						<p className="text-input-text font-manrope font-normal text-base md:text-md leading-[1.4] max-w-[600px]">
							Break down your ambition into actionable daily or weekly tasks.
						</p>
					</div>
				</div>
			</main>
			<NewGoal />
			{/* Footer */}
			<footer className="border-t border-input-bg bg-deep-bg backdrop-blur-[6px] px-4 md:px-16 lg:px-64 xl:px-[320px] py-6">
				<div className="flex justify-between items-center w-full max-w-[800px] mx-auto">
					<button
						onClick={onPrevious}
						className="flex items-center gap-2 text-input-text hover:text-white-pearl transition-colors">
						<TfiArrowLeft />
						<span className="font-manrope">Back</span>
					</button>

					<button
						onClick={onNext}
						className="flex items-center justify-center min-w-[180px] h-[56px] px-10 bg-vibrant-orange text-white font-manrope font-bold text-[16px] leading-[24px] tracking-[0.4px] rounded-[7px] shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] hover:opacity-90 transition-opacity gap-5 font-manrope">
						Continue
						<TfiArrowRight />
					</button>
				</div>
			</footer>
		</div>
	);
};

export default OnboardingSecondStep;
