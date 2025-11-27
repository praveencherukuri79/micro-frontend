import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header 
          themeMode="light" 
          cartCount={5} 
          onToggleTheme={() => {}}
          onNavigate={() => {}}
        />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <div>
            <h1>Shell Remote</h1>
            <p>Standalone mode - exports Header and Footer components</p>
          </div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);

