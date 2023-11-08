import QuizzesDB from "./Quizzes.json";
import {
  getQuizById,
  getSelectedQuestion,
  getSelectedQuizByQuestionId,
} from "./services";

describe("Services", () => {
  it("Should getSelectedQuestion return a array with 2 elements", () => {
    const selectedQuiz = QuizzesDB.Quizzes[0];
    const selectedQuestion = selectedQuiz.questions[0];
    const result = getSelectedQuestion(
      selectedQuiz,
      selectedQuestion.idQuestion
    );
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });

  it("Should getSelectedQuestion return a array with 2 elements and the first element is the selected question", () => {
    const selectedQuiz = QuizzesDB.Quizzes[0];
    const selectedQuestion = selectedQuiz.questions[0];
    const result = getSelectedQuestion(
      selectedQuiz,
      selectedQuestion.idQuestion
    );
    expect(result[0]).toBe(selectedQuestion);
  });

  it("Should getSelectedQuestion return a array with 2 elements and the second element is the index of the selected question", () => {
    const selectedQuiz = QuizzesDB.Quizzes[0];
    const selectedQuestion = selectedQuiz.questions[0];
    const result = getSelectedQuestion(
      selectedQuiz,
      selectedQuestion.idQuestion
    );
    expect(result[1]).toBe(0);
  });

  it('Should getQuizById return a quiz with the "id" property equals to the "id" parameter', () => {
    const id = QuizzesDB.Quizzes[0].id;
    const result = getQuizById(id);
    expect(result.id).toBe(id);
  });

  it('Should getQuizById return a quiz with the "title" property equals to the "title" parameter', () => {
    const title = QuizzesDB.Quizzes[0].title;
    const result = getQuizById(QuizzesDB.Quizzes[0].id);
    expect(result.title).toBe(title);
  });

  it('Should getQuizById return a quiz with the "questions" property equals to the "questions" parameter', () => {
    const questions = QuizzesDB.Quizzes[0].questions;
    const result = getQuizById(QuizzesDB.Quizzes[0].id);
    expect(result.questions).toBe(questions);
  });

  it('Should getSelectedQuizByQuestionId return a quiz with the "id" property equals to the "id" parameter', () => {
    const id = QuizzesDB.Quizzes[0].questions[0].idQuestion;
    const result = getSelectedQuizByQuestionId(id);
    expect(result.questions[0].idQuestion).toBe(id);
  });
});
