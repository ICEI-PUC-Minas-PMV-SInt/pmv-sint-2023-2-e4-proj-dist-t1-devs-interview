import apiServices from "..";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "quizzes";

/**
 * @description Hook para buscar os quizzes
 * @returns {import("@tanstack/react-query").UseQueryResult}
 */
export const useQuizzes = (search) => {
  const getService = apiServices.getQuizzes(search);
  return useQuery([QUERY_KEY, search], getService);
};

export default useQuizzes;
