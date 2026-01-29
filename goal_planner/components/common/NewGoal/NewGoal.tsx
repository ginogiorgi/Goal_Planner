import { useState } from "react";
import Image from "next/image";
import TaskHabitColumn from "../TaskHabitColumn/TaskHabitColumn";
import InputField from "../../ui/InputField/InputField";
import { categories, colors } from "@/lib/constants/categories";

const NewGoal = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedColor, setSelectedColor] = useState("#D94E06");

    return (
        <div className="py-4 px-4">
            <div className="bg-modal-bg p-8 border border-input-bg rounded-3xl shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)] mb-8">
                {/* Category Selection */}
                <div className="mb-8">
                    <label className="block text-white-pearl mb-4">
                        SELECT CATEGORY
                    </label>
                    <div className="grid grid-cols-8 justify-items-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() =>
                                    setSelectedCategory(category.name)
                                }
                                className={`relative h-24 w-24 flex items-center justify-center rounded-3xl transition-all ${
                                    selectedCategory === category.name
                                        ? "bg-vibrant-orange shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)]"
                                        : "bg-input-bg hover:shadow-[0px_0px_10px_2px_rgba(217,78,6,0.8)]"
                                }`}
                            >
                                <div className="absolute top-[38%] -translate-y-1/2">
                                    <Image
                                        src={category.icon}
                                        alt={category.name}
                                        width={36}
                                        height={36}
                                        className={`object-contain transition-colors ${
                                            selectedCategory === category.name
                                                ? "filter brightness-0 invert"
                                                : ""
                                        }`}
                                    />
                                </div>
                                <span className="absolute bottom-3 text-xs text-white-pearl">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* Goal Name and Description */}
                <div className="grid grid-cols-2 gap-9 mb-8">
                    <InputField
                        label="GOAL NAME"
                        placeholder="Master UI Design"
                    />
                    <InputField
                        label="DESCRIPTION"
                        placeholder="Describe your goal"
                    />
                </div>
                {/* Date and Color Selection */}
                <div className="grid grid-cols-3 gap-9 mb-4">
                    <InputField label="START DATE" type="date" />
                    <InputField label="TARGET DATE" type="date" />
                    <div>
                        <label className="block text-white-pearl mb-4">
                            COLOR TAG
                        </label>
                        <div className="flex items-center gap-2 w-full h-12">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-6 h-6 rounded-full transition-all ${
                                        selectedColor === color
                                            ? "scale-110"
                                            : "hover:scale-110"
                                    }`}
                                    style={{
                                        backgroundColor: color,
                                        boxShadow:
                                            selectedColor === color
                                                ? `0 0 10px 2px ${color}80`
                                                : "none",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tasks and Daily Habits */}
            <div className="grid grid-cols-2 gap-14">
                <TaskHabitColumn
                    type="task"
                    items={[
                        {
                            title: "Walk the dog",
                            days: "Tue, Wed, Fri",
                            time: "10:00 AM",
                        },
                        {
                            title: "Go to school",
                            days: "Wen, Sun",
                        },
                        {
                            title: "Clean room",
                        },
                    ]}
                />
                <TaskHabitColumn
                    type="habit"
                    items={[
                        {
                            title: "Go running",
                            days: "Tue",
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default NewGoal;
