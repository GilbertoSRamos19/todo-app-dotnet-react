import React, { useState, useEffect } from 'react';
import { Container, Typography, List, Alert, Button } from '@mui/material';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import * as todoService from '../services/todoService';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/LocalStorage'; 

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await todoService.getTodos();
        setTodos(data);
        saveToLocalStorage('todos', data); 
      } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
        setError('Não foi possível carregar as tarefas. Verifique a conexão com a API.');
        const localTodos = getFromLocalStorage('todos');
        if (localTodos) {
          setTodos(localTodos);
          setError('Não foi possível conectar à API. Exibindo dados locais (pode estar desatualizado).');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleSaveTodo = async (newTodo) => {
    try {
      if (editingTodo) {
        // Edição
        // Envia a requisição PUT para a API.
        // A API retorna 204 No Content, então 'updatedTodoApi' será undefined.
        await todoService.updateTodo(editingTodo.id, {
          ...newTodo, // Dados do formulário (title, description)
          id: editingTodo.id, // Garante que o ID é incluído no objeto enviado
          createdDate: editingTodo.createdDate, // Mantém a data de criação original
          isCompleted: editingTodo.isCompleted // Mantém o status de conclusão original
        });

        // Constrói o objeto atualizado localmente para atualizar o estado
        const updatedTodoForState = {
          ...newTodo,
          id: editingTodo.id, // Usa o ID da tarefa que estava sendo editada
          createdDate: editingTodo.createdDate, // Mantém a data original
          isCompleted: editingTodo.isCompleted // Mantém o status original
        };

        // Atualiza o estado 'todos' substituindo a tarefa antiga pela atualizada localmente
        setTodos(todos.map((todo) => (todo.id === updatedTodoForState.id ? updatedTodoForState : todo)));
        setEditingTodo(null); // Limpa o estado de edição
      } else {
        // Adição (funciona como antes)
        const createdTodo = await todoService.createTodo(newTodo);
        setTodos([...todos, createdTodo]);
      }
      setError(null); // Limpa qualquer erro anterior
    } catch (err) {
      console.error('Erro ao salvar tarefa:', err);
      setError('Não foi possível salvar a tarefa. Tente novamente.');
    }
  };

  const handleToggleComplete = async (id, isCompleted) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = await todoService.updateTodo(id, { ...todoToUpdate, isCompleted });
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      setError(null);
    } catch (err) {
      console.error('Erro ao alternar conclusão:', err);
      setError('Não foi possível atualizar o status da tarefa. Tente novamente.');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setError(null);
    } catch (err) {
      console.error('Erro ao deletar tarefa:', err);
      setError('Não foi possível deletar a tarefa. Tente novamente.');
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Carregando Tarefas...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Lista de Tarefas
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TodoForm
        initialTodo={editingTodo}
        onSave={handleSaveTodo}
        onCancel={handleCancelEdit}
      />
      {todos.length === 0 && !loading && (
        <Alert severity="info">Nenhuma tarefa encontrada. Comece adicionando uma!</Alert>
      )}
      <List sx={{ width: '100%' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </List>
    </Container>
  );
}

export default TodoListPage;