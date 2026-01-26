"use client";
import Image from "next/image";
import { TfiArrowRight } from "react-icons/tfi";
import CalendarImg from "../../../public/CalendarScreenshot.png";

interface OnboardingFirstStepProps {
	onNext: () => void;
}

const OnboardingFirstStep = ({ onNext }: OnboardingFirstStepProps) => {
	return (
		<div className="min-h-screen bg-deep-bg flex flex-col ">
			{/* Header with Progress */}
			<header className="px-4 md:px-16 lg:px-96 pt-4">
				<div className="flex justify-between items-end mb-1">
					<div className="text-vibrant-orange font-manrope text-xs font-bold leading-[16px] tracking-[1.2px] uppercase">
						Step 1 of 3
					</div>
					<div className=" text-input-text font-manrope text-xs font-medium leading-[16px] uppercase">
						Goal Selection
					</div>
				</div>
				{/* Progress Bar */}
				<div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
					<div
						className="h-full bg-vibrant-orange rounded-full bg-main-gradient"
						style={{ width: "33.33%" }}
					/>
				</div>
			</header>
			{/* Image and Text */}
			<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-4">
				<div className="w-full flex flex-col items-center gap-8">
					<div className="w-full max-w-[400px] aspect-[16/10] relative">
						<Image
							src={CalendarImg}
							alt="GoalPlanner Dashboard Preview"
							className="w-full h-full object-contain rounded-[27px] border-[3px] border-input-bg"
							fill
						/>
					</div>

					<div className="flex flex-col items-center gap-6 text-center text-2xl md:text-3xl lg:text-4xl leading-[1.2]">
						<h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl leading-[1] tracking-[-0.025em]">
							<span className="text-white-pearl">Transform Your </span>
							<span className="text-vibrant-orange">Ambitions</span>
							<br />
							<span className="text-white-pearl">into Reality</span>
						</h1>

						<p className="font-manrope font-normal text-base md:text-md leading-[1.4] text-white-pearl max-w-[600px]">
							GoalPlanner helps you organize your life, track your habits, and
							achieve your biggest dreams through a simple, visual, and
							rewarding experience.
						</p>
					</div>
				</div>
			</main>
			{/* Footer */}
			<footer className="px-4 md:px-8 pb-8 flex flex-col items-center gap-4">
				<button
					onClick={onNext}
					className="flex items-center justify-center w-full max-w-[384px] h-[64px] bg-vibrant-orange text-white-pearl font-manrope font-bold text-md leading-[28px] rounded-[7px] shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] hover:opacity-90 transition-opacity gap-5">
					Start Your Journey
					<TfiArrowRight />
				</button>
			</footer>
		</div>
	);
};

export default OnboardingFirstStep;
