import axios from 'axios';

// IMPORTANT: Verifique a porta HTTPS da sua API .NET.
// No terminal onde você roda 'dotnet run' (para a API), procure por:
// "Now listening on: https://localhost:7XXX" (onde XXX é a porta)
// Se não encontrar uma porta HTTPS, e só ver HTTP, use a porta HTTP, mas o HTTPS é o padrão.
// Exemplo: se a API .NET está em http://localhost:5041, a HTTPS será https://localhost:7041
const API_URL = 'https://localhost:7273/api/TodoItems'; // AJUSTADO PARA A PORTA CORRETA!

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_URL, {
    title: todo.title,
    description: todo.description
  });
  return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};