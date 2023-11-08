import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  questions: [],
  title: "",
  id: "",
  currentQuestion: null,
  currentQuestionIndex: 0,
  score: 0,
  isFinished: false,
};

export const quizSlice = createSlice({
  initialState,
  name: "quiz",
  reducers: {
    setQuiz: (state, action) => {
      return produce(state, (draft) => {
        draft.questions = action.payload?.questions;
        draft.title = action.payload?.title;
        draft.id = action.payload?.id;
        draft.currentQuestion = action.payload?.currentQuestion;
        draft.currentQuestionIndex = action.payload?.currentQuestionIndex;
        draft.score = action.payload?.score;
        draft.isFinished = action.payload?.isFinished;
      });
    },
  },
});

export const { setQuiz } = quizSlice.actions;

export default quizSlice.reducer;
