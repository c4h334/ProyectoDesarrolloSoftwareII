export const pets = [
  {
    id: 1,
    name: "Bonnie",
    species: "Canino",
    breed: "Jack Russell Terrier",
    age: "6 años",
    status: "Epiléptica",
    weight: "7 kg",
    allergies: "Ninguna",
    vaccines: [
      { name: "Rabia", date: "2025-01-10", next: "2026-01-10" },
      { name: "Séxtuple", date: "2024-11-05", next: "2025-11-05" },
    ],
    consultations: [
      {
        date: "2025-02-05",
        reason: "Control nivel de Fenobarbital",
        vet: "Dr. Pérez",
      },
      {
        date: "2024-12-20",
        reason: "Ajuste dosis medicación",
        vet: "Dra. Solís",
      },
      { date: "2024-10-15", reason: "Revisión post-crisis", vet: "Dr. Pérez" },
    ],
  },
  {
    id: 2,
    name: "Sasha",
    species: "Canino",
    breed: "Finnish Spitz",
    age: "3 años",
    status: "Delicada del estómago",
    weight: "12 kg",
    allergies: "Pollo, Colorantes",
    vaccines: [
      { name: "Rabia", date: "2024-08-20", next: "2025-08-20" },
      { name: "Giardia", date: "2024-09-10", next: "2025-09-10" },
    ],
    consultations: [
      { date: "2025-01-28", reason: "Gastroenteritis leve", vet: "Dra. Solís" },
      { date: "2024-11-15", reason: "Consulta nutricional", vet: "Dr. Pérez" },
    ],
  },
  {
    id: 3,
    name: "Loly",
    species: "Canino",
    breed: "Dachshund",
    age: "9 años",
    status: "Sana",
    weight: "9 kg",
    allergies: "Ninguna",
    vaccines: [
      { name: "Rabia", date: "2024-06-01", next: "2025-06-01" },
      { name: "Séxtuple", date: "2024-06-01", next: "2025-06-01" },
      { name: "Bordetella", date: "2024-07-15", next: "2025-07-15" },
    ],
    consultations: [
      {
        date: "2025-01-10",
        reason: "Chequeo geriátrico anual",
        vet: "Dr. Pérez",
      },
      { date: "2024-07-05", reason: "Limpieza dental", vet: "Dra. Solís" },
    ],
  },
];
