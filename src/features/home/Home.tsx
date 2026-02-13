import { useRef, useState, useEffect } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import clientData from "../../data/client.json";
import SummaryCard from "../client/SummaryComponents/SummaryCard";
import UpcomingAppointments from "../client/SummaryComponents/UpcomingAppointments";
import VaccinesReminder from "../client/SummaryComponents/VaccinesReminder";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleShowDashboard = () => {
    setShowDashboard(true);
  };

  useEffect(() => {
    if (showDashboard && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDashboard]);

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen">
      {/* HERO / Bienvenida */}
      <section className="container mx-auto px-4 py-16 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
          {clientData.name}, te damos la bienvenida a nuestra{" "}
          <span className="text-emerald-600">veterinaria</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          Cuidamos de tus mascotas con{" "}
          <span className="font-semibold">amor</span> y{" "}
          <span className="font-semibold">profesionalismo</span>.
        </p>

        {!showDashboard &&
          (<button onClick={handleShowDashboard} className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all mx-auto" >
            Ver Resumen
            <ArrowDownIcon className="h-5 w-5" />
          </button>)}
      </section>

      {/* Servicios */}
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl mx-auto">
              🐶
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Cuidado Canino
            </h3>
            <p className="text-slate-600 text-center">
              Servicios especializados para perros, enfocados en su bienestar y salud.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-3xl mx-auto">
              🐱
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Cuidado Felino
            </h3>
            <p className="text-slate-600 text-center">
              Atención especializada para gatos con un enfoque delicado y profesional.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 text-3xl mx-auto">
              🚑
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Emergencias 24/7
            </h3>
            <p className="text-slate-600 text-center">
              Disponibles en todo momento para cuidar la vida de tu mascota.
            </p>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      {showDashboard && (
        <section ref={summaryRef} className="px-8 pb-16 mt-20">
          <div className="mb-10">
            <SummaryCard />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UpcomingAppointments />
            <VaccinesReminder />
          </div>
        </section>
      )}
    </div>
  );
}
