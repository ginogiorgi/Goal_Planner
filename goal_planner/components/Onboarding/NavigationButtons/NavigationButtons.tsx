import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Button from "@/components/ui/Button/Button";

interface NavigationButtonsProps {
    onPrevious?: () => void;
    onNext?: () => void;
    nextLabel?: string;
    nextHref?: string;
    showPrevious?: boolean;
}

const NavigationButtons = ({
    onPrevious,
    onNext,
    nextLabel = "Continue",
    nextHref,
    showPrevious = true,
}: NavigationButtonsProps) => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-[1001] border-t border-input-bg bg-deep-bg backdrop-blur-[6px] px-4 md:px-16 lg:px-64 xl:px-[320px] py-6">
            <div className="flex justify-between items-center w-full max-w-[800px] mx-auto">
                {showPrevious && onPrevious ? (
                    <button
                        onClick={onPrevious}
                        className="flex items-center gap-2 text-white-pearl hover:text-vibrant-orange transition font-text"
                    >
                        <TfiArrowLeft />
                        <span>Back</span>
                    </button>
                ) : (
                    <div />
                )}

                <Button
                    href={nextHref}
                    onClick={onNext}
                    className="flex items-center justify-center min-w-[180px] h-[56px] px-10 text-[16px] leading-[24px] tracking-[0.4px] gap-5"
                >
                    {nextLabel}
                    <TfiArrowRight />
                </Button>
            </div>
        </footer>
    );
};

export default NavigationButtons;
