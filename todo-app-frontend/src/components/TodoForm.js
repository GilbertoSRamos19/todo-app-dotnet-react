import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ initialTodo, onSave, onCancel }) {
  const [todo, setTodo] = useState(initialTodo || { title: '', description: '' });

  useEffect(() => {
    setTodo(initialTodo || { title: '', description: '' });
  }, [initialTodo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim() === '') {
      alert('O título não pode ser vazio!');
      return;
    }
    onSave(todo);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 3,
        p: 3,
        border: '1px solid grey',
        borderRadius: '8px',
        backgroundColor: 'background.paper',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Título"
        name="title"
        value={todo.title}
        onChange={handleChange}
        fullWidth
        required
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Descrição (opcional)"
        name="description"
        value={todo.description || ''} // Garante que não é undefined
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        color="primary"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button variant="contained" color="primary" type="submit">
          {initialTodo ? 'Salvar Edição' : 'Adicionar Tarefa'}
        </Button>
        {initialTodo && (
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default TodoForm;