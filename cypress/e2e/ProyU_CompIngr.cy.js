import {faker} from '@faker-js/faker'
describe('Esc004', () => {
    it('IngresoCias', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(2) > .card > .card-body > .btn').click() //clic boton COMPAÑÍAS
      cy.get('#email').type('comercial@gansoscorp.com') //ingresa email empresa
      cy.get('#password').type('gansosCorp')
      cy.get('.btn-primary').click() //clic botón INGRESAR
      
    })
  })