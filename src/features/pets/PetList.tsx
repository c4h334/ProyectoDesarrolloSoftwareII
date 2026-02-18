import { pets } from "../../data/pets";
import PetCard from "./PetCard";

const PetList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Mis Mascotas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default PetList;
