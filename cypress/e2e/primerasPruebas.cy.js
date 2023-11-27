import {faker} from '@faker-js/faker'


describe('Validar Ingreso', () => {
  it('Clave errada', () => {
    cy.visit('https://www.arbitros.org/login.html')
    cy.get('#usuario').type(faker.person.firstName())
    cy.get('#clave').type(123355)
    cy.get('.btn').click()
    cy.contains('error', { matchCase: false })
  })
  it('Clave buena', () => {
    cy.visit('https://www.arbitros.org/login.html')
    cy.get('#usuario').type('oscar')
    cy.get('#clave').type(1234)
    cy.get('.btn').click()
    cy.contains('xx', { matchCase: false })
  })
})