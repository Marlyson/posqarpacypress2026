/// <reference types="cypress" />

describe('Testes de Captura', () => {

        it('Capturar um Pokemon da Lista', () => {
            cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
            cy.get('#username').type('Red')
            cy.get('#password').type('321')
            cy.get('#pokeinit').type('Squirtle')
            cy.get('.btn btn-primary').click()
            cy.get('#mensagem-feedback').should('have.text', 'Login de Red TREINADOR CLÁSSICO efetuado com sucesso!')
            cy.get('#mensagem-feedback').should('contain', 'CLÁSSICO')
        });

        it('Capturar um Pokemon com um Treinador Qualquer', () => {
            cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
            cy.get('[data-cy="input-username"]').type('Teste');
            cy.get('[data-cy="input-password"]').type('3456');
            cy.get('[data-cy="input-pokeinit"]').type('Charmander');
            cy.get('[data-cy="botao-login"]').click();
            cy.get('#mensagem-feedback').should('have.text', 'Login de Teste TREINADOR QUALQUER efetuado com sucesso!')
            cy.get('#mensagem-feedback').should('contain', 'QUALQUER')
        })
})                                              
