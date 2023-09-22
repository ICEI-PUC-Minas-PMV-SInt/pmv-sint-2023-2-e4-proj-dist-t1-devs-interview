# Especificação de APIs

| Endpoint                    | Método | Descrição                              | Parâmetros                                       | Formato da Resposta | Autenticação e Autorização |
| --------------------------- | ------ | -------------------------------------- | ------------------------------------------------- | -------------------- | --------------------------- |
| /login                      | POST   | Realizar o login do usuário no sistema | NULL                                              | JSON                 | JWT Token                   |
| /scores                     | DELETE | Deletar os scores                      | NULL                                              | JSON                 | JWT Token                   |
| /questions                  | POST   | Cadastro/Edição de Perguntas           | question (dados da pergunta)                    | JSON                 | JWT Token                   |
| /questions                  | GET    | Consulta de Perguntas                  | NULL                                              | JSON                 | JWT Token                   |
| /quizzes                    | POST   | Cadastro/Edição de Quiz               | quiz (dados do quiz)                            | JSON                 | JWT Token                   |
| /quizzes                    | GET    | Consulta de Quizzes                    | NULL                                              | JSON                 | JWT Token                   |
| /users                      | POST   | Cadastro de Usuários                   | user (dados do usuário)                        | JSON                 | JWT Token                   |
| /users                      | GET    | Consulta de Usuários                   | NULL                                              | JSON                 | JWT Token                   |
| /users/{user}               | PUT    | Alterar dados do usuário               | user (novos dados do usuário)                  | JSON                 | JWT Token                   |
| /users/{user}               | GET    | Buscar dados do usuário                | NULL                                              | JSON                 | JWT Token                   |


[Retorna](../README.md)
