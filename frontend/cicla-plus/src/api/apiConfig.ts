import axios from "axios";

const baseUrl = "http://localhost:8006";

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
