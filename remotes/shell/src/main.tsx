import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const theme = createTheme();

// Standalone mode - for development/testing
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header 
          themeMode="light" 
          cartCount={5} 
          onToggleTheme={() => console.log('Toggle theme')}
          onNavigate={(path) => console.log('Navigate to:', path)}
        />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h1>Shell Remote - Standalone Mode</h1>
            <p>This remote exports Header and Footer components</p>
          </div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
);

