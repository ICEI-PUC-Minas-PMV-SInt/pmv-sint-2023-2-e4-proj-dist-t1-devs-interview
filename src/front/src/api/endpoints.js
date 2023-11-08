/**
 * Relaciona os endpoints com o objeto, geralmente o nome da chave é o endpoint, mas o endpoint é em snake_case e a chave é em camelCase
 */
export const endpoints = {
  marvelHeroesNames: "/marvel-heroes-names",
  quizzes: "/quizzes",
  question: "/question/:questionId",
};

export default endpoints;
