/// <reference types="Cypress" />

import { authLogin } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleries";

const credentials = {
    email: "nestonekoneki@gmail.com",
    password: "duleduledule991",
};

describe("All galleries page test", () => {
    beforeEach("Visit app and login", () => {
        cy.visit("/login");
        authLogin.login(credentials.email, credentials.password);
        cy.url().should("not.include", "/login");
    });

    it("Loads page successfully", () => {
        allGalleries.allGalleriesHeading
            .should("be.visible")
            .and("exist")
            .and("have.text", "All Galleries");

        allGalleries.allGalleries
            .should("be.visible")
            .and("have.length", 10);

        allGalleries.singleGallery
            .find("img")
            .should("be.visible");

        allGalleries.filterBtn
            .should("be.visible")
            .should("not.be.disabled");

        allGalleries.loadMoreBtn
            .should("be.visible")
            .should("not.be.disabled");

        allGalleries.searchInput
            .should("be.visible")
            .should("not.be.disabled"); 
    });

    it("Test pagination", () => {
        allGalleries.allGalleries.should("be.visible").and("have.length", 10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 20);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 30);
    });

    it.only("Test search", () => {
        let searchTerm = "Gallery with 2 images";

        allGalleries.search(searchTerm);
        allGalleries.allGalleries.should("be.visible").and("have.length", 10);
        allGalleries.singleGallery.find("a").first().click();
        cy.get("h1").should("be.visible").and("have.text", searchTerm);
    });

    it("Click on gallery title redirects to single gallery page", () => {
        allGalleries.singleGallery.find("a").first().click();
    });
});
