import apiServices from "..";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "question";

/**
 * @description Hook para buscar os quizzes
 * @returns {import("@tanstack/react-query").UseQueryResult}
 */
export const useQuestions = (questionId) => {
  const getService = apiServices.getQuestion(questionId);
  return useQuery([QUERY_KEY, questionId], getService);
};

export default useQuestions;
