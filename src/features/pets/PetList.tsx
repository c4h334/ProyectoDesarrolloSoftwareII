import { Link } from "react-router-dom";
import { pets } from "../../data/pets";

const PetList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mis Mascotas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {pet.name}
            </h3>
            <ul className="text-gray-600 space-y-1 mb-4">
              <li>
                <span className="font-medium">Especie:</span> {pet.species}
              </li>
              <li>
                <span className="font-medium">Raza:</span> {pet.breed}
              </li>
              <li>
                <span className="font-medium">Edad:</span> {pet.age}
              </li>
              <li>
                <span className="font-medium">Estado:</span>{" "}
                <span
                  className={
                    pet.status === "Sana" || pet.status === "Sano"
                      ? "text-green-600"
                      : "text-amber-600"
                  }
                >
                  {pet.status}
                </span>
              </li>
            </ul>
            <Link
              to={`/pet-profile/${pet.id}`}
              className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Ver Perfil
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
