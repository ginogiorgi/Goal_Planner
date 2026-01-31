import { IoMdTime } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import TaskHabitSimpleView from "../TaskHabitSimpleView/TaskHabitSimpleView";
import { FaPlus } from "react-icons/fa";

interface Item {
    title: string;
    days?: string;
    time?: string;
}

interface TaskHabitColumnProps {
    type: "task" | "habit";
    items?: Item[];
    onAdd?: () => void;
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
}

export default function TaskHabitColumn({
    type,
    items = [],
    onAdd,
    onEdit,
    onDelete,
}: TaskHabitColumnProps) {
    const isTask = type === "task";

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 my-6 w-[33rem]">
                <div className="bg-input-bg rounded-3xl flex items-center justify-center w-10 h-10">
                    {isTask ? (
                        <IoMdTime size={22} className="text-vibrant-orange" />
                    ) : (
                        <BsStars size={22} className="text-vibrant-orange" />
                    )}
                </div>
                <h1 className="text-white-pearl font-title text-2xl font-semibold">
                    {isTask ? "Tasks" : "Daily Habits"}
                </h1>
            </div>

            {items.map((item, index) => (
                <TaskHabitSimpleView
                    key={index}
                    title={item.title}
                    days={item.days}
                    time={item.time}
                    type={type}
                    onEdit={() => onEdit(index)}
                    onDelete={() => onDelete(index)}
                />
            ))}
            <button
                onClick={onAdd}
                className="w-[33rem] rounded-3xl border flex items-center my-2 h-20 p-6 border-dashed border-vibrant-orange/15 gap-2 hover:border-vibrant-orange transition-colors"
            >
                <div className="w-8 h-8 border-2 border-vibrant-orange rounded-full flex items-center justify-center">
                    <FaPlus size={14} className="text-vibrant-orange" />
                </div>
                <span className="text-vibrant-orange font-medium">
                    {isTask ? "Add Task" : "Add Daily Habit"}
                </span>
            </button>
        </div>
    );
}
