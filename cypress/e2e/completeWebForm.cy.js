
describe('autocomplete the web form and submit', () => {
  beforeEach(() => {
    cy.visit('https://formy-project.herokuapp.com/form');
  });

  it('Fills out the form and submit.', () => {
    cy.get('#first-name').type('Bruna');
    cy.get('#last-name').type('Pelege');
    cy.get('#job-title').type('QA Analyst');
    cy.get('#radio-button-2').check();
    cy.get('#checkbox-2').check();
    cy.get('#select-menu').select('2');
    cy.get('#datepicker').type('2025-03-01');
    cy.get('a.btn.btn-lg.btn-primary').click();

    // Assert navigation to the Thank You page
    cy.url().should('include', '/thanks');

    // Assert text is visible
    cy.get('h1').should('have.text', 'Thanks for submitting your form');

    cy.get('h1').should('have.text', 'Thanks for submitting your form');
  })
})