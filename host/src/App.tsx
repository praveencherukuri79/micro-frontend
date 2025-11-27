import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, lazy, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { useAppStore } from './store/appStore';
import { useThemeStore } from './store/themeStore';
import { createAppTheme } from './theme/theme';

// Lazy load remote components
const Header = lazy(() => import('shellApp/Header'));
const Footer = lazy(() => import('shellApp/Footer'));
const ProductsPage = lazy(() => import('productsApp/ProductsPage'));
const ContactPage = lazy(() => import('contactApp/ContactPage'));
const AngularWebpackPage = lazy(() => import('./pages/AngularWebpackPage'));
const AngularVitePage = lazy(() => import('./pages/AngularVitePage'));
const VuePage = lazy(() => import('./pages/VuePage'));

// Loading component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
    }}
  >
    <CircularProgress />
  </Box>
);

// Wrapper component to use hooks inside BrowserRouter
const AppContent = () => {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeStore();
  const { cartCount } = useAppStore();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Header 
          themeMode={mode}
          cartCount={cartCount}
          onToggleTheme={toggleTheme}
          onNavigate={(path: string) => navigate(path)}
        />
      </Suspense>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/angular-webpack" element={<AngularWebpackPage />} />
            <Route path="/angular-vite" element={<AngularVitePage />} />
            <Route path="/vue" element={<VuePage />} />
          </Routes>
        </Suspense>
      </Box>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Box>
  );
};

function App() {
  const { mode } = useThemeStore();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

