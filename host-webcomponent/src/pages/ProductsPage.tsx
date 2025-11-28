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

  return (
    <WebComponentLoader loading={loading} error={error} widgetName="Products">
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <products-widget theme={mode} />
      </Box>
    </WebComponentLoader>
  );
};
