/// <reference types= "cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro de um novo Usuario', () => {
    it('Cadastrar o usuario novo no site de Testes', () => {
        cy.visit("http://automationpractice.com")
        cy.get('.login').click()
        cy.get('#email_create').type(chance.email())

        cy.get('#SubmitCreate > span').click()

        //Preencher Cadastro
        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())

        cy.get('#passwd').type('123456')

        cy.get('#days').select('18')
        cy.get('#months').select('November')
        cy.get('#years').select('1988')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())
        cy.get('#id_state').select('Arkansas')
        cy.get('#postcode').type(chance.zip())
        
        cy.get('#phone_mobile').type(chance.phone({ formatted: false }))
        cy.get('#alias').clear()
        cy.get('#alias').type('Agilizei')

        cy.get('#submitAccount > span').click()

        cy.url().should('contain','index.php?controller=my-account')
        cy.get('.info-account').should('contain.text', 'Welcome to your account')
        
    });
});