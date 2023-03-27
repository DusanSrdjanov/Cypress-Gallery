/// <reference types="Cypress" />

import { authLogin } from "../page_objects/loginPage";
import { createGallery } from "../page_objects/createGallery";
import { allGalleries } from "../page_objects/allGalleries";
import { faker } from "@faker-js/faker";

let credentials = {
  email: "nestonekoneki@gmail.com",
  password: "duleduledule991",
};

let galleryData = {
  title: faker.lorem.word(),
  description: faker.lorem.paragraph(),
  imageUrl: faker.image.imageUrl() + ".jpg",
};

let galleryId;

describe("Create gallery test", () => {
  before("Visit app and log in", () => {
    cy.loginViaBackend();
  });

  it("Create gallery", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/galleries",
    }).as("galleryCreation");

    cy.visit("/create");
    createGallery.createGalleryHeading
      .should("be.visible")
      .and("have.text", "Create Gallery");

    createGallery.createGallery(
      galleryData.title,
      galleryData.description,
      galleryData.imageUrl
    );

    cy.wait("@galleryCreation").then((interception) => {
      galleryId = interception.response.body.id;

      cy.visit(`/galleries/${galleryId}`);
      allGalleries.singleGalleryHeading.should(
        "have.text",
        interception.response.body.title
      );
    });
  });
});