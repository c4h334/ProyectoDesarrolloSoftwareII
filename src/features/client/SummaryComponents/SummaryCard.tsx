import { Activity, PawPrint } from "lucide-react";
import { pets } from "../../../data/pets";
import { useState } from "react";
import type { Client } from "../../../models/client.model";
import clientData from "../../../data/client.json"; 

export default function SummaryCard() {
    const totalPets = pets.length;

    const [client] = useState<Client>(() => {
        const storedClient = localStorage.getItem("client");
        return storedClient ? JSON.parse(storedClient) : clientData; // Local storage para mantener la información del cliente incluso después de recargar la página
    });

    const petsWithConditions = pets.filter(
        (pet) => pet.status !== "Sana" && pet.status !== "Sano"
    ).length;

    return (
        <div className="bg-white rounded-2xl shadow-sm p-8">

            {/* Nombre */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-emerald-600">
                    {client.name}
                </h1>


                <div className="w-20 h-1 bg-gray-300 rounded-full mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Total mascotas */}
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                        <PawPrint className="w-6 h-6 text-blue-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Mascotas registradas
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                            {totalPets}
                        </p>
                    </div>
                </div>

                {/* Mascotas con condición */}
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-6">
                    <div className="bg-amber-100 p-3 rounded-xl">
                        <Activity className="w-6 h-6 text-amber-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Requieren seguimiento
                        </p>
                        <p className="text-2xl font-bold text-amber-600">
                            {petsWithConditions}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

