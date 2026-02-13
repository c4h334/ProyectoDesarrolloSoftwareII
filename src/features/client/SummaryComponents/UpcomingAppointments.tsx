import { CalendarIcon } from "@heroicons/react/16/solid";
import { pets } from "../../../data/pets";



export default function UpcomingAppointments() {
    const today = new Date();
    console.log("Today:", today); //debug: verificar la fecha actual

    const upcomingConsultations = pets
        .flatMap((pet) =>
            pet.consultations.map((consultation) => ({
                petName: pet.name,
                date: consultation.date,
                reason: consultation.reason,
                vet: consultation.vet,
            }))
        )
        .filter((item) => new Date(item.date) >= today)
        .sort(
            (a, b) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
        );

    //Design of the timeline
    return (
        <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-semibold text-black mb-8">
                Próximas Citas
            </h2>

            <div className="relative border-l-2 border-gray-200 space-y-10 pl-8">
                {upcomingConsultations.length === 0 && (
                    <p className="text-gray-500">
                        No hay citas próximas registradas.
                    </p>
                )}

                {upcomingConsultations.map((appointment, index) => (
                    <div key={index} className="relative">

                        <div className="absolute -left-[17px] top-2 h-8 w-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                            <CalendarIcon className="h-4 w-4 text-gray-600" />
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                            <p className="text-sm text-gray-500">
                                {appointment.date}
                            </p>

                            <h3 className="text-black font-semibold mt-1">
                                {appointment.petName} · {appointment.reason}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {appointment.vet}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}