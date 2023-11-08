import QuizzesDB from "./Quizzes.json";

describe("Should QuizzesDB is correct", () => {
  it("Should quizzes db to be a object", () => {
    expect(typeof QuizzesDB === "object");
  });

  it('Should quizzes have a "quizzes" property', () => {
    expect(QuizzesDB.hasOwnProperty("quizzes"));
  });

  it("Should quizzes property from quizzes db to be an array", () => {
    expect(Array.isArray(QuizzesDB.quizzes));
  });

  it('Should every quiz have a "id" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      expect(quiz.hasOwnProperty("id"));
    });
  });

  it('Sould every questions from quiz have a "idQuestion" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      quiz.questions.forEach((question) => {
        expect(question.hasOwnProperty("idQuestion"));
      });
    });
  });

  it('Sould every questions from quiz have a "description" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      quiz.questions.forEach((question) => {
        expect(question.hasOwnProperty("description"));
      });
    });
  });

  it('Sould every questions from quiz have a "correctAnswer" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      quiz.questions.forEach((question) => {
        expect(question.hasOwnProperty("correctAnswer"));
      });
    });
  });

  it('Should every quiz have a "title" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      expect(quiz.hasOwnProperty("title"));
    });
  });

  it('Should every quiz have a "questions" property', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      expect(quiz.hasOwnProperty("questions"));
    });
  });

  it('Should every quiz have a "questions" property and its a array', () => {
    QuizzesDB.Quizzes.forEach((quiz) => {
      expect(quiz.hasOwnProperty("questions") && Array.isArray(quiz.questions));
    });
  });
});
