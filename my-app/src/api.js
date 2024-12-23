import axios from "axios";

const API_URL = "/api/user"; // Proxy ensures API calls reach back-end

export const getAllUsers = async () => await axios.get(`${API_URL}/getALLusers`);

export const createUser = async (userData) =>
  await axios.post(`${API_URL}/create`, userData);

export const updateUser = async (id, userData) =>
  await axios.put(`${API_URL}/update/${id}`, userData);

export const deleteUser = async (id) =>
  await axios.delete(`${API_URL}/delete/${id}`);
