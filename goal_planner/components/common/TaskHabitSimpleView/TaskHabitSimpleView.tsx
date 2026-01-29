import { FaRegTrashAlt } from "react-icons/fa";
interface TaskHabitSimpleViewProps {
    title: string;
    days?: string;
    time?: string;
    onDelete?: () => void;
}

export default function TaskHabitSimpleView({
    title,
    days,
    time,
    onDelete,
}: TaskHabitSimpleViewProps) {
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

            {/* Delete Button */}
            <button onClick={onDelete} className="w-6 h-6">
                <FaRegTrashAlt className="text-white-pearl" />
            </button>
        </div>
    );
}
