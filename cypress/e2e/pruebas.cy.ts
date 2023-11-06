describe('Pruebas del Buscador', () => {
  it('Buscar por Rol', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="rol"]').select('Ingeniero de control de calidad')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })

  it('Buscar por Lenguaje', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="lenguage"]').select('Java')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })

  it('Buscar por Tecnologias', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="tools"]').select('Sí')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })

  it('Buscar por Habilidades Blandas', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="skill"]').select('Resiliencia')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })

  it('Buscar por Idiomas', () => {
    cy.visit('http://localhost:4200/search')
    cy.get('form').get('[formcontrolname="idiom"]').select('inglés')
    cy.contains('Buscar').click()
    cy.get('card').should('have.length.of.at.most', 1)

  })


})
