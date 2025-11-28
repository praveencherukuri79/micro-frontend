import { Box } from "@mui/material";
import { WebComponentLoader } from "../components/WebComponentLoader";
import { useWebComponent } from "../hooks/useWebComponent";
import { useThemeStore } from "../store/themeStore";

export const AngularWebpackPage = () => {
  const { mode } = useThemeStore();
  const { containerRef, loading, error } = useWebComponent(
    "angular-webpack-widget",
    mode
  );

  return (
    <WebComponentLoader
      loading={loading}
      error={error}
      widgetName="Angular Webpack"
    >
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <angular-webpack-widget theme={mode} />
      </Box>
    </WebComponentLoader>
  );
};
