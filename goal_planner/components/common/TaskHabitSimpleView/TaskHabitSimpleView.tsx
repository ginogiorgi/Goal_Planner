"use client";
import { FaRegTrashAlt } from "react-icons/fa";
interface TaskHabitSimpleViewProps {
	title: string;
	days: string;
	time?: string;
	onDelete?: () => void;
	textSize?: "small" | "medium" | "large";
}

export default function TaskHabitSimpleView({
	title,
	days,
	time,
	onDelete,
	textSize = "medium",
}: TaskHabitSimpleViewProps) {
	// Size configurations for text
	const sizeConfig = {
		small: {
			title: "text-sm leading-[20px]",
			description: "text-[10px] leading-[14px]",
			container: "h-auto md:h-[50px] p-3",
			dot: "w-[6px] h-[6px]",
			deleteButton: "w-4 h-4",
			deleteIcon: 16,
		},
		medium: {
			title: "text-xl leading-[28px]",
			description: "text-xs leading-[16px]",
			container: "h-auto md:h-[70px] p-5",
			dot: "w-[10px] h-[10px]",
			deleteButton: "w-6 h-6",
			deleteIcon: 20,
		},
		large: {
			title: "text-2xl leading-[32px]",
			description: "text-sm leading-[18px]",
			container: "h-auto md:h-[90px] p-6",
			dot: "w-[12px] h-[12px]",
			deleteButton: "w-8 h-8",
			deleteIcon: 24,
		},
	};

	const config = sizeConfig[textSize];

	return (
		<div
			className={`w-full max-w-[568px] rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-input-bg flex items-center justify-between gap-4 mb-2 ${config.container}`}>
			{/* Content Section */}
			<div className="flex items-center gap-4 flex-1">
				{/* Orange Dot Indicator */}
				<div
					className={`${config.dot} rounded-full bg-vibrant-orange flex-shrink-0`}
				/>

				{/* Text Content */}
				<div className="flex flex-col justify-center min-w-0">
					<h3
						className={`text-white-pearl font-text font-medium truncate ${config.title}`}>
						{title}
					</h3>
					<p
						className={`text-white-pearl font-text font-normal uppercase ${config.description}`}>
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
				className={`${config.deleteButton} flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity`}>
				<FaRegTrashAlt size={config.deleteIcon} className="text-white-pearl" />
			</button>
		</div>
	);
}
