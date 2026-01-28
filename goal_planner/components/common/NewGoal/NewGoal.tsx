import { useState } from "react";
import Image from "next/image";
import HealthIcon from "../../../public/Health.svg";
import CareerIcon from "../../../public/Career.svg";
import AcademicIcon from "../../../public/Academic.svg";
import FinanceIcon from "../../../public/Finance.svg";
import FitnessIcon from "../../../public/Fitness.svg";
import SkillIcon from "../../../public/Skill.svg";
import CreativeIcon from "../../../public/Creative.svg";
import SocialIcon from "../../../public/Social.svg";
import TaskHabitColumn from "../TaskHabitColumn/TaskHabitColumn";
const NewGoal = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedColor, setSelectedColor] = useState("#D94E06");

    const categories = [
        {
            name: "Health",
            icon: HealthIcon,
        },
        {
            name: "Career",
            icon: CareerIcon,
        },
        {
            name: "Academic",
            icon: AcademicIcon,
        },
        {
            name: "Finance",
            icon: FinanceIcon,
        },
        {
            name: "Fitness",
            icon: FitnessIcon,
        },
        {
            name: "Skill",
            icon: SkillIcon,
        },
        {
            name: "Creative",
            icon: CreativeIcon,
        },
        {
            name: "Social",
            icon: SocialIcon,
        },
    ];

    const colors = ["#D94E06", "#1F6AE1", "#2EBB57", "#C0392B", "#F0E23A"];

    return (
        <div className="px-4 md:px-10 lg:px-20 py-4">
            <div className="max-w-[1000px] mx-auto">
                {/* Category Selection */}
                <div className="mb-4">
                    <label className="block text-white-pearl font-text font-semibold text-base leading-[16px] tracking-[1.2px] uppercase mb-3">
                        Select Category
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() =>
                                    setSelectedCategory(category.name)
                                }
                                className={`relative h-24 w-24 flex flex-col items-center justify-center gap-0.5 rounded-[7px] transition-all ${
                                    selectedCategory === category.name
                                        ? "bg-vibrant-orange border-2 border-vibrant-orange shadow-[0_0_15px_0_rgba(255,110,66,0.3)]"
                                        : "bg-input-bg border border-[rgba(255,255,255,0.05)] hover:border-vibrant-orange/50"
                                }`}
                            >
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    className={`object-contain transition-colors ${
                                        selectedCategory === category.name
                                            ? "filter brightness-0 invert"
                                            : ""
                                    }`}
                                />
                                <span
                                    className={`font-text font-medium text-xs pt-2 leading-[8px] text-center text-white-pearl`}
                                >
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Goal Name and Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-white-pearl font-text font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
                            Goal Name
                        </label>
                        <input
                            type="text"
                            className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-text text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
                            placeholder="e.g., Master UI Design"
                        />
                    </div>
                    <div>
                        <label className="block text-white-pearl font-text font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
                            Description
                        </label>
                        <input
                            type="text"
                            className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-text text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
                            placeholder="Describe your goal..."
                        />
                    </div>
                </div>

                {/* Date and Color Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-white-pearl font-text font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-text text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
                            style={
                                {
                                    colorScheme: "dark",
                                } as React.CSSProperties
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-white-pearl font-text font-semibold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
                            Target Date
                        </label>
                        <input
                            type="date"
                            className="w-full h-[44px] bg-input-bg border border-[rgba(255,255,255,0.05)] rounded-[7px] px-3 text-white-pearl font-text text-[15px] focus:outline-none focus:border-vibrant-orange transition-colors"
                            style={
                                {
                                    colorScheme: "dark",
                                } as React.CSSProperties
                            }
                        />
                    </div>
                    <div>
                        <label className="block text-white-pearl font-text font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase mb-2">
                            Color Tag
                        </label>
                        <div className="flex items-center gap-2 h-[44px]">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-5 h-5 rounded-full transition-all ${
                                        selectedColor === color
                                            ? "shadow-[0_0_0_2px_rgba(255,255,255,0.3),0_0_0_4px_rgba(255,255,255,0.1)] scale-110"
                                            : "hover:scale-110"
                                    }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tasks and Daily Habits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-7">
                    <TaskHabitColumn
                        type="task"
                        items={[
                            {
                                title: "Task 1",
                                days: "Mon, Wed, Fri",
                                time: "10:00 AM",
                            },
                        ]}
                        size="large"
                    />
                    <TaskHabitColumn type="habit" items={[]} size="large" />
                </div>
            </div>
        </div>
    );
};

export default NewGoal;
