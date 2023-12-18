import axios from "axios";
export const BASE_URL = "http://127.0.0.1:8000";
export const getImage = (image) => {
  console.log(`${BASE_URL}/storage/users/${image}`);
  return `${BASE_URL}/storage/users/${image}`;
};
const useAxios = axios.create({
  baseURL: `${BASE_URL}/api`,
});
export default useAxios;
