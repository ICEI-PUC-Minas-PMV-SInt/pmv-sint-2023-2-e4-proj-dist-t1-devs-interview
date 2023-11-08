import axios from "axios";

/**
 * Define uma instancia do axios com a baseURL definida
 */
export const axiosInstance = axios.create({
  baseURL: "https://interviewapipuc.azurewebsites.net/api",
});

export default axiosInstance;
