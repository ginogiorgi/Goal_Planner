import { useState } from "react";
import Image from "next/image";
import TaskHabitColumn from "../TaskHabitColumn/TaskHabitColumn";
import clsx from "clsx";
import { categories } from "@/lib/constants/categories";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Badge = ({
    label,
    variant,
}: {
    label: string;
    variant: "ACTIVE" | "COMPLETED";
}) => (
    <span
        className={clsx(
            "inline-flex px-1 py-1 rounded-md font-semibold text-xs",
            variant === "ACTIVE" ? "bg-vibrant-orange" : "bg-green-500",
        )}
    >
        <span className="text-white-pearl font-semibold text-xs tracking-[1px]">
            {label}
        </span>
    </span>
);

interface Task {
    title: string;
    days?: string;
    time?: string;
}

interface Habit {
    title: string;
    days: string;
    time?: string;
}

interface GoalCardProps {
    title: string;
    description?: string;
    progress: number;
    targetDate: string;
    category: string;
    tasks?: Task[];
    habits?: Habit[];
    onEdit: () => void;
    onDelete: () => void;
    onTaskAdd: () => void;
    onHabitAdd: () => void;
    onTaskEdit: (index: number) => void;
    onTaskDelete: (index: number) => void;
    onHabitEdit: (index: number) => void;
    onHabitDelete: (index: number) => void;
}

export default function GoalCard({
    title,
    description,
    progress = 0,
    targetDate,
    category = "Creative",
    tasks = [],
    habits = [],
    onEdit,
    onDelete,
    onTaskAdd,
    onHabitAdd,
    onTaskEdit,
    onTaskDelete,
    onHabitEdit,
    onHabitDelete,
}: GoalCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Obtener el ícono desde categories basándose en la categoría
    const icon = categories.find((cat) => cat.name === category)?.icon;
    return (
        <div className="w-[70rem] rounded-3xl border border-input-bg bg-modal-bg">
            {/* Main Card Content */}
            <div
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-3 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Icon Badge */}
                <div className="w-10 h-10 bg-vibrant-orange rounded-[16px] flex items-center justify-center flex-shrink-0">
                    {icon && (
                        <Image
                            src={icon}
                            alt={category || "Goal"}
                            width={24}
                            height={24}
                            className="filter brightness-0 invert"
                        />
                    )}
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full relative">
                    {/* Title and Description */}
                    <div className="flex-1">
                        <div className="mb-1">
                            <h3 className="text-white-pearl font-bold font-manrope text-sm md:text-base leading-[1.3]">
                                {title}
                            </h3>
                        </div>
                        {description && (
                            <p className="font-medium text-input-text font-manrope text-xs md:text-sm leading-[1.3]">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Badge - Positioned absolutely */}
                    <div className="absolute left-44 -top-6">
                        <Badge
                            label={progress === 100 ? "COMPLETED" : "ACTIVE"}
                            variant={progress === 100 ? "COMPLETED" : "ACTIVE"}
                        />
                    </div>

                    {/* Progress Section */}
                    <div className="flex flex-col gap-2 w-full md:w-64 md:mr-12">
                        <div className="flex items-center justify-between">
                            <span className="text-white-pearl font-text font-medium text-sm leading-[20px]">
                                Progress
                            </span>
                            <span className="text-white-pearl font-text font-semibold text-sm leading-[20px]">
                                {progress}%
                            </span>
                        </div>
                        <div className="h-[6px] w-full bg-progress-empty rounded-full overflow-hidden">
                            <div
                                className="h-full bg-vibrant-orange rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Target Date Section */}
                    <div className="flex flex-col items-end">
                        <span className="text-input-text font-text font-medium text-[10px] leading-[1.5] tracking-[0.5px] uppercase mb-0.5">
                            Target
                        </span>
                        <span className="text-white-pearl font-text font-semibold text-sm leading-[1.5]">
                            {targetDate}
                        </span>
                    </div>
                </div>

                {/* Menu Button */}
                <DropdownMenu
                    items={[
                        {
                            label: "Edit Goal",
                            onClick: onEdit,
                        },
                        {
                            label: "Delete Goal",
                            onClick: onDelete,
                            variant: "danger" as const,
                        },
                    ]}
                />
            </div>

            {/* Expanded Content - Tasks and Habits */}
            <div
                className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isExpanded
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0",
                )}
            >
                {isExpanded && (
                    <div className="px-3 pb-4 border-t border-input-bg mt-2 pt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <TaskHabitColumn
                                type="task"
                                items={tasks}
                                onAdd={onTaskAdd}
                                onEdit={onTaskEdit}
                                onDelete={onTaskDelete}
                            />
                            <TaskHabitColumn
                                type="habit"
                                items={habits}
                                onAdd={onHabitAdd}
                                onEdit={onHabitEdit}
                                onDelete={onHabitDelete}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
