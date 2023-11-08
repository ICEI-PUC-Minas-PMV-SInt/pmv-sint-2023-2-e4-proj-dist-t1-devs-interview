import Quizzes from "@/db/Quizzes.json";
import { createServer } from "miragejs";
import { matchSorter } from "match-sorter";

let server = createServer({
  namespace: "/api",
});

server.get("/marvel-heroes-names", {
  data: ["Steve Rogers", "Tony Stark", "Natasha Romanova", "Jennifer Walters"],
});

server.get("/quizzes", (_e, request) => {
  let data = Quizzes.Quizzes;

  const search = request?.queryParams?.search;

  if (search) {
    data = matchSorter(data, search, {
      keys: ["title"],
    });
  }

  return {
    data,
  };
});

server.get("/question/:questionId", (_e, request) => {
  const questionId = request?.params?.questionId;
  const allQuestions = Quizzes.Quizzes.flatMap(({ questions, id, title }) =>
    questions.map((question, index) => ({
      ...question,
      index,
      quizId: id,
      quizTitle: title,
      nextQuestionId:
        index + 1 > questions.length
          ? questions[0]?.idQuestion
          : questions[index + 1]?.idQuestion,
      prevQuestionId:
        index - 1 < 0
          ? questions[questions.length - 1]?.idQuestion
          : questions[index - 1]?.idQuestion,
    }))
  );

  return {
    data: allQuestions.find(
      (question) => question.idQuestion === questionId
    ) ?? {
      title: "Pergunta não encontrada",
      description: "Pergunta não encontrada",
      questionId,
      allQuestions,
      alternatives: [],
    },
  };
});
