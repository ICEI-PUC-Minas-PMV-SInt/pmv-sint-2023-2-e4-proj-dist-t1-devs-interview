import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  name: "",
  score: "",
  realizedQuizes: [],
  search: "",
  preferDark: true,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    registerScore: (state, action) => {
      return produce(state, (draft) => {
        draft.score = action.payload;
      });
    },
    updateSearch: (state, action) => {
      return produce(state, (draft) => {
        draft.search = action.payload;
      });
    },
    registerQuizAnswer: (state, action) => {
      return produce(state, (draft) => {
        const quizIndex = draft.realizedQuizes.findIndex(
          (quiz) => quiz.idQuiz === action.payload.idQuiz
        );

        const answerQuestion = {
          idQuestion: action.payload.idQuestion,
          answer: action.payload.answer,
        };

        // se ainda não há o quiz registrado, ele o registra e adiciona a resposta default
        if (quizIndex < 0) {
          draft.realizedQuizes.push({
            idQuiz: action.payload.idQuiz,
            answers: [answerQuestion],
          });
          return;
        }

        const quizQuestionIndex = draft.realizedQuizes[
          quizIndex
        ].answers.findIndex(
          (question) => question.idQuestion === action.payload.idQuestion
        );

        // se há o quiz já registrado, ele verifica se há a questão já registrada, se há ele atualiza a resposta, se não ele adiciona a resposta
        if (quizQuestionIndex !== -1) {
          draft.realizedQuizes[quizIndex].answers[quizQuestionIndex].answer =
            action.payload.answer;
          return;
        }

        draft.realizedQuizes[quizIndex].answers.push(answerQuestion);
      });
    },
    updateUserName: (state, action) => {
      return produce(state, (draft) => {
        draft.name = action.payload;
      });
    },
    updatePreferDark: (state) => {
      return produce(state, (draft) => {
        draft.preferDark = !draft.preferDark;
      });
    },
  },
});

export const {
  registerScore,
  registerQuizAnswer,
  updateSearch,
  updateUserName,
  updatePreferDark,
} = userSlice.actions;

export default userSlice.reducer;
