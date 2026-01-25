import Link from "next/link";
import Image from "next/image";
import { TfiArrowRight } from "react-icons/tfi";
import CalendarImg from "../../../public/CalendarScreenshot.png";

interface OnboardingFirstStepProps {
	onNext: () => void;
}

const OnboardingFirstStep = ({ onNext }: OnboardingFirstStepProps) => {
	return (
		<div className="min-h-screen bg-deep-bg flex flex-col">
			<header className="px-4 md:px-16 lg:px-64 pt-8">
				<div className="flex justify-between items-end mb-3">
					<div className="text-vibrant-orange font-manrope text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase">
						Step 1 of 3
					</div>
					<div className="text-white-pearl font-manrope text-[12px] font-medium leading-[16px] uppercase">
						Goal Selection
					</div>
				</div>
				<div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
					<div
						className="h-full bg-vibrant-orange rounded-full bg-main-gradient"
						style={{ width: "33.33%" }}
					/>
				</div>
			</header>

			<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-12">
				<div className="w-full flex flex-col items-center gap-12">
					<div className="w-full max-w-[500px] aspect-[16/10] relative">
						<Image
							src={CalendarImg}
							alt="GoalPlanner Dashboard Preview"
							className="w-full h-full object-contain rounded-[27px] border-[3px] border-input-bg"
							fill
						/>
					</div>

					<div className="flex flex-col items-center gap-9 text-center text-[24px] md:text-[30px] lg:text-[36px] leading-[1.2]">
						<h1 className="font-montserrat font-bold text-[40px] md:text-[52px] lg:text-[60px] leading-[1] tracking-[-0.025em]">
							<span className="text-white-pearl">Transform Your </span>
							<span className="text-vibrant-orange">Ambitions</span>
							<br />
							<span className="text-white-pearl">into Reality</span>
						</h1>

						<p className="font-manrope font-normal text-[18px] md:text-[20px] leading-[1.4] text-white-pearl max-w-[600px]">
							GoalPlanner helps you organize your life, track your habits, and
							achieve your biggest dreams through a simple, visual, and
							rewarding experience.
						</p>
					</div>
				</div>
			</main>

			<footer className="px-4 md:px-8 pb-12 pt-6 flex flex-col items-center gap-6">
				<button
					onClick={onNext}
					className="flex items-center justify-center w-full max-w-[384px] h-[64px] bg-vibrant-orange text-white-pearl font-manrope font-bold text-[18px] leading-[28px] rounded-[16px] shadow-[0_8px_30px_0_rgba(255,94,0,0.3)] hover:opacity-90 transition-opacity">
					Start Your Journey
					<TfiArrowRight />
				</button>
			</footer>
		</div>
	);
};

export default OnboardingFirstStep;
