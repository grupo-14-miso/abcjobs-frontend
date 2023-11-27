import {faker} from '@faker-js/faker'
describe('Esc005-1', () => {
    it('IngresoEmpl_menún_internos', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(3) > .card > .card-body > .btn').click() //clic boton ABC JOBS
      cy.get('#email').type('jose@bowser.com') //ingresa email funcionario
      cy.get('#password').type('chocoB0wser')
      cy.get('.btn').click() //clic botón INGRESAR
      cy.wait(500) //espera mientras carga pantalla y menús
      cy.get(':nth-child(1) > .nav-link').click() //clic a botón "Pruebas"
      cy.wait(5000) //espera mientras carga pantalla y menús
      cy.get(':nth-child(2) > .nav-link').click() //clic a botón "Entrevistas"
      cy.wait(5000) //espera mientras carga pantalla y menús
      cy.get(':nth-child(3) > .nav-link').click () //clic a botón "Evaluación..."
    })
  })