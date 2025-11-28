import { Box } from "@mui/material";
import { RemoteErrorFallback } from "../components/RemoteErrorFallback";
import { useModuleFederationRemote } from "../hooks/useModuleFederationRemote";
import { useThemeStore } from "../store/themeStore";

/**
 * Vue Remote Page
 * Dynamically loads and mounts the Vue micro-frontend
 */
const VuePage = () => {
  const { mode } = useThemeStore();
  const { containerRef, error } = useModuleFederationRemote(
    () => import("vueApp/App") as any,
    "Vue",
    5005,
    mode
  );

  if (error) {
    return (
      <RemoteErrorFallback
        remoteName={error.remoteName}
        port={error.port}
        error={error.message}
      />
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        minHeight: "100vh",
      }}
    />
  );
};

export default VuePage;
