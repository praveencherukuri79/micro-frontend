import { Box } from "@mui/material";
import { WebComponentLoader } from "../components/WebComponentLoader";
import { useWebComponent } from "../hooks/useWebComponent";
import { useThemeStore } from "../store/themeStore";

export const AngularVitePage = () => {
  const { mode } = useThemeStore();
  const { containerRef, loading, error } = useWebComponent(
    "angular-vite-widget",
    mode
  );

  return (
    <WebComponentLoader
      loading={loading}
      error={error}
      widgetName="Angular Vite"
    >
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <angular-vite-widget theme={mode} />
      </Box>
    </WebComponentLoader>
  );
};
