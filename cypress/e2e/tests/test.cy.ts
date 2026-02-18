describe("Pruebas de navegacion", () => {
  it("should load home page", () => {
    cy.visit("/");
    cy.contains("Bienvenido a Nuestra Veterinaria");
  });

  it("Moverse por toda la pagina", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");

    cy.visit("/pets");
    cy.location("pathname").should("eq", "/pets");

    cy.visit("client-profile");
    cy.location("pathname").should("eq", "/client-profile");
  });
});

describe("Pruebas en pet list", () => {
  it("should display all pets", () => {
    cy.visit("/pets");
    cy.contains("Bonnie");
    cy.contains("Sasha");
    cy.contains("Loly");
  });

  it("should display 3 pet cards", () => {
    cy.visit("/pets");
    cy.get("[data-cy^='view-profile-']").should("have.length", 3);
  });

  it("should navigate to pet profile when clicking view profile", () => {
    cy.visit("/pets");

    cy.get("[data-cy='view-profile-1']").click();

    cy.location("pathname").should("eq", "/pet-profile/1");
  });
});

describe("Pruebas pet profile", () => {
  it("should display correct pet information", () => {
    cy.visit("/pet-profile/1");

    cy.contains("Bonnie");
    cy.contains("Jack Russell Terrier");
    cy.contains("7 kg");
  });

  it("should switch between tabs", () => {
    cy.visit("/pet-profile/1");

    cy.contains("vacunas").click();
    cy.contains("Rabia");

    cy.contains("consultas").click();
    cy.contains("Control nivel de Fenobarbital");
  });

  it("should show not found for invalid pet id", () => {
    cy.visit("/pet-profile/999");

    cy.contains("Mascota no encontrada");
  });
});

describe("Pruebas client profile", () => {
  it("should load client profile with default data", () => {
    cy.visit("/client-profile");

    cy.get("input[name='name']").should("have.value", "Alisha");
  });
});

describe("Pruebas footer", () => {
  it("should display footer", () => {
    cy.visit("/");
    cy.contains("Veterinary Web");
    cy.contains("Costa Rica");
  });
});

describe("Prueba 404", () => {
  it("should show Not found page", () => {
    cy.visit("/random-route");
    cy.location("pathname").should("eq", "/NotFound");
  });
});
