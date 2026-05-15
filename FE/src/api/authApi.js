import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/auth";

export const register = (data) =>
  axios.post(`${API_URL}/register`, data);

export const login = (data) =>
  axios.post(`${API_URL}/login`, data);