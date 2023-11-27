import {faker} from '@faker-js/faker'
describe('Esc004-2', () => {
    it('IngresoCias_Manús', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(2) > .card > .card-body > .btn').click() //clic boton COMPAÑÍAS
      cy.get('#email').type('comercial@gansoscorp.com') //ingresa email empresa
      cy.get('#password').type('gansosCorp')
      cy.get('.btn-primary').click() //clic botón INGRESAR
      cy.wait(1000) //espera mientras carga pantalla de inicio
      cy.get(':nth-child(1) > .nav-link').click() // clic a botón "Búsqueda de cand.."
      cy.wait(3000) //espera mientras carga menú
      cy.get(':nth-child(2) > .nav-link').click() // clic a botón "Mis proyectos"
      cy.wait(3000) //espera mientras carga menú
      cy.get(':nth-child(3) > .nav-link').click() //clic a botón "Entrevistas"
      cy.wait(3000) //espera mientras carga menú
      cy.get(':nth-child(4) > .nav-link').click() //clic a botón "Evaluación de des.."
    })
  })