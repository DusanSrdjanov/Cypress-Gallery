/// <reference types="Cypress" />

import { authLogin } from "../page_objects/loginPage";
import { faker } from "@faker-js/faker";

const credentials = {
  validEmail: "nestonekoneki@gmail.com",
  validPassword: "duleduledule991",
  invalidEmail: faker.internet.email(),
  invalidPassword: faker.lorem.word(),
};

describe("Login tests", () => {
  beforeEach("visit app and click the login link", () => {
    cy.visit("/");
    authLogin.loginLink.click();
    cy.url().should("include", "/login");
    authLogin.loginPageHeading
      .should("be.visible")
      .and("have.text", "Please login");
  });

  it.only("Login with invalid email address", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login"
    }).as("unsuccessfulLogin");

    authLogin.login(credentials.invalidEmail, credentials.validPassword);
    cy.wait("@unsuccessfulLogin").then((interception) => {
      console.log("INTERCEPTION", interception);
      expect(interception.response.statusCode).eq(401);
      expect(interception.response.statusMessage).to.eq("Unauthorized");
    });

    cy.url().should("include", "/login");
    authLogin.errorMessage
      .should("be.visible")
      .and("have.text", "Bad Credentials")
      .and("have.css", "background-color", "rgb(248, 215, 218)")
      .and("have.class", "alert-danger");
  });

  it.only("Login with invalid password", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login"
    }).as("unsuccessfulLogin");

    authLogin.login(credentials.validEmail, credentials.invalidPassword);
    cy.wait("@unsuccessfulLogin").then((interception) => {
      console.log("INTERCEPTION", interception);
      expect(interception.response.statusCode).eq(401);
      expect(interception.response.statusMessage).to.eq("Unauthorized");
    });
  });

  it.only("Login with valid credentials", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login"
    }).as("successfulLogin");

    authLogin.login(credentials.validEmail, credentials.validPassword);
    cy.wait("@successfulLogin").then((interception) => {
      console.log("INTERCEPTION", interception);
      expect(interception.response.statusCode).eq(200);
    });

    cy.url().should("not.include", "/login");
  });
});
