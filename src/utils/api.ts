import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const apiExport = axios.create({
  baseURL: "http://localhost:5000/",
  responseType: "blob",
});
