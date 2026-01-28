"use client";
import CalendarDaily from "@/components/Calendar/CalendarDaily/CalendarDaily";
import CalendarCard, {
	type CalendarEvent,
} from "@/components/Calendar/CalendarCard/CalendarCard";
import CalendarInfo from "@/components/Calendar/CalendarInfo/CalendarInfo";
import CalendarInfoEdit from "@/components/Calendar/CalendarInfoEdit/CalendarInfoEdit";
import CalendarUI from "@/components/Calendar/CalendarUI/CalendarUI";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Top from "@/components/Layout/Top/Top";

import { useState, useMemo } from "react";
import { CalendarDays, Plus } from "lucide-react";

export default function CalendarPage() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>();

	// Sample events for demonstration
	const events = useMemo<Record<string, CalendarEvent[]>>(() => {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();
		return {};
		/* 		return {
			[`${year}-${String(month + 1).padStart(2, "0")}-05`]: [
				{ id: "1", title: "Team Meeting", color: "#F0E23A" },
				{ id: "2", title: "Project Review", color: "#1F6AE1" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-12`]: [
				{ id: "3", title: "Client Call", color: "#10b981" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-15`]: [
				{ id: "4", title: "Design Workshop", color: "#8b5cf6" },
				{ id: "5", title: "Lunch with Team", color: "#F0E23A" },
				{ id: "6", title: "Code Review", color: "#1F6AE1" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-20`]: [
				{ id: "7", title: "Sprint Planning", color: "#ef4444" },
			],
			[`${year}-${String(month + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`]:
				[
					{ id: "8", title: "Daily Standup", color: "#1F6AE1" },
					{ id: "9", title: "1:1 Meeting", color: "#F0E23A" },
				],
			[`${year}-${String(month + 1).padStart(2, "0")}-25`]: [
				{ id: "10", title: "Product Demo", color: "#10b981" },
				{ id: "11", title: "Team Retrospective", color: "#8b5cf6" },
				{ id: "12", title: "Documentation", color: "#1F6AE1" },
				{ id: "13", title: "Bug Triage", color: "#ef4444" },
			],
		}; */
	}, []);

	const handleDateSelect = (date: Date) => {
		setSelectedDate(date);
	};

	return (
		<div className="min-h-screen bg-deep-bg">
			{/* Header */}
			{/* 			<header className="border-b border-[#27272A] bg-deep-bg/50 backdrop-blur-sm sticky top-0 z-10">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-lg bg-[#D94E06] flex items-center justify-center">
								<CalendarDays className="w-6 h-6 text-white-pearl" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-[#1A0A05]">
									Calendar App
								</h1>
								<p className="text-xs text-[#94A3B8]">Manage your schedule</p>
							</div>
						</div>
						<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D94E06] hover:bg-[#D94E06]/90 text-[#F0EAD6] font-medium transition-colors">
							<Plus className="w-5 h-5" />
							New Event
						</button>
					</div>
				</div>
			</header>
 */}
			{/* Main content */}
			<main className="container mx-auto px-6 py-8">
				<CalendarUI
					events={events}
					selectedDate={selectedDate}
					onDateSelect={handleDateSelect}
				/>

				{/* Selected date info */}
				{/* 				{selectedDate && (
					<div className="mt-8 p-6 rounded-xl bg-[#F0EAD6] border border-[#27272A]">
						<h3 className="text-lg font-semibold text-[#1A0A05] mb-2">
							Selected Date
						</h3>
						<p className="text-[#94A3B8]">
							{selectedDate.toLocaleDateString("en-US", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>
						{(() => {
							const dateKey = `${selectedDate.getFullYear()}-${String(
								selectedDate.getMonth() + 1,
							).padStart(
								2,
								"0",
							)}-${String(selectedDate.getDate()).padStart(2, "0")}`;
							const dayEvents = events[dateKey] || [];

							return dayEvents.length > 0 ? (
								<div className="mt-4 space-y-2">
									<h4 className="text-sm font-medium text-[#1A0A05]">
										Events:
									</h4>
									{dayEvents.map((event) => (
										<div
											key={event.id}
											className="flex items-center gap-3 p-3 rounded-lg bg-[#27272A]/50">
											<div
												className="w-2 h-2 rounded-full"
												style={{ backgroundColor: event.color }}
											/>
											<span className="text-sm text-[#1A0A05]">
												{event.title}
											</span>
										</div>
									))}
								</div>
							) : (
								<p className="mt-4 text-sm text-[#94A3B8]">
									No events scheduled
								</p>
							);
						})()}
					</div>
				)} */}
			</main>
		</div>
	);
}
