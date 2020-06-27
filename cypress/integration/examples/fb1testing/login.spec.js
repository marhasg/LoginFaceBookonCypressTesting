it('can log in', () => {
    const user = {
        email: 'yourFBemail',
        password: 'yourFBpassword'
    }

    cy.visit('https://www.facebook.com/')
    cy.get('input[name="email"]').type(user.email)
    cy.get('input[name="pass"]').type(user.password)
    cy.clearCookies()
    cy.get('input[type="submit"]').click()
    
})