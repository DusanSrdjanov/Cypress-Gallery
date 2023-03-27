class CreateGallery {

    get createGalleryHeading() {
      return cy.get("h1");
    }

    get createGalleryBtn() {
      return cy.get("a[href='/create']");
    }
    
    get galleryTitleInput() {
      return cy.get("#title");
    }

    get galleryDescriptionInput() {
      return cy.get("input").eq(1);
    }

    get addImageBtn() {
      return cy.get("button").eq(-3);
    }
  
    get imageUrlInput() {
      return cy.get(".input-group");
    }
  
    get createGalleryUpBtn() {
      return this.imageUrlInput.find("button").first();
    }
  
    get createGalleryDownBtn() {
      return this.imageUrlInput.find("button").last();
    }

    get submitBtn() {
      return cy.get("button").eq(-1);
    }

    createGallery(title, desc, imageUrl) {
      this.galleryTitleInput.type(title);
      this.galleryDescriptionInput.type(desc);
      this.imageUrlInput.type(imageUrl);
      this.submitBtn.click();
    }
  }
  
  export const createGallery = new CreateGallery();
  