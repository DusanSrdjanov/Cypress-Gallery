/// <reference types="Cypress" />

describe("gallery test", () => {

    it("login test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(1).click();
        // cy.get("a[href='/login']");
        // cy.containts("Login");
        cy.get("#email").type("nestonekoneki@gmail.com");
        cy.get("#password").type("duleduledule991");
        cy.get("button").click();
        // cy.wait(2000);
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
        cy.get(".nav-link").eq(3).click();
    });

    it.only("register test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("Test");
        cy.get("#last-name").type("Test");
        cy.get("#email").type("test1@gmail.com");
        cy.get("#password").type("Testsifra91");
        cy.get("#password-confirmation").type("Testsifra91");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });
});

