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

  {
    id: 4,
    name: "Max",
    species: "Canino",
    breed: "Golden Retriever",
    age: "2 años",
    status: "Sano",
    weight: "28 kg",
    allergies: "Ninguna",
    vaccines: [
      { name: "Rabia", date: "2025-06-10", next: "2026-06-10" },
      { name: "Séxtuple", date: "2025-05-01", next: "2026-05-01" },
    ],
    consultations: [
      {
        date: "2026-03-15",
        reason: "Control anual",
        vet: "Dra. Solís",
      },
      {
        date: "2026-07-01",
        reason: "Refuerzo vacuna",
        vet: "Dr. Pérez",
      },
    ],
  },
  {
    id: 5,
    name: "Mía",
    species: "Felino",
    breed: "Maine Coon",
    age: "4 años",
    status: "Asma leve",
    weight: "6 kg",
    allergies: "Polvo",
    vaccines: [
      { name: "Triple Felina", date: "2025-07-20", next: "2026-07-20" },
      { name: "Rabia Felina", date: "2025-08-01", next: "2026-08-01" },
    ],
    consultations: [
      {
        date: "2026-02-25",
        reason: "Chequeo respiratorio",
        vet: "Dr. Pérez",
      },
      {
        date: "2026-04-10",
        reason: "Vacunación anual",
        vet: "Dra. Solís",
      },
    ],
  },
];
