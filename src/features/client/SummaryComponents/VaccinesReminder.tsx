import { pets } from "../../../data/pets";

type VaccinesProps = { className?: string };

export default function VaccinesReminder({ className }: VaccinesProps) {
  const today = new Date();

  const upcomingVaccines = pets
    .flatMap((pet: { vaccines: any[]; name: string }) =>
      pet.vaccines.map((vaccine) => ({
        petName: pet.name,
        name: vaccine.name,
        next: vaccine.next,
      }))
    )
    .filter((vaccine) => new Date(vaccine.next) >= today)
    .sort((a, b) => new Date(a.next).getTime() - new Date(b.next).getTime())
    .slice(0, 5);

  return (
    <div
      className={`bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <h3 className="text-sm font-semibold text-blue-700">
          Recordatorio de Vacunas
        </h3>
      </div>

      {upcomingVaccines.length === 0 ? (
        <p className="text-sm text-gray-500">No hay vacunas próximas.</p>
      ) : (
        upcomingVaccines.map((vaccine, index) => (
          <div
            key={index}
            className="mb-4 last:mb-0 pb-3 border-b border-blue-100 last:border-none"
          >
            <p className="text-xs text-gray-500">
              Próxima fecha: {vaccine.next}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {vaccine.petName} · {vaccine.name}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
