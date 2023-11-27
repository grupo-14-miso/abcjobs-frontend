import {faker} from '@faker-js/faker'
describe('Esc005', () => {
    it('IngresoEmpleados', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(3) > .card > .card-body > .btn').click() //clic boton ABC JOBS
      cy.get('#email').type('jose@bowser.com') //ingresa email funcionario
      cy.get('#password').type('chocoB0wser')
      cy.get('.btn').click() //clic botón INGRESAR
      
    })
  })