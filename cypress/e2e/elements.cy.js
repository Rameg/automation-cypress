/// <reference types="cypress" />

describe('work with basic elements', () => {

  beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  it('Text', () => {
    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Links', () => {
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })

  it.only('TextFilds', () =>{
    cy.get('#formNome').type('Cypress Test')
    cy.get('#formNome').should('have.value', 'Cypress Test')

    cy.get('#elementosForm\\:sugestoes')
      .type('Text area')
      .should('have.value', 'Text area')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('???')
    
    cy.get('[data-cy="dataSobrenome"]')
      .type('Teste12345{backspace}{backspace}')
      .should('have.value', 'Teste123')

    cy.get('#elementosForm\\:sugestoes')
      .clear()
      .type('Erro{selectall}acerto', { delay: 100 })
      .should('have.value', 'acerto')
  })
})