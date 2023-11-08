const User = {
  name: "",
  quizzes: [
    {
      idQuiz: "abc",
      answers: [
        {
          idQuestion: "def",
          answer: 3,
        },
      ],
    },
  ],
};

const Question = {
  idQuestion: "def",
  description: "",
  correctAnswer: 2,
  options: ["abc", "def", "ghi", "jkl"],
};

const Quiz = {
  id: "abc",
  score: "",
  title: "CSS",
  questions: [Question, Question, Question],
};

const Quizzes = [Quiz, Quiz, Quiz, Quiz];
