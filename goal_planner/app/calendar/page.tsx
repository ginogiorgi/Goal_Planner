import {
    CalendarDaily,
    CalendarCard,
    CalendarInfo,
    CalendarInfoEdit,
    Navbar,
    Top,
} from "@/components";

export default function CalendarPage() {
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
}
