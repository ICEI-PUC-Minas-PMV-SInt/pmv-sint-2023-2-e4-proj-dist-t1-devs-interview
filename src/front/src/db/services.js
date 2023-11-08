import QuizzesDB from "./Quizzes.json";

export const getSelectedQuestion = (selectedQuiz, id) => [
  selectedQuiz?.questions.find((question) => question.idQuestion === id),
  selectedQuiz?.questions.findIndex((question) => question.idQuestion === id),
];

export const getSelectedQuizByQuestionId = (id) => {
  const { Quizzes } = QuizzesDB;
  return Quizzes?.find(({ questions }) =>
    questions.find((question) => question.idQuestion === id)
  );
};

export const getQuestionId = (selectedQuiz) => (index) => {
  if (index > selectedQuiz?.questions?.lenght) {
    return getQuestionId(0);
  }
  return selectedQuiz.questions[index]?.idQuestion;
};

const buildQuiz = () => ({
  questions: [],
});

export const getQuizById = (id) => {
  const { Quizzes } = QuizzesDB;
  const foundQuiz = Quizzes?.find((quiz) => quiz.id === id);
  return foundQuiz ?? buildQuiz();
};

export const getQuizScore = (quiz) => {
  const baseQuiz = getQuizById(quiz.idQuiz);
  const { answers } = quiz;
  const mappedAnswers = answers.map((answer) => {
    const completeQuestion = (baseQuiz?.questions ?? [])?.find(
      (e) => e.idQuestion === answer.idQuestion
    );
    return {
      ...answer,
      ...completeQuestion,
      isCorrect: +completeQuestion?.correctAnswer === +answer.answer,
    };
  });

  return {
    quiz: baseQuiz,
    complete: baseQuiz.questions.length === mappedAnswers.length,
    completeQuestions: mappedAnswers,
    score: mappedAnswers.filter((e) => e.isCorrect).length,
    wrongAnswers: mappedAnswers.filter((e) => !e.isCorrect),
    correctAnswers: mappedAnswers.filter((e) => e.isCorrect),
    questionsCorrectAndWrong: baseQuiz.questions.map((question) => ({
      ...question,
      answered: Boolean(
        mappedAnswers.find((e) => e.idQuestion === question.idQuestion)
      ),
      isCorrect:
        mappedAnswers.find((e) => e.idQuestion === question.idQuestion)
          ?.isCorrect ?? false,
    })),
  };
};
