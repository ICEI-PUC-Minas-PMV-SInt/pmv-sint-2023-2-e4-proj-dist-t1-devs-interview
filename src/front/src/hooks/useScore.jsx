import { useSelector } from "react-redux";
import { getQuizScore } from "../db/services";

const formatToPercent = (value) =>
  !isNaN(+value) ? `${(value * 100).toFixed(2)}%` : "--";

export const useScore = () => {
  const { realizedQuizes } = useSelector((state) => state.user);

  const quizesWithScore = realizedQuizes?.map((q) => getQuizScore(q)) || [];

  const passedQuestions =
    quizesWithScore?.reduce(
      (acc, curr) => acc + (curr?.quiz?.questions?.length || 0),
      0
    ) || 0;

  const correctAnswers =
    quizesWithScore?.reduce(
      (acc, curr) => acc + (curr?.correctAnswers?.length || 0),
      0
    ) || 0;

  const totalScore =
    quizesWithScore?.reduce(
      (acc, curr) => acc + curr?.score / curr?.quiz?.questions?.length,
      0
    ) || 0;

  const countRealizedQuizes = realizedQuizes?.length || 0;
  const countHitsInPercent = formatToPercent(totalScore / countRealizedQuizes);

  return {
    totalScore,
    quizesWithScore,
    countRealizedQuizes,
    countHitsInPercent,
    passedQuestions,
    correctAnswers,
  };
};
