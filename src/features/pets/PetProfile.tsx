import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { pets } from "../../data/pets";

const PetProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("resumen");

  const pet = pets.find((p) => p.id === Number(id));

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Mascota no encontrada
        </h2>
        <Link to="/pets" className="text-blue-600 hover:underline mt-4 block">
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/pets" className="text-blue-600 hover:underline">
          &larr; Volver a mis mascotas
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold">{pet.name}</h1>
          <p className="text-blue-100">
            {pet.breed} - {pet.age}
          </p>
        </div>

        <div className="flex border-b border-gray-200">
          {["resumen", "vacunas", "consultas"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-center font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "resumen" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Información Básica
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <dt className="text-gray-600">Especie</dt>
                    <dd className="font-medium">{pet.species}</dd>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <dt className="text-gray-600">Peso</dt>
                    <dd className="font-medium">{pet.weight}</dd>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <dt className="text-gray-600">Alergias</dt>
                    <dd className="font-medium text-red-500">
                      {pet.allergies}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === "vacunas" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-gray-600 font-semibold">Vacuna</th>
                    <th className="p-3 text-gray-600 font-semibold">
                      Fecha Aplicación
                    </th>
                    <th className="p-3 text-gray-600 font-semibold">
                      Próxima Dosis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pet.vaccines.length > 0 ? (
                    pet.vaccines.map((vac, idx) => (
                      <tr key={idx} className="border-b last:border-0">
                        <td className="p-3">{vac.name}</td>
                        <td className="p-3">{vac.date}</td>
                        <td className="p-3 text-blue-600">{vac.next}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-3 text-center text-gray-500">
                        No hay vacunas registradas
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "consultas" && (
            <div className="space-y-4">
              {pet.consultations.length > 0 ? (
                pet.consultations.map((consult, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-800">
                        {consult.reason}
                      </span>
                      <span className="text-sm text-gray-500">
                        {consult.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Atendido por: {consult.vet}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No hay consultas registradas
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
