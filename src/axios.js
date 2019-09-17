import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ciccc-mern-stack-app.herokuapp.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
});