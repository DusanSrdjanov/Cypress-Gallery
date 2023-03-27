/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";
import { authLogin } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';

describe("Register test", () => {
    let userData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: `${faker.lorem.word(8)}1`
    };

    beforeEach("Visit app and click on the register link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
    });

    it("Register without first name test", () => {
        registerPage.registerWithValidData
        userData.lastName,
        userData.email,
        userData.password
    });

    it("Register without last name test", () => {
        registerPage.registerWithValidData
        userData.firstName,
        userData.email,
        userData.password
    });

    it("Register without email test", () => {
        registerPage.registerWithValidData
        userData.firstName,
        userData.lastName,
        userData.password
    });

    it("Register without password test", () => {
        registerPage.registerWithValidData
        userData.firstName,
        userData.lastName,
        userData.email
    });

    it("Register with valid data", () => {
        registerPage.registerWithValidData(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );
        cy.url().should("not.contain", "/register"); 
    });

    it.only("Register through backend", () => {
        cy.registerViaBackend(userData.email, userData.firstName, userData.lastName, userData.password);
        cy.visit("/login");
        authLogin.login("nekinoviemail@gmail.com", "test1337");
    });
});


