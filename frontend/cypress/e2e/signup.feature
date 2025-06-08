Feature: Cadastro de Usuário
  Como um novo visitante
  Eu quero me cadastrar na plataforma
  Para que eu possa acessar as funcionalidades exclusivas

  Scenario: Registro com sucesso (Caminho Feliz)
    Given que eu estou na página de cadastro
    When eu preencho o campo "name" com "Alex"
    And eu preencho o campo "lastname" com "Silva"
    And eu preencho o campo "email" com "alex.silva@example.com"
    And eu preencho o campo "password" com "senhaForte123"
    And eu preencho o campo "repeatPassword" com "senhaForte123"
    And eu clico no botão "Registrar-se"
    Then eu devo ver um alerta de "Cadastro realizado com sucesso!"
    And eu devo ser redirecionado para a página "/login"

  Scenario: Tentativa de registro com senhas divergentes
    Given que eu estou na página de cadastro
    When eu preencho o campo "name" com "Maria"
    And eu preencho o campo "lastname" com "Santos"
    And eu preencho o campo "email" com "maria.santos@example.com"
    And eu preencho o campo "password" com "senha123"
    And eu preencho o campo "repeatPassword" com "outraSenha456"
    And eu clico no botão "Registrar-se"
    Then eu devo ver um alerta de "As senhas não coincidem."
    And eu devo continuar na página "/signup"

  Scenario: Tentativa de registro com e-mail já existente
    Given que eu estou na página de cadastro
    And a API retornará um erro de conflito para o email "pedro.almeida@example.com"
    When eu preencho o campo "name" com "Pedro"
    And eu preencho o campo "lastname" com "Almeida"
    And eu preencho o campo "email" com "pedro.almeida@example.com"
    And eu preencho o campo "password" com "senhaCorreta123"
    And eu preencho o campo "repeatPassword" com "senhaCorreta123"
    And eu clico no botão "Registrar-se"
    Then eu devo ver um alerta de "Erro: Este e-mail já está em uso."
    And eu devo continuar na página "/signup"