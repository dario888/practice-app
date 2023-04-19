import axios from "axios";

//   "https://restcountries.com/v2/all?fields=name,flags,capital,currencies,region";
//   http://localhost:4000/posts

export const axiosData = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Accept: "application/json",
  },
});

export const axiosAuth = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
  },
});

axiosAuth.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

//GLOBAL AXIOS
// axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.headers.common["Authorization"] =
//   "TOKEN123hsi&5-9ensa86^%G#5g42";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
// axios.defaults.baseURL = "www.nba.com";
