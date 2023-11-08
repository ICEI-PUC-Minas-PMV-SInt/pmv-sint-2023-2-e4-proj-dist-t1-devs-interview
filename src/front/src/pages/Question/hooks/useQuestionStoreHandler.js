import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { registerQuizAnswer } from "../../../store/features/user";
import useQuestions from "@/api/hooks/useQuestion";

export const useQuestionGetter = () => {
  const { id } = useParams();
  return { ...useQuestions(id), id };
};

const useQuestionStoreHandler = () => {
  const dispatch = useDispatch();

  const handleUpdateQuestionAnswer = (answer, currentQuestion) => {
    console.log(answer, currentQuestion);
    dispatch(
      registerQuizAnswer({
        idQuiz: currentQuestion.quizId,
        idQuestion: currentQuestion.idQuestion,
        answer,
      })
    );
  };

  return {
    handleUpdateQuestionAnswer,
  };
};

export default useQuestionStoreHandler;
