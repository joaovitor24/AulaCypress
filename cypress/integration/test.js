/// <reference types="cypress" />

describe ('Automação Web', () => {

    it ('acessando um site AutomationDemo', () =>{
        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('João')

        cy.get('[placeholder="Last Name"]').type('Vitor')

        cy.get('[ng-model="Adress"]').type('Rua das angelicas')

        cy.get('[ng-model="EmailAdress"]').type('jajja@gmail.com')

        cy.get('[ng-model="Phone"]').type('8597215486')

        cy.get('[value="Male"]').check()

        cy.get('#checkbox1').check()

        cy.get('#checkbox3').check()

        cy.get('#msdd').click()

        cy.get('.ui-autocomplete > :nth-child(8)').click()

        cy.get('h1').click()

        cy.get('#Skills').select('Adobe InDesign')

        cy.get('[ng-model="country"]').select ('Australia')

        cy.get('[aria-labelledby="select2-country-container"]').click()

        cy.get('#select2-country-results > :nth-child(7)').click()

        cy.get('#yearbox').select('1994')

        cy.get('[ng-model="monthbox"]').select('July')

        cy.get('#daybox').select('22')

        cy.get('[ng-model="Password"]').type('15489')

        cy.get('#secondpassword').type('15489')
         
        })

})