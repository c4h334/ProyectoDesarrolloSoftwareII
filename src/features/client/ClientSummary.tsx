import SummaryCard from "./SummaryComponents/SummaryCard";
import UpcomingAppointments from "./SummaryComponents/UpcomingAppointments";
import VaccinesReminder from "./SummaryComponents/VaccinesReminder";

export default function ClientSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
       <div className="mb-10">
            <SummaryCard />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UpcomingAppointments />
            <VaccinesReminder />
          </div>
    </div>
  );
}
