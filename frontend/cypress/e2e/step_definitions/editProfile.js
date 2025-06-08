import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que eu estou logado na aplicação', () => {
    // Para simular o estado de "logado", setamos o cookie de autenticação
    // que sua aplicação espera encontrar.
    cy.setCookie('token', 'meu-token-secreto-de-teste');
});

Given('eu estou na página de edição de perfil', () => {
    // Mock da API para o caso de a página carregar dados iniciais
    cy.intercept('PUT', '**/person/update', {
        statusCode: 200,
        body: { message: 'Informações atualizadas com sucesso!' }
    }).as('updateRequest');

    cy.visit('/edit-profile'); // Garanta que a rota está correta
});

// Reutilizamos o passo já criado em signup.js, isso é uma grande vantagem!
// When('eu preencho o campo "{string}" com "{string}"', (fieldId, value) => { ... });

When('eu clico no botão "Alterar"', () => {
    // O seletor pode precisar de ajuste dependendo do seu HTML final
    cy.contains('button', 'Alterar').click();
});

Then('a API deve ter recebido os dados atualizados', () => {
    cy.wait('@updateRequest').its('request.body').should('deep.equal', {
        name: 'Alexandre',
        lastname: 'Silva Santos',
        phone: '' // O campo telefone não foi preenchido no teste
    });
});