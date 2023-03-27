/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("Register test", () => {
    let userData = {
        firstName: "Test",
        lastName: "Test",
        email: "test1@gmail.com",
        password: "Testsifra91",
        shortPassword: "pass",
        invalidEmail: "testmail.com"
    };

    before("Visit app", () => {
        cy.visit("/");
    });

    beforeEach("Visit app and click on the register link", () => {
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
    });

    it("Register test", () => {
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.confirmPasswordInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
    });

    it("Register without email test", () => {
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.confirmPasswordInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
    });

    it("Register without password test", () => {
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.register.confirmPasswordInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
    });
});
