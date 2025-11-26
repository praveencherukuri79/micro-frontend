import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsPage from './ProductsPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsPage />
    </ThemeProvider>
  </React.StrictMode>,
);

