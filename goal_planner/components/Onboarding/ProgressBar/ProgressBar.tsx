interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    stepLabel: string;
}

const ProgressBar = ({
    currentStep,
    totalSteps,
    stepLabel,
}: ProgressBarProps) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <header className="px-4 md:px-16 lg:px-96 pt-4">
            <div className="flex justify-between items-end mb-1">
                <div className="text-vibrant-orange font-text text-xs font-bold leading-[16px] tracking-[1.2px] uppercase">
                    Step {currentStep} of {totalSteps}
                </div>
                <div className="text-input-text font-text text-xs font-medium leading-[16px] uppercase">
                    {stepLabel}
                </div>
            </div>
            <div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
                <div
                    className="h-full bg-vibrant-orange rounded-full bg-main-gradient transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </header>
    );
};

export default ProgressBar;
