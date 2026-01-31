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
	time?: string; // Nueva propiedad para hora
	completedTasks?: number; // Tareas completas
	totalTasks?: number; // Total de tareas
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
	// Calculate progress based on completed tasks vs total tasks
	const calculateProgress = (events: CalendarEvent[]) => {
		const eventsWithProgress = events.filter(
			(event) =>
				event.completedTasks !== undefined && event.totalTasks !== undefined,
		);

		if (eventsWithProgress.length === 0) return 0;

		const totalCompleted = eventsWithProgress.reduce(
			(sum, event) => sum + (event.completedTasks || 0),
			0,
		);

		const totalTasks = eventsWithProgress.reduce(
			(sum, event) => sum + (event.totalTasks || 0),
			0,
		);

		return totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;
	};
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
							"text-xs leading-tight px-2 py-1 rounded-md truncate",
							"bg-deep-bg/20 text-white-pearl border border-bg-deep-bg/30",
							"transition-all duration-200",
						)}
						style={
							event.color
								? {
										borderColor: `${event.color}`,
									}
								: undefined
						}>
						<div className="flex items-center justify-between gap-1">
							<span className="truncate">{event.title}</span>
							{event.time && (
								<span className="text-[10px] text-[#94A3B8] whitespace-nowrap ml-1">
									{event.time}
								</span>
							)}
						</div>
					</div>
				))}
				{events.length > 3 && (
					<div className="text-[9px] text-[#94A3B8] font-medium px-2">
						+{events.length - 3} more
					</div>
				)}
			</div>

			{/* Progress Bar */}
			{events.length > 0 && (
				<div className="mt-auto pt-2">
					<div className="w-full bg-[#27272A]/30 rounded-full h-1.5 overflow-hidden">
						<div
							className="h-full bg-[#D94E06] transition-all duration-300 ease-out"
							style={{
								width: `${calculateProgress(events)}%`,
							}}
						/>
					</div>
					<div className="text-[9px] text-white-pearl mt-1 text-right">
						{calculateProgress(events)}% complete
					</div>
				</div>
			)}

			{/* Hover effect overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#D94E06]/0 to-[#D94E06]/0 group-hover:from-[#D94E06]/5 group-hover:to-[#D94E06]/10 transition-all duration-300 rounded-xl pointer-events-none" />
		</button>
	);
}
