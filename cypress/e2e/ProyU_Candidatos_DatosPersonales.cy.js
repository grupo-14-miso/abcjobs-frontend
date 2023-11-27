describe('Esc003', () => {
    it('RegDatosPers_Candidato', () => {
      cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
      cy.get(':nth-child(1) > .card > .card-body > .btn').click()
      cy.get('#email').type('lorenzo.lopez@gmail.co')
      cy.get('#password').type('lorenzoLopez33')
      cy.get('.btn-primary').click()
      cy.get(':nth-child(1) > .img-type-cv > .fa').click() //clic "Datos Personales"

      cy.get('.col-lg-12 > .row > .col-lg-2').type('CC') //ingreso tipo de documento
      cy.get('#documentNumber').type(11222111) //ingreso número de documento
      cy.get('#gender').type('hombre')
      cy.get('#nacionalidad').type('colombiano')
      cy.get('#estadoCivil').type('soltero')
      cy.get('#telefono').type(3207887700)
      cy.get('#paisNacimiento').type('Colombia')
      cy.get('#municipioNacimiento').type('Santa Marta')
      cy.get('#paisResidencia').type('Colombia')
      cy.get('#municipioResidencia').type('Bogotá')
      cy.wait(500) //espera mientras carga opciones
      cy.get(':nth-child(16) > label') //entra a label "Role"
      cy.get('#rol') //entra a caja "Role"
      cy.get('[value="2: 'Full Stack Developer'"]').click() //selección tipo de Rol
      cy.get('[value="1: java]').click() //selecc tipo lenguaje
      cy.get('[value="1: Jira]').click() //selecc tipo tecnología
      cy.get('[value="3: Pensamiento analítico]').click() //selecc tipo habilid blanda
      cy.get('.btn-primary').click() //clic en botón "GUARDAR"
    })
  })