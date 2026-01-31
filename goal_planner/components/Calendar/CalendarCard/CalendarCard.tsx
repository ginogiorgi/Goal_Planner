import { cn } from "@/lib/utils";

interface CalendarCardProps {
	date?: number;
	isToday?: boolean;
	isSelected?: boolean;
	isCurrentMonth?: boolean;
	events?: CalendarEvent[];
	onClick?: () => void;
}

interface CalendarEvent {
	id: string;
	title: string;
	color?: string;
}

export type { CalendarCardProps, CalendarEvent };

export default function CalendarCard({
	date,
	isToday = false,
	isSelected = false,
	isCurrentMonth = true,
	events = [],
	onClick,
}: CalendarCardProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"aspect-square rounded-xl transition-all duration-200 flex flex-col p-3 gap-2",
				"bg-modal-bg hover:scale-105 hover:shadow-xl hover:border-vibrant-orange/50 border border-input-bg",
				isToday && "bg-input-bg border-vibrant-orange border-2 shadow-lg",
				isSelected && "bg-input-bg border-vibrant-orange border-2 shadow-lg",
				!isCurrentMonth && "opacity-30",
				"group relative overflow-hidden",
			)}>
			{/* Date number */}
			{date && (
				<div
					className={cn(
						"text-sm font-semibold transition-colors text-left",
						isSelected ? "text-white-pearl" : "text-white-pearl",
						isToday && !isSelected && "text-[#D94E06]",
					)}>
					{date}
				</div>
			)}

			{/* Events */}
			<div className="flex flex-col gap-1.5 flex-1 w-full">
				{events.slice(0, 3).map((event, index) => (
					<div
						key={event.id}
						className={cn(
							"text-[10px] leading-tight px-2 py-1 rounded-md truncate",
							"bg-[#27272A]/20 text-[#94A3B8] border border-[#27272A]/30",
							"transition-all duration-200",
						)}
						style={
							event.color
								? {
										backgroundColor: `${event.color}20`,
										borderColor: `${event.color}50`,
										color: event.color,
									}
								: undefined
						}>
						{event.title}
					</div>
				))}
				{events.length > 3 && (
					<div className="text-[9px] text-[#94A3B8] font-medium px-2">
						+{events.length - 3} more
					</div>
				)}
			</div>

			{/* Hover effect overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#D94E06]/0 to-[#D94E06]/0 group-hover:from-[#D94E06]/5 group-hover:to-[#D94E06]/10 transition-all duration-300 rounded-xl pointer-events-none" />
		</button>
	);
}
