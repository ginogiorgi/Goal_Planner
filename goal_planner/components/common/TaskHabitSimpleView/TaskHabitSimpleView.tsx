import DropdownMenu from "../DropdownMenu/DropdownMenu";

interface TaskHabitSimpleViewProps {
    title: string;
    days?: string;
    time?: string;
    type: "task" | "habit";
    onEdit: () => void;
    onDelete: () => void;
}

export default function TaskHabitSimpleView({
    title,
    days,
    time,
    type,
    onEdit,
    onDelete,
}: TaskHabitSimpleViewProps) {
    const typeLabel = type === "task" ? "Task" : "Habit";

    return (
        <div className="w-[33rem] rounded-3xl border border-input-bg bg-modal-bg  flex items-center my-2 h-20 p-6">
            {/* Content Section */}
            <div className="flex items-center gap-4 flex-1">
                {/* Orange Dot Indicator */}
                <div className="w-2 h-2 rounded-full bg-vibrant-orange" />

                {/* Text Content */}
                <div>
                    <h3 className="text-white-pearl font-medium text-lg">
                        {title}
                    </h3>
                    {(time || days) && (
                        <p className="text-white-pearl uppercase text-xs">
                            {time && (
                                <>
                                    {time}
                                    {days && <span className="mx-3">|</span>}
                                </>
                            )}
                            {days}
                        </p>
                    )}
                </div>
            </div>

            {/* Menu Button */}
            <DropdownMenu
                items={[
                    {
                        label: `Edit ${typeLabel}`,
                        onClick: onEdit,
                    },
                    {
                        label: `Delete ${typeLabel}`,
                        onClick: onDelete,
                        variant: "danger" as const,
                    },
                ]}
            />
        </div>
    );
}
