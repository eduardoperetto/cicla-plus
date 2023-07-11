import axios from "axios";

const baseUrl = "http://143.54.85.139:8006/";

export const api = axios.create({
  baseURL: baseUrl,
});
