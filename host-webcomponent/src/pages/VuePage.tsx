import { Box } from "@mui/material";
import { WebComponentLoader } from "../components/WebComponentLoader";
import { useWebComponent } from "../hooks/useWebComponent";
import { useThemeStore } from "../store/themeStore";

export const VuePage = () => {
  const { mode } = useThemeStore();
  const { containerRef, loading, error } = useWebComponent("vue-widget", mode);

  return (
    <WebComponentLoader loading={loading} error={error} widgetName="Vue Remote">
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <vue-widget theme={mode} />
      </Box>
    </WebComponentLoader>
  );
};
