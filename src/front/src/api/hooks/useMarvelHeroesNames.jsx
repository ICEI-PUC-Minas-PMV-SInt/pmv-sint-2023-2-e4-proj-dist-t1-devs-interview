import apiServices from "..";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "marvel-heroes-names";

/**
 * @description Hook para buscar os nomes dos heróis da Marvel
 * @returns {import("@tanstack/react-query").UseQueryResult}
 */
export const useMarvelHeroesNames = () => {
  const getService = apiServices.getMarvelHeroesName;
  return useQuery([QUERY_KEY], getService);
};

export default useMarvelHeroesNames;
