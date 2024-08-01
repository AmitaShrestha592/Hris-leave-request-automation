// cypress/support/commands.js
Cypress.Commands.add('login', () => {
    cy.fixture('login').then((credentials) => {
        cy.visit('/') // Use relative URL
        cy.get('#Username').type(credentials.username)
        cy.get('#Password').type(credentials.password)
        cy.get('button[type="submit"]').click()
    })
})
