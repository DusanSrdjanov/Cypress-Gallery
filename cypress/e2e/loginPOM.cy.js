/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

const credentials = {
    email: "nestonekoneki@gmail.com",
    password: "duleduledule991"
};

describe("Login test", () => {
    before("Visit app and click the login link", () => {
        cy.visit("/");
        loginPage.loginLink.click();
    });

    it("login with valid credentials test", () => {
        loginPage.login(credentials.email, credentials.password);
    });
});