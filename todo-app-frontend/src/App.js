import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TodoListPage from './pages/TodoListPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul claro
    },
    secondary: {
      main: '#f48fb1', // Rosa
    },
    background: {
      default: '#121212', // Fundo escuro
      paper: '#1d1d1d',   // Elementos de papel escuros
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Para redefinir estilos CSS básicos e aplicar o tema */}
      <TodoListPage />
    </ThemeProvider>
  );
}

export default App;