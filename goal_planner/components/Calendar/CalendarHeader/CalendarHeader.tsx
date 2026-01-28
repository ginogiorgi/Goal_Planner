import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
	monthName: string;
	onPrevMonth: () => void;
	onNextMonth: () => void;
	onToday: () => void;
}

export default function CalendarHeader({
	monthName,
	onPrevMonth,
	onNextMonth,
	onToday,
}: CalendarHeaderProps) {
	return (
		<div className="flex items-center justify-between mb-8">
			<h2 className="text-3xl font-bold text-white-pearl">{monthName}</h2>
			<div className="flex items-center gap-3">
				<button
					onClick={onToday}
					className="px-4 py-2 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 text-[#F0EAD6] font-medium transition-colors">
					Today
				</button>
				<div className="flex items-center gap-2">
					<button
						onClick={onPrevMonth}
						className="w-10 h-10 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 flex items-center justify-center transition-colors text-white-pearl"
						aria-label="Previous month">
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={onNextMonth}
						className="w-10 h-10 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 flex items-center justify-center transition-colors text-white-pearl"
						aria-label="Next month">
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
