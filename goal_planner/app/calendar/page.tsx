import CalendarDaily from "@/components/Calendar/CalendarDaily/CalendarDaily";
import CalendarCard from "@/components/Calendar/CalendarCard/CalendarCard";
import CalendarInfo from "@/components/Calendar/CalendarInfo/CalendarInfo";
import CalendarInfoEdit from "@/components/Calendar/CalendarInfoEdit/CalendarInfoEdit";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Top from "@/components/Layout/Top/Top";

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
