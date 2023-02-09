/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";

describe("Register test", () => {
    let userData = {
        firstName: "Test",
        lastName: "Test",
        email: "test1@gmail.com",
        password: "Testsifra91",
        shortPassword: "pass",
        invalidEmail: "testmail.com"
    };

    before("Visit app and click on the register link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
    });

    it("register with valid data", () => {
        registerPage.registerWithValidData(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );
        cy.url().should("not.contain", "/register");
    });
});