import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu estou na página de cadastro', () => {
    cy.visit('/signup');
});

When('eu preencho o campo "{string}" com "{string}"', (fieldId, value) => {
    cy.get(`#${fieldId}`).type(value);
});

When('eu clico no botão "Registrar-se"', () => {
    cy.get('button[type="submit"]').click();
});

Then('eu devo ver um alerta de "{string}"', (alertText) => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains(alertText);
    });
});

Then('eu devo ser redirecionado para a página "{string}"', (url) => {
    cy.url().should('include', url);
});

Then('eu devo continuar na página "{string}"', (url) => {
    cy.url().should('include', url);
});

// Passo específico para mockar erro da API
Given('a API retornará um erro de conflito para o email "{string}"', (email) => {
    cy.intercept('POST', '**/auth/register', {
        statusCode: 409,
        body: { message: 'Este e-mail já está em uso.' },
    }).as('registerFail');
});