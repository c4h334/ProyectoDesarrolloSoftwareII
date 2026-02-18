//Modelo para las vacunas
interface Vaccine {
  name: string;
  date: string; // podrías usar Date si prefieres
  next: string;
}

// Modelo para consultas o citas
interface Consultation {
  date: string;
  reason: string;
  vet: string;
}

// Modelo principal para mascotas (incluye vacunas y consultas)
export interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: string;
  status: string;
  weight: string;
  allergies: string;
  vaccines: Vaccine[];
  consultations: Consultation[];
}
