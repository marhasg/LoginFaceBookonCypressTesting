describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://www.facebook.com/')


      cy.contains('email').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('marhashabilla@yahoo.com')
      .should('have.value', 'marhashabilla@yahoo.com')
    })
  })
  