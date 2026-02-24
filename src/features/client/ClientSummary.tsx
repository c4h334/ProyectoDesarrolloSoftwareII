import SummaryCard from "./SummaryComponents/SummaryCard";
import UpcomingAppointments from "./SummaryComponents/UpcomingAppointments";
import VaccinesReminder from "./SummaryComponents/VaccinesReminder";
// Vista resumen del cliente
// Integra estadísticas generales, próximas citas y recordatorios de vacunas
export default function ClientSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
       {/* Tarjeta con información general del cliente */}
       <div className="mb-10">
            <SummaryCard />
          </div>
          {/* Sección inferior con dos columnas en pantallas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Próximas citas veterinarias */}
            <UpcomingAppointments />
             {/* Recordatorio de vacunas */}
            <VaccinesReminder />
          </div>
    </div>
  );
}
