import {faker} from '@faker-js/faker'


describe('Validar Reporte', () => {
  it('ValidarIngreso', () => {
    cy.visit('https://www.arbitros.org/login.html')
    cy.get('#usuario').type('oscar')
    cy.get('#clave').type(1234)
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .col-sm-9 > .form-select').select('Tarjeta de Identidad')
    cy.get('#radioMale').click()
  })
})