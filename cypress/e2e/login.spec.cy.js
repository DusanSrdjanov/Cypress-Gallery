/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("Login test", () => {

    it("login and logout test", () => {
        cy.visit("/");
        cy.get(locators.navbar.loginButton).click();
        cy.get(locators.commonFormElements.emailInput).type("nestonekoneki@gmail.com");
        cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
        cy.get(locators.commonFormElements.submitButton).click();
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
        cy.get(".nav-link").eq(3).click();
    });
  
    it("login with no email", () => {
      cy.visit("/");
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
      cy.get(locators.commonFormElements.submitButton).click();
    }); 
  
    it("login with no password", () => {
      cy.visit("/");
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.emailInput).type("nestonekoneki@gmail.com");
      cy.get(locators.commonFormElements.submitButton).click();
    });
  });

