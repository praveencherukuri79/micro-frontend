import { Box } from "@mui/material";
import { WebComponentLoader } from "../components/WebComponentLoader";
import { useWebComponent } from "../hooks/useWebComponent";
import { useThemeStore } from "../store/themeStore";

export const ContactPage = () => {
  const { mode } = useThemeStore();
  const { containerRef, loading, error } = useWebComponent(
    "contact-widget",
    mode
  );

  return (
    <WebComponentLoader loading={loading} error={error} widgetName="Contact">
      <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
        <contact-widget theme={mode} />
      </Box>
    </WebComponentLoader>
  );
};
