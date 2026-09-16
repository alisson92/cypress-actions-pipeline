describe('Formulario de Actions - Cypress Example', () => {
  it('deve preencher o campo de e-mail e marcar um checkbox disponivel', () => {
    const testEmail = 'teste.cypress@example.com'

    cy.visit('/commands/actions')

    cy.get('.action-email')
      .type(testEmail)
      .should('have.value', testEmail)

    cy.get('.action-checkboxes [type="checkbox"]')
      .not('[disabled]')
      .check()
      .should('be.checked')
  })
})
