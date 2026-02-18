import { Link } from "react-router-dom";
import type { Pet } from "../../models/pet.model";

export default function PetCard(pet: Pet) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
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
        //lo que hace que sea testeable 
        data-cy={`view-profile-${pet.id}`}
        className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Ver Perfil
      </Link>
    </div>
  );
}
