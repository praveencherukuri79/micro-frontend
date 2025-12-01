import { Box } from "@mui/material";
import { WebComponentLoader } from "../components/WebComponentLoader";
import { useWebComponent } from "../hooks/useWebComponent";
import { useThemeStore } from "../store/themeStore";

export const ProductsPage = () => {
  const { mode } = useThemeStore();
  const { containerRef, loading, error } = useWebComponent(
    "products-widget",
    mode
  );

  // Define API base path (can be from env, config, or auto-resolve)
  const apiBasePath = window.location.origin; // Or from config

  return (
    <WebComponentLoader loading={loading} error={error} widgetName="Products">
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <products-widget theme={mode} api-base-path={apiBasePath} />
      </Box>
    </WebComponentLoader>
  );
};
