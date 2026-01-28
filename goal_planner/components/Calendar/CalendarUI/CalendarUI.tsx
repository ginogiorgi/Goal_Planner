import { useState, useMemo } from "react";
import CalendarCard, { type CalendarEvent } from "../CalendarCard/CalendarCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CalendarProps {
	events?: Record<string, CalendarEvent[]>;
	onDateSelect?: (date: Date) => void;
	selectedDate?: Date;
}

export default function Calendar({
	events = {},
	onDateSelect,
	selectedDate,
}: CalendarProps) {
	const [currentDate, setCurrentDate] = useState(new Date());

	const { year, month } = useMemo(() => {
		return {
			year: currentDate.getFullYear(),
			month: currentDate.getMonth(),
		};
	}, [currentDate]);

	const monthName = useMemo(() => {
		return new Date(year, month).toLocaleDateString("en-US", {
			month: "long",
			year: "numeric",
		});
	}, [year, month]);

	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const calendarDays = useMemo(() => {
		const firstDayOfMonth = new Date(year, month, 1);
		const lastDayOfMonth = new Date(year, month + 1, 0);
		const firstDayOfWeek = firstDayOfMonth.getDay();
		const daysInMonth = lastDayOfMonth.getDate();

		const days: Array<{
			date: number;
			isCurrentMonth: boolean;
			fullDate: Date;
		}> = [];

		// Previous month days
		const prevMonthLastDay = new Date(year, month, 0).getDate();
		for (let i = firstDayOfWeek - 1; i >= 0; i--) {
			days.push({
				date: prevMonthLastDay - i,
				isCurrentMonth: false,
				fullDate: new Date(year, month - 1, prevMonthLastDay - i),
			});
		}

		// Current month days
		for (let i = 1; i <= daysInMonth; i++) {
			days.push({
				date: i,
				isCurrentMonth: true,
				fullDate: new Date(year, month, i),
			});
		}

		// Next month days to fill the grid
		const remainingDays = 42 - days.length; // 6 rows × 7 days
		for (let i = 1; i <= remainingDays; i++) {
			days.push({
				date: i,
				isCurrentMonth: false,
				fullDate: new Date(year, month + 1, i),
			});
		}

		return days;
	}, [year, month]);

	const handlePrevMonth = () => {
		setCurrentDate(new Date(year, month - 1));
	};

	const handleNextMonth = () => {
		setCurrentDate(new Date(year, month + 1));
	};

	const handleToday = () => {
		setCurrentDate(new Date());
	};

	const isToday = (date: Date) => {
		const today = new Date();
		return (
			date.getDate() === today.getDate() &&
			date.getMonth() === today.getMonth() &&
			date.getFullYear() === today.getFullYear()
		);
	};

	const isSelected = (date: Date) => {
		if (!selectedDate) return false;
		return (
			date.getDate() === selectedDate.getDate() &&
			date.getMonth() === selectedDate.getMonth() &&
			date.getFullYear() === selectedDate.getFullYear()
		);
	};

	const getDateKey = (date: Date) => {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
			date.getDate(),
		).padStart(2, "0")}`;
	};

	return (
		<div className="w-full max-w-[900px] mx-auto">
			{/* Header */}
			<div className="flex items-center justify-between mb-8">
				<h2 className="text-3xl font-bold text-white-pearl">{monthName}</h2>
				<div className="flex items-center gap-3">
					<button
						onClick={handleToday}
						className="px-4 py-2 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 text-[#F0EAD6] font-medium transition-colors">
						Today
					</button>
					<div className="flex items-center gap-2">
						<button
							onClick={handlePrevMonth}
							className="w-10 h-10 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 flex items-center justify-center transition-colors"
							aria-label="Previous month">
							<ChevronLeft className="w-5 h-5" />
						</button>
						<button
							onClick={handleNextMonth}
							className="w-10 h-10 rounded-lg bg-[#27272A] hover:bg-[#27272A]/80 flex items-center justify-center transition-colors"
							aria-label="Next month">
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Week day headers */}
			<div className="grid grid-cols-7 gap-3 mb-4">
				{weekDays.map((day) => (
					<div
						key={day}
						className="text-center text-sm font-semibold text-[#94A3B8] h-10 flex items-center justify-center">
						{day}
					</div>
				))}
			</div>

			{/* Calendar grid */}
			<div className="grid grid-cols-7 gap-3">
				{calendarDays.map((day, index) => {
					const dateKey = getDateKey(day.fullDate);
					const dayEvents = events[dateKey] || [];

					return (
						<CalendarCard
							key={index}
							date={day.date}
							isCurrentMonth={day.isCurrentMonth}
							isToday={isToday(day.fullDate)}
							isSelected={isSelected(day.fullDate)}
							events={dayEvents}
							onClick={() => onDateSelect?.(day.fullDate)}
						/>
					);
				})}
			</div>
		</div>
	);
}
