import Image from "next/image";
import CreativeIcon from "../../../public/Creative.svg";
import FitnessIcon from "../../../public/Fitness.svg";

interface Goal {
    icon: string;
    title: string;
    category: string;
    targetDate: string;
}

interface GoalSummaryCardProps {
    goal: Goal;
}

const GoalSummaryCard = ({ goal }: GoalSummaryCardProps) => {
    return (
        <div className="bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[20px] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vibrant-orange rounded-[16px] flex items-center justify-center flex-shrink-0">
                    <Image
                        src={
                            goal.category === "Creative"
                                ? CreativeIcon
                                : FitnessIcon
                        }
                        alt={goal.category}
                        className="w-6 h-6 filter brightness-0 invert"
                    />
                </div>
                <div>
                    <h3 className="text-white-pearl font-manrope font-bold text-sm md:text-base leading-[1.3]">
                        {goal.title}
                    </h3>
                    <p className="text-input-text font-manrope font-medium text-xs md:text-sm leading-[1.3]">
                        {goal.category}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <span className="text-input-text font-text font-medium text-[10px] leading-[1.5] tracking-[0.5px] uppercase mb-0.5">
                    Target
                </span>
                <span className="text-white-pearl font-text font-semibold text-sm leading-[1.5]">
                    {goal.targetDate}
                </span>
            </div>
        </div>
    );
};

export default GoalSummaryCard;
