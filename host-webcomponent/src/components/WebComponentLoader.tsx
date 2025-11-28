import { Box, CircularProgress, Typography } from "@mui/material";
import { ReactNode } from "react";

interface WebComponentLoaderProps {
  loading: boolean;
  error: string | null;
  widgetName: string;
  children: ReactNode;
}

/**
 * Wrapper component that handles loading and error states for web components
 * Shows loading spinner while widget loads, error message if it fails, or children when ready
 *
 * @example
 * <WebComponentLoader loading={loading} error={error} widgetName="Products">
 *   <products-widget theme={mode} />
 * </WebComponentLoader>
 */
export function WebComponentLoader({
  loading,
  error,
  widgetName,
  children,
}: WebComponentLoaderProps) {
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography>Loading {widgetName}...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          p: 3,
        }}
      >
        <Typography variant="h6" color="error" gutterBottom>
          Failed to Load {widgetName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {error}
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
