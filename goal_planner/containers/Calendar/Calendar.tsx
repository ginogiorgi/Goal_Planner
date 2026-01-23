import {
	CalendarDaily,
	CalendarCard,
	CalendarInfo,
	CalendarInfoEdit,
	Navbar,
	Top,
} from "@/components";

const Calendar = () => {
	return (
		<div>
			<Navbar />
			<Top />
			<CalendarDaily />
			<CalendarCard />
			<CalendarInfo />
			<CalendarInfoEdit />
		</div>
	);
};

export default Calendar;
