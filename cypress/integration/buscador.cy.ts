describe.only('Prueba Buscador', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="lenguage"]').select('Java')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })
})
