import {faker} from '@faker-js/faker'
describe('Esc001', () => {
    it('NvoRegistro', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(1) > .card > .card-body > .btn').click() //clic boton registrarse
      cy.get('.btn-warning').click()
      cy.get('#name').type('Lorenzo')
      cy.get('#lastname').type('López')
      let correo = 'lorenzo.lopez@gmail.co'
      cy.get('#email').type(correo)
      let clave = 'lorenzoLopez33'
      cy.get('#password').type(clave)
      cy.get('.btn-primary').click()
      cy.get('.swal2-confirm').click() //ok final de registro
      cy.wait(500) //espera mientras carga pantalla de inicio
      cy.get('#email').type(correo) //iniciamos login
      cy.get('#password').type(clave)
      cy.get('.btn-primary').click()
      
    })
  })
  