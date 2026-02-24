// Representa una vacuna aplicada o programada para aplicar
interface Vaccine {
  name: string;
  date: string; // Se mantiene como texto para formato simple
  next: string;
}

// Representa una consulta veterinaria registrada
interface Consultation {
  date: string;
  reason: string;
  vet: string;
}

// Estructura principal de una mascota en la app
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
