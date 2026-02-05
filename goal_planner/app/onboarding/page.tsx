"use client";

import { useState, Suspense } from "react";

export const dynamic = "force-dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { TfiArrowRight } from "react-icons/tfi";
import ProgressBar from "@/components/Onboarding/ProgressBar/ProgressBar";
import StepHeader from "@/components/Onboarding/StepHeader/StepHeader";
import NavigationButtons from "@/components/Onboarding/NavigationButtons/NavigationButtons";
import NewGoal from "@/components/common/NewGoal/NewGoal";
import Button from "@/components/ui/Button/Button";
import CalendarImg from "../../public/CalendarScreenshot.png";
import GoalCard from "@/components/common/GoalCard/GoalCard";
import { categories } from "@/lib/constants/categories";

export default function OnboardingPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentStep = parseInt(searchParams.get("step") || "1", 10);

	const handleNext = () => {
		router.push(`/onboarding?step=${currentStep + 1}`);
	};

	const handlePrevious = () => {
		router.push(`/onboarding?step=${currentStep - 1}`);
	};

	const stepLabels = [
		"GOAL SELECTION",
		"GOAL CONFIGURATION",
		"FINAL COMMITMENT",
	];

	const [goals, setGoals] = useState([
		{
			icon: categories.find((c) => c.name === "Creative")?.icon,
			title: "Master UI Design",
			category: "Creative",
			targetDate: "Dec 31, 2026",
			tasks: [
				{
					title: "Complete Figma course",
					days: "Mon, Wed, Fri",
					time: "10:00 AM",
				},
				{
					title: "Build portfolio website",
					days: "Tue",
				},
			],
			habits: [
				{
					title: "Daily design practice",
					days: "Everyday",
				},
			],
		},
		{
			icon: categories.find((c) => c.name === "Fitness")?.icon,
			title: "Run Half Marathon",
			category: "Fitness",
			targetDate: "Nov 15, 2026",
		},
		{
			icon: categories.find((c) => c.name === "Creative")?.icon,
			title: "Learn Spanish",
			category: "Creative",
			targetDate: "Aug 20, 2026",
		},
		{
			icon: categories.find((c) => c.name === "Health")?.icon,
			title: "Morning Meditation",
			category: "Health",
			targetDate: "Mar 31, 2026",
		},
	]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="min-h-screen bg-deep-bg flex flex-col">
				<ProgressBar
					currentStep={currentStep}
					totalSteps={3}
					stepLabel={stepLabels[currentStep - 1]}
				/>

				{/* Step 1: Welcome */}
				{currentStep === 1 && (
					<>
						<main className="flex-1 flex items-center pb-28 mx-28">
							<div className="flex items-center gap-12 w-full">
								<StepHeader
									title={
										<>
											Transform Your{" "}
											<span
												className="text-transparent bg-clip-text"
												style={{
													backgroundImage: "var(--main-gradient)",
												}}>
												Ambitions{" "}
											</span>
											into Reality
										</>
									}
									description="GoalPlanner helps you organize your life, track your habits, and achieve your biggest dreams through a simple, visual, and rewarding experience."
								/>
								<div className="w-5/12 flex-shrink-0">
									<Image
										src={CalendarImg}
										alt="GoalPlanner Dashboard Preview"
										className="w-full h-full object-contain rounded-3xl border-2 border-input-bg"
									/>
								</div>
							</div>
						</main>
						<footer className="fixed bottom-0 left-0 right-0 py-6 flex justify-center">
							<Button
								onClick={handleNext}
								className="flex items-center justify-center w-96 h-16 gap-5 font-semibold">
								Start Your Journey
								<TfiArrowRight />
							</Button>
						</footer>
					</>
				)}

				{/* Step 2: Define Goal */}
				{currentStep === 2 && (
					<>
						<main className="pt-4 pb-28 overflow-y-auto mx-28">
							<StepHeader
								title="Define Your First Goal"
								description="Break down your ambition into actionable daily or weekly tasks."
							/>
							<NewGoal />
						</main>
						<NavigationButtons
							onPrevious={handlePrevious}
							onNext={handleNext}
							nextLabel="Continue"
						/>
					</>
				)}

				{/* Step 3: Summary */}
				{currentStep === 3 && (
					<>
						<main className="pt-4 pb-28 overflow-y-auto mx-28">
							<StepHeader
								title="You're All Set"
								description="Here is a summary of your created goals. You can add more now or jump straight into your dashboard."
							/>
							{goals.map((goal, index) => (
								<GoalCard
									key={index}
									title={goal.title}
									description={goal.category}
									progress={50}
									targetDate={goal.targetDate}
									category={goal.category}
									tasks={goal.tasks || []}
									habits={goal.habits || []}
									onTaskAdd={() => console.log(`Add task to ${goal.title}`)}
									onHabitAdd={() => console.log(`Add habit to ${goal.title}`)}
									onTaskEdit={(taskIndex) =>
										console.log(`Edit task ${taskIndex} from ${goal.title}`)
									}
									onTaskDelete={(taskIndex) =>
										console.log(`Delete task ${taskIndex} from ${goal.title}`)
									}
									onHabitEdit={(habitIndex) =>
										console.log(`Edit habit ${habitIndex} from ${goal.title}`)
									}
									onHabitDelete={(habitIndex) =>
										console.log(`Delete habit ${habitIndex} from ${goal.title}`)
									}
									onEdit={() => console.log(`Edit ${goal.title}`)}
									onDelete={() => console.log(`Delete ${goal.title}`)}
								/>
							))}
						</main>
						<NavigationButtons
							onPrevious={handlePrevious}
							nextLabel="Start My Journey"
							nextHref="/calendar"
						/>
					</>
				)}
			</div>
		</Suspense>
	);
}
