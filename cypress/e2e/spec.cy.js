describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://weatherappmobile.netlify.app/');
    cy.get("#city-input").type("Seattle");
    cy.get('button').contains("Search").click();
    cy.wait(800);
    cy.get('#city-input').clear().type('San Francisco');
    cy.get('button').contains("Search").click();
  })
})