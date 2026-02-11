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
				{
					id: "1",
					title: "Team Meeting",
					time: "7:00",
					color: "#F0E23A",
					completed: true,
				},
				{
					id: "2",
					title: "Project Review",
					time: "16:00",
					color: "#1F6AE1",
					completed: false,
				},
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-12`]: [
				{
					id: "3",
					title: "Client Call",
					time: "10:00",
					color: "#10B981",
					completed: true,
				},
				{
					id: "5",
					title: "Client Call",
					time: "10:00",
					color: "#10B981",
					completed: true,
				},
				{
					id: "4",
					title: "Design Sprint",
					time: "14:00",
					color: "#F59E0B",
					completed: false,
				},
				{
					id: "5",
					title: "Code Review",
					time: "16:30",
					color: "#8B5CF6",
					completed: true,
				},
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-15`]: [
				{
					id: "6",
					title: "Product Launch",
					time: "9:00",
					color: "#EF4444",
					completed: false,
				},
				{
					id: "7",
					title: "Marketing Meeting",
					time: "15:00",
					color: "#EC4899",
					completed: true,
				},
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-20`]: [
				{
					id: "8",
					title: "Sprint Planning",
					time: "11:00",
					color: "#06B6D4",
					completed: true,
				},
				{
					id: "9",
					title: "Team Building",
					time: "17:00",
					color: "#84CC16",
					completed: false,
				},
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-25`]: [
				{
					id: "10",
					title: "Quarterly Review",
					time: "13:00",
					color: "#F97316",
					completed: false,
				},
				{
					id: "11",
					title: "Strategy Session",
					time: "15:30",
					color: "#A855F7",
					completed: true,
				},
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
