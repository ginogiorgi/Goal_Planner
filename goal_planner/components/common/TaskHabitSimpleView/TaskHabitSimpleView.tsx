"use client";
import { FaRegTrashAlt } from "react-icons/fa";
interface TaskHabitSimpleViewProps {
	title: string;
	days: string;
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
		<div className="w-full max-w-[568px] h-auto md:h-[70px] rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-input-bg flex items-center justify-between p-5 gap-4 mb-2">
			{/* Content Section */}
			<div className="flex items-center gap-4 flex-1">
				{/* Orange Dot Indicator */}
				<div className="w-[10px] h-[10px] rounded-full bg-vibrant-orange flex-shrink-0" />

				{/* Text Content */}
				<div className="flex flex-col justify-center min-w-0">
					<h3 className="text-white-pearl font-manrope font-medium text-xl leading-[28px] truncate">
						{title}
					</h3>
					<p className="text-white-pearl font-manrope font-normal text-xs leading-[16px] uppercase">
						{time && (
							<>
								{time}
								<span className="mx-[14px]">|</span>
							</>
						)}
						{days}
					</p>
				</div>
			</div>

			{/* Delete Button */}
			<button
				onClick={onDelete}
				className="w-6 h-6 flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity">
				<FaRegTrashAlt size={20} className="text-white-pearl" />
			</button>
		</div>
	);
}
