import { IoMdTime } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import TaskHabitSimpleView from "../TaskHabitSimpleView/TaskHabitSimpleView";
import AddButton from "@/components/Onboarding/AddButton/AddButton";

interface Item {
    title: string;
    days: string;
    time?: string;
}

interface TaskHabitColumnProps {
    type: "task" | "habit";
    items?: Item[];
    onAdd?: () => void;
    onDelete?: (index: number) => void;
    size?: "small" | "large";
}

export default function TaskHabitColumn({
    type,
    items = [],
    onAdd,
    onDelete,
    size = "large",
}: TaskHabitColumnProps) {
    const isTask = type === "task";
    const iconSize = size === "large" ? 8 : 6;
    const titleSize = size === "large" ? "text-2xl" : "text-base";
    const iconContainerSize = size === "large" ? "w-8 h-8" : "w-6 h-6";

    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <div
                    className={`${iconContainerSize} bg-[rgba(255,85,0,0.1)] rounded-[7px] flex items-center justify-center`}
                >
                    {isTask ? (
                        <IoMdTime size={22} className="text-vibrant-orange" />
                    ) : (
                        <BsStars size={22} className="text-vibrant-orange" />
                    )}
                </div>
                <h2
                    className={`text-white-pearl font-text font-semibold ${titleSize} leading-[22px]`}
                >
                    {isTask ? "Tasks" : "Daily Habits"}
                </h2>
            </div>

            {items.map((item, index) => (
                <TaskHabitSimpleView
                    key={index}
                    title={item.title}
                    days={item.days}
                    time={item.time}
                    onDelete={onDelete ? () => onDelete(index) : undefined}
                    textSize={size === "small" ? "small" : undefined}
                />
            ))}

            <AddButton
                label={isTask ? "Add Task" : "Add Daily Habit"}
                onClick={onAdd}
                textSize={size === "small" ? "small" : undefined}
            />
        </div>
    );
}
