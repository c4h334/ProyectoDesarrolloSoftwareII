import { pets } from "../../data/pets";
import PetCard from "./PetCard";

// Vista con el listado completo de mascotas
const PetList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Titulo de la sección */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mis Mascotas</h2>

      {/* Una cuadrícula adaptable para acomodar cada tarjeta */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Se renderiza una tarjeta por cada mascota disponible */}
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
