describe('Esc002', () => {
  it('Ingreso', () => {
    cy.visit('https://abc-jobs-miso.oa.r.appspot.com/')
    cy.get(':nth-child(1) > .card > .card-body > .btn').click()
    cy.get('#email').type('fernanda.fernandez@aol.com')
    cy.get('#password').type('fernand@')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(1) > .img-type-cv > .fa').click()
  })
})