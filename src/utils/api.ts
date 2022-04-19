import axios from "axios";

export const api = axios.create({
  baseURL: " http://localhost:4000",
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/",
});

export const apiExport = axios.create({
  baseURL: process.env.REACT_APP_EXPORT_URL || "http://localhost:5000/",
  responseType: "blob",
});
