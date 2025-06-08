Feature: Autenticação de Usuário
  Como um usuário cadastrado
  Eu quero fazer login
  Para acessar minha conta

  Scenario: Login com sucesso
    Given que eu sou um usuário registrado com o email "alex.silva@example.com" e senha "senhaForte123"
    And eu estou na página de login
    When eu preencho o campo de email com "alex.silva@example.com"
    And eu preencho o campo de senha com "senhaForte123"
    And eu clico no botão "Entrar"
    Then eu devo ver um alerta de "Login realizado com sucesso!"
    And eu devo ser redirecionado para a página "/home"

  Scenario: Tentativa de login com senha incorreta
    Given que a API de login retornará um erro de "não autorizado"
    And eu estou na página de login
    When eu preencho o campo de email com "alex.silva@example.com"
    And eu preencho o campo de senha com "senhaIncorreta"
    And eu clico no botão "Entrar"
    Then eu devo ver um alerta de "Erro: Credenciais inválidas"
    And eu devo continuar na página "/login"