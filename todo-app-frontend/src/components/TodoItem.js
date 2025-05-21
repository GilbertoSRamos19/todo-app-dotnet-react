import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Checkbox,
  Box,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const createdDate = new Date(todo.createdDate).toLocaleDateString();

  return (
    <ListItem
      secondaryAction={
        <Box>
          <IconButton edge="end" aria-label="edit" onClick={() => onEdit(todo)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
      sx={{
        border: '1px solid grey',
        borderRadius: '8px',
        mb: 1,
        backgroundColor: 'background.paper',
      }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.isCompleted}
          tabIndex={-1}
          disableRipple
          onChange={() => onToggleComplete(todo.id, !todo.isCompleted)}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.title}
          </Typography>
        }
        secondary={
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
              {todo.description}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              Criado em: {createdDate}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
}

export default TodoItem;