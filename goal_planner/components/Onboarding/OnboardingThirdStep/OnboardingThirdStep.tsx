"use client";
import Link from "next/link";
import { TfiArrowLeft } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import CreativeIcon from "../../../public/Creative.svg";
import FitnessIcon from "../../../public/Fitness.svg";
import { GiAchievement } from "react-icons/gi";
import Image from "next/image";

interface OnboardingThirdStepProps {
    onPrevious: () => void;
}

const OnboardingThirdStep = ({ onPrevious }: OnboardingThirdStepProps) => {
    const goals = [
        {
            icon: "M15 30.5C13.2917 30.5 11.6771 30.1719 10.1562 29.5156C8.63542 28.8594 7.30729 27.9635 6.17188 26.8281C5.03646 25.6927 4.14062 24.3646 3.48438 22.8438C2.82812 21.3229 2.5 19.7083 2.5 18C2.5 16.2708 2.83854 14.6458 3.51562 13.125C4.19271 11.6042 5.10938 10.2812 6.26562 9.15625C7.42188 8.03125 8.77083 7.14062 10.3125 6.48438C11.8542 5.82812 13.5 5.5 15.25 5.5C16.9167 5.5 18.4896 5.78646 19.9688 6.35938C21.4479 6.93229 22.7448 7.72396 23.8594 8.73438C24.974 9.74479 25.8594 10.9427 26.5156 12.3281C27.1719 13.7135 27.5 15.2083 27.5 16.8125C27.5 19.2083 26.7708 21.0469 25.3125 22.3281C23.8542 23.6094 22.0833 24.25 20 24.25H17.6875C17.5 24.25 17.3698 24.3021 17.2969 24.4062C17.224 24.5104 17.1875 24.625 17.1875 24.75C17.1875 25 17.3438 25.3594 17.6562 25.8281C17.9688 26.2969 18.125 26.8333 18.125 27.4375C18.125 28.4792 17.8385 29.25 17.2656 29.75C16.6927 30.25 15.9375 30.5 15 30.5ZM8.125 19.25C8.66667 19.25 9.11458 19.0729 9.46875 18.7188C9.82292 18.3646 10 17.9167 10 17.375C10 16.8333 9.82292 16.3854 9.46875 16.0312C9.11458 15.6771 8.66667 15.5 8.125 15.5C7.58333 15.5 7.13542 15.6771 6.78125 16.0312C6.42708 16.3854 6.25 16.8333 6.25 17.375C6.25 17.9167 6.42708 18.3646 6.78125 18.7188C7.13542 19.0729 7.58333 19.25 8.125 19.25ZM11.875 14.25C12.4167 14.25 12.8646 14.0729 13.2188 13.7188C13.5729 13.3646 13.75 12.9167 13.75 12.375C13.75 11.8333 13.5729 11.3854 13.2188 11.0312C12.8646 10.6771 12.4167 10.5 11.875 10.5C11.3333 10.5 10.8854 10.6771 10.5312 11.0312C10.1771 11.3854 10 11.8333 10 12.375C10 12.9167 10.1771 13.3646 10.5312 13.7188C10.8854 14.0729 11.3333 14.25 11.875 14.25ZM18.125 14.25C18.6667 14.25 19.1146 14.0729 19.4688 13.7188C19.8229 13.3646 20 12.9167 20 12.375C20 11.8333 19.8229 11.3854 19.4688 11.0312C19.1146 10.6771 18.6667 10.5 18.125 10.5C17.5833 10.5 17.1354 10.6771 16.7812 11.0312C16.4271 11.3854 16.25 11.8333 16.25 12.375C16.25 12.9167 16.4271 13.3646 16.7812 13.7188C17.1354 14.0729 17.5833 14.25 18.125 14.25ZM21.875 19.25C22.4167 19.25 22.8646 19.0729 23.2188 18.7188C23.5729 18.3646 23.75 17.9167 23.75 17.375C23.75 16.8333 23.5729 16.3854 23.2188 16.0312C22.8646 15.6771 22.4167 15.5 21.875 15.5C21.3333 15.5 20.8854 15.6771 20.5312 16.0312C20.1771 16.3854 20 16.8333 20 17.375C20 17.9167 20.1771 18.3646 20.5312 18.7188C20.8854 19.0729 21.3333 19.25 21.875 19.25ZM15 28C15.1875 28 15.3385 27.9479 15.4531 27.8438C15.5677 27.7396 15.625 27.6042 15.625 27.4375C15.625 27.1458 15.4688 26.8021 15.1562 26.4062C14.8438 26.0104 14.6875 25.4167 14.6875 24.625C14.6875 23.75 14.9896 23.0521 15.5938 22.5312C16.1979 22.0104 16.9375 21.75 17.8125 21.75H20C21.375 21.75 22.5521 21.349 23.5312 20.5469C24.5104 19.7448 25 18.5 25 16.8125C25 14.2917 24.0365 12.1927 22.1094 10.5156C20.1823 8.83854 17.8958 8 15.25 8C12.4167 8 10 8.96875 8 10.9062C6 12.8438 5 15.2083 5 18C5 20.7708 5.97396 23.1302 7.92188 25.0781C9.86979 27.026 12.2292 28 15 28Z",
            title: "Master UI Design",
            category: "Creative",
            targetDate: "Dec 31, 2026",
        },
        {
            icon: "M16.75 30.375L15 28.625L19.4375 24.1875L8.8125 13.5625L4.375 18L2.625 16.25L4.375 14.4375L2.625 12.6875L5.25 10.0625L3.5 8.25L5.25 6.5L7.0625 8.25L9.6875 5.625L11.4375 7.375L13.25 5.625L15 7.375L10.5625 11.8125L21.1875 22.4375L25.625 18L27.375 19.75L25.625 21.5625L27.375 23.3125L24.75 25.9375L26.5 27.75L24.75 29.5L22.9375 27.75L20.3125 30.375L18.5625 28.625L16.75 30.375Z",
            title: "Run Half Marathon",
            category: "Health & Fitness",
            targetDate: "Nov 15, 2026",
        },
    ];

    return (
        <div className="min-h-screen bg-deep-bg flex flex-col">
            {/* Header with Progress */}
            <header className="px-4 md:px-16 lg:px-96 pt-4">
                <div className="flex justify-between items-end mb-1">
                    <div className="text-vibrant-orange font-text text-xs font-bold leading-[16px] tracking-[1.2px] uppercase">
                        Step 3 of 3
                    </div>
                    <div className=" text-input-text font-text text-xs font-medium leading-[16px] uppercase">
                        Final Commitment
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
                    <div
                        className="h-full bg-vibrant-orange rounded-full bg-main-gradient"
                        style={{ width: "100%" }}
                    />
                </div>
            </header>

            {/*main content*/}
            <main className="flex-1 px-4 md:px-10 lg:px-20 md:pt-4 overflow-y-auto pb-24">
                <div className="max-w-[1000px] mx-auto">
                    <div className="mt-6 mb-10 px-4 md:px-10 lg:px-20">
                        <h1 className=" text-white-pearl font-title font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.025em] mb-2">
                            You're All Set
                        </h1>
                        <p className="text-input-text font-text font-normal text-lg md:text-md leading-[1.4] max-w-[600px]">
                            Here is a summary of your created goals. You can add
                            more now or jump straight into your dashboard.
                        </p>
                    </div>

                    {/* Goals Summary */}
                    <div className="space-y-4 mb-12 max-w-[700px] mx-auto max-md:px-4">
                        {goals.map((goal, index) => (
                            <div
                                key={index}
                                className="max-h-[85px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[32px] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-vibrant-orange rounded-[24px] flex items-center justify-center flex-shrink-0">
                                        <Image
                                            src={
                                                goal.category === "Creative"
                                                    ? CreativeIcon
                                                    : FitnessIcon
                                            }
                                            alt={goal.category}
                                            className="w-8 h-8 filter brightness-0 invert"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white-pearl font-manrope font-bold text-base md:text-lg leading-[1.4] mb-1">
                                            {goal.title}
                                        </h3>
                                        <p className="text-white-pearl font-manrope font-medium text-base md:text-lg leading-[1.4]">
                                            {goal.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-input-text font-text font-bold text-xs leading-[1.5] tracking-[1px] uppercase">
                                            Target Date
                                        </span>
                                    </div>
                                    <span className="text-white-pearl font-text font-semibold text-base leading-[1.5]">
                                        {goal.targetDate}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Add Another Goal Button */}
                        <button className="w-full py-4 border-2 border-dashed border-[rgba(255,85,0,0.4)] bg-[rgba(255,255,255,0.01)] rounded-[16px] flex items-center justify-center gap-2 hover:border-vibrant-orange transition-colors">
                            <div className="w-6 h-6 border-2 border-vibrant-orange rounded-full flex items-center justify-center">
                                <FaPlus
                                    size={10}
                                    className="text-vibrant-orange"
                                />
                            </div>
                            <span className="text-vibrant-orange font-text font-normal text-sm leading-[18px] tracking-[0.35px]">
                                Add Another Goal
                            </span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 z-[1001] border-t border-input-bg bg-deep-bg backdrop-blur-[6px] px-4 md:px-16 lg:px-64 xl:px-[320px] py-6">
                <div className="flex justify-between items-center w-full max-w-[800px] mx-auto">
                    <button
                        onClick={onPrevious}
                        className="flex items-center gap-2 text-input-text hover:text-white-pearl transition-colors"
                    >
                        <TfiArrowLeft />
                        <span className="font-text">Back</span>
                    </button>

                    <Link
                        href="/"
                        className="flex items-center justify-center min-w-[180px] h-[56px] px-10 bg-vibrant-orange text-white font-text font-bold text-[16px] leading-[24px] tracking-[0.4px] rounded-[7px] shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] hover:opacity-90 transition-opacity gap-5"
                    >
                        Start My Journey
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default OnboardingThirdStep;
