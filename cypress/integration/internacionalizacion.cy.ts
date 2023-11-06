describe('template spec', () => {
  it('Cambiar a Ingles', () => {
    cy.visit('localhost:4200')
    cy.get('select').select('Inglés')
    cy.get('select').contains('English')
    cy.get('select').should('contain', 'English')

  })
})
