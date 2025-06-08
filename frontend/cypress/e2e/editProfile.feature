Feature: Edição de Perfil
  Como um usuário logado
  Eu quero editar minhas informações pessoais
  Para manter meus dados atualizados

  Scenario: Edição de perfil com sucesso
    Given que eu estou logado na aplicação
    And eu estou na página de edição de perfil
    When eu preencho o campo "name" com "Alexandre"
    And eu preencho o campo "lastname" com "Silva Santos"
    And eu clico no botão "Alterar"
    Then eu devo ser redirecionado para a página "/myprofile"
    And a API deve ter recebido os dados atualizados