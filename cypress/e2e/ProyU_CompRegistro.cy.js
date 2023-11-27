import {faker} from '@faker-js/faker'
describe('Esc004-1', () => {
    it('RegistroCias', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(2) > .card > .card-body > .btn').click() //clic boton COMPAÑÍAS
      cy.get('.btn-warning').click() //clic botón REGISTRARSE
      cy.get('#email').type('biblioteca.elultimolibro@bibliored.co') //ingreso mail
      cy.get('#password').type('libro1234') //ingreso clave
      cy.get('#name').type('Bibliteca Secret Book') //ingreso nombre de la cia
      cy.get('#nit').type('890.777.321-1') //ingreso NIT
      cy.get('#phone').type(3007001100) //ingreso número de contacto
      cy.get('#location').type('Cll 12 # 4-44') //ingreso dirección
      //cy.get('.btn-primary').click() //clic a botón CREAR CUENTA
      //cy.wait(2000) //espera mientras carga pantalla de inicio
      //cy.get('.swal2-confirm').click() // clic a botón "OK"
    })
  })