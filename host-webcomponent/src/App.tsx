import {
  Box,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AngularVitePage } from "./pages/AngularVitePage";
import { AngularWebpackPage } from "./pages/AngularWebpackPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { VuePage } from "./pages/VuePage";
import { useCartStore } from "./store/cartStore";
import { useThemeStore } from "./store/themeStore";
import { loadWebComponent } from "./utils/loadWebComponents";
import { NavigationHandler } from "./utils/NavigationHandler";
import { getTheme } from "./utils/theme";

function App() {
  const { mode, toggleTheme } = useThemeStore();
  const { count } = useCartStore();
  const theme = getTheme(mode);
  const [shellLoading, setShellLoading] = useState(true);
  const [shellError, setShellError] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Load shell widget on mount (only header/footer - always visible)
  useEffect(() => {
    const loadShell = async () => {
      try {
        setShellLoading(true);
        const result = await loadWebComponent("shell-widget");
        if (!result.success) {
          setShellError(result.error || "Failed to load shell widget");
        }
        setShellLoading(false);
      } catch (err) {
        console.error("Failed to load shell widget:", err);
        setShellError("Failed to load shell widget. Please refresh the page.");
        setShellLoading(false);
      }
    };

    loadShell();
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      const header = headerRef.current.querySelector("shell-widget");
      if (header) {
        header.setAttribute("theme", mode);
        header.setAttribute("cart-count", count.toString());
      }
    }
    if (footerRef.current) {
      const footer = footerRef.current.querySelector("shell-widget");
      if (footer) {
        footer.setAttribute("theme", mode);
      }
    }
  }, [mode, count]);

  useEffect(() => {
    const handleThemeToggle = () => {
      toggleTheme();
    };

    window.addEventListener("theme-toggle", handleThemeToggle);
    return () => window.removeEventListener("theme-toggle", handleThemeToggle);
  }, [toggleTheme]);

  if (shellLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            gap: 2,
          }}
        >
          <CircularProgress size={60} />
          <Typography variant="h6" color="text.secondary">
            Loading shell...
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  if (shellError) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="error" gutterBottom>
            Failed to Load Shell Widget
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mb: 3, whiteSpace: "pre-line" }}
          >
            {shellError}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Make sure to run the build script from the project root first.
          </Typography>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavigationHandler />
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Box ref={headerRef}>
            <shell-widget theme={mode} cart-count={count} component="header" />
          </Box>

          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/angular-webpack" element={<AngularWebpackPage />} />
              <Route path="/angular-vite" element={<AngularVitePage />} />
              <Route path="/vue" element={<VuePage />} />
            </Routes>
          </Box>

          <Box ref={footerRef}>
            <shell-widget theme={mode} component="footer" />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
