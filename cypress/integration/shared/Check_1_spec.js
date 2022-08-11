describe("alaskaair.com test: ", () => {
    it("Test", function () {
    cy.log("Hi!I am From Cypress");
    cy.visit("www.google.com");
    cy.wait(10000);
    });
});