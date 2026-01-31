"use client";

import { useState, useMemo } from "react";
import CalendarUI from "@/components/Calendar/CalendarUI/CalendarUI";

interface CalendarEvent {
	id: string;
	title: string;
	color?: string;
}

export default function CalendarPage() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>();

	const events = useMemo(() => {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();
		/* 		return {}; */
		return {
			[`${year}-${String(month + 1).padStart(2, "0")}-05`]: [
				{ id: "1", title: "Team Meeting", color: "#F0E23A" },
				{ id: "2", title: "Project Review", color: "#1F6AE1" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-12`]: [
				{ id: "3", title: "Client Call", color: "#10B981" },
				{ id: "4", title: "Design Sprint", color: "#F59E0B" },
				{ id: "5", title: "Code Review", color: "#8B5CF6" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-15`]: [
				{ id: "6", title: "Product Launch", color: "#EF4444" },
				{ id: "7", title: "Marketing Meeting", color: "#EC4899" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-20`]: [
				{ id: "8", title: "Sprint Planning", color: "#06B6D4" },
				{ id: "9", title: "Team Building", color: "#84CC16" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-25`]: [
				{ id: "10", title: "Quarterly Review", color: "#F97316" },
				{ id: "11", title: "Strategy Session", color: "#A855F7" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-28`]: [
				{ id: "12", title: "Documentation", color: "#1F6AE1" },
				{ id: "13", title: "Bug Triage", color: "#ef4444" },
			],
		};
	}, []);

	const handleDateSelect = (date: Date) => {
		setSelectedDate(date);
	};

	const handleAddHabit = () => {
		console.log("Add Habit clicked");
	};

	const handleAddTask = () => {
		console.log("Add Task clicked");
	};

	return (
		<div className="min-h-screen bg-deep-bg">
			{/* Main content */}
			<main className="container mx-auto px-6 py-8">
				<CalendarUI
					events={events}
					onDateSelect={handleDateSelect}
					selectedDate={selectedDate}
					onAddHabit={handleAddHabit}
					onAddTask={handleAddTask}
				/>
			</main>
		</div>
	);
}
