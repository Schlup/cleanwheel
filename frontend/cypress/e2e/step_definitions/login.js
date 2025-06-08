import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu sou um usuário registrado com o email "{string}" e senha "{string}"', (email, password) => {
    // Mock da resposta de sucesso do login
    cy.intercept('POST', '**/auth/login', {
        statusCode: 200,
        body: { token: 'meu-token-secreto' },
    }).as('loginRequest');

    // Mock da busca de dados do perfil após o login
    cy.intercept('GET', '**/person/profile', {
        statusCode: 200,
        body: { name: 'Alex', lastname: 'Silva', email: email },
    }).as('profileRequest');
});

Given('que a API de login retornará um erro de "não autorizado"', () => {
    cy.intercept('POST', '**/auth/login', {
        statusCode: 401,
        body: { message: 'Credenciais inválidas' },
    }).as('loginFail');
});

Given('eu estou na página de login', () => {
    cy.visit('/login');
});

When('eu preencho o campo de email com "{string}"', (email) => {
    cy.get('#email').type(email);
});

When('eu preencho o campo de senha com "{string}"', (password) => {
    cy.get('#password').type(password);
});

When('eu clico no botão "Entrar"', () => {
    cy.get('button[type="submit"]').click();
});