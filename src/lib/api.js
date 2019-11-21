import axios from "axios";

const API_KEY = "17179bd0";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async keyword => {
  let response = await axios.get(`${API_URL}&s=${keyword}`);
  let { data } = response;
  return data;
};
