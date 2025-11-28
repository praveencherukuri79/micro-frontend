import { Box } from "@mui/material";
import { RemoteErrorFallback } from "../components/RemoteErrorFallback";
import { useModuleFederationRemote } from "../hooks/useModuleFederationRemote";
import { useThemeStore } from "../store/themeStore";

/**
 * Angular Webpack Remote Page
 * Dynamically loads and mounts the Angular Webpack micro-frontend
 */
const AngularWebpackPage = () => {
  const { mode } = useThemeStore();
  const { containerRef, error } = useModuleFederationRemote(
    () => import("angularWebpack/App") as any,
    "Angular Webpack",
    5004,
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

export default AngularWebpackPage;
