"use client";
import { useState } from "react";
import OnboardingFirstStep from "@/components/Onboarding/OnboardingFirstStep/OnboardingFirstStep";
import OnboardingSecondStep from "@/components/Onboarding/OnboardingSecondStep/OnboardingSecondStep";

export default function OnboardingPage() {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handlePrevious = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<div>
			{currentStep === 1 && <OnboardingFirstStep onNext={handleNext} />}
			{currentStep === 2 && (
				<OnboardingSecondStep onNext={handleNext} onPrevious={handlePrevious} />
			)}
		</div>
	);
}
