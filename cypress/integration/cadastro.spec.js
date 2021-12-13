/// <reference types="cypress" />

var Chance = require('chance');
const { get } = require('lodash');
var chance = new Chance()

describe('Cadastro', () => {
  it('Quando informar os dados e finalizar, então um novo usuário será cadastrado no sistema', () => {
      cy.visit('http://automationpractice.com/index.php')

      cy.get('div .login').click()
      cy.get('input#email_create').type(chance.email())
      cy.get('button#SubmitCreate').click()

      cy.get('div#uniform-id_gender1').click
      cy.get('input#customer_firstname').type(chance.name())
      cy.get('input#customer_lastname').type(chance.last())
      cy.get('input#passwd').type('mudar@123')
      cy.get('select#days').select('1', {force: true})
      cy.get('select#months').select('1', {force: true})
      cy.get('select#years').select('1999', {force: true})
      cy.get('input#newsletter').click()
      cy.get('input#optin').click()

      cy.get('input#company').type(chance.name())
      cy.get('input#address1').type(chance.address())
      cy.get('input#address2').type('Teste')
      cy.get('input#city').type(chance.city())
      cy.get('select#id_state').select('2', {force: true})
      cy.get('input#postcode').type(chance.zip())
      cy.get('textarea#other').type('Teste Automação')
      cy.get('input#phone').type(chance.phone())
      cy.get('input#phone_mobile').type(chance.phone())
      cy.get('button#submitAccount').click()

      cy.get('a[title="Orders"]').should('be.visible')
      cy.url().should('contain', 'controller=my-account')
    });
});