import { Box } from "@mui/material";
import { RemoteErrorFallback } from "../components/RemoteErrorFallback";
import { useModuleFederationRemote } from "../hooks/useModuleFederationRemote";
import { useThemeStore } from "../store/themeStore";

/**
 * Angular Vite Remote Page
 * Dynamically loads and mounts the Angular Vite micro-frontend
 */
const AngularVitePage = () => {
  const { mode } = useThemeStore();
  const apiBasePath =
    import.meta.env.VITE_API_BASE_PATH || window.location.origin;

  const { containerRef, error } = useModuleFederationRemote(
    () => import("angularVite/App") as any,
    "Angular Vite",
    5006,
    mode,
    apiBasePath
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

export default AngularVitePage;
