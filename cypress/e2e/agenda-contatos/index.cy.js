/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  it("Deve alterar contato", () => {
    const name = "Kevin";
    const number = "81111111111";
    const email = "kevin@contato.com.br";

    cy.get('[type="text"]').type(`${name}`);
    cy.get('[type="email"]').type(`${email}`);
    cy.get('[type="tel"]').type(`${number}`);
    cy.get(".adicionar").click();

    cy.get(".contato:last > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      `${name}`
    );
    cy.get(".contato:last > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)").should(
      "have.text",
      `${number}`
    );
    cy.get(".contato:last > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      `${email}`
    );
  });

  it("Deve editar contato", () => {
    cy.get(".contato:first > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type("Pedro");
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("pedro@contato.com.br");
    cy.get('[type="tel"]').clear();
    cy.get('[type="tel"]').type("81111111111");

    cy.get(".alterar").click();

    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)").should(
      "have.text",
      "Pedro"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)").should(
      "have.text",
      "81111111111"
    );
    cy.get(":nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)").should(
      "have.text",
      "pedro@contato.com.br"
    );
  });

  it("Deve deletar contato", () => {
    cy.get(".contato:first > .sc-gueYoa > .delete").click();
    cy.get(".contato:first").should("not.exist");
  });
});
