import { Box, Button, Container, Typography } from "@mui/material";

interface RemoteErrorFallbackProps {
  remoteName: string;
  port?: number;
  error?: string;
  onRetry?: () => void;
}

/**
 * Reusable error fallback component for Module Federation remotes
 * Displays a user-friendly error message when a remote fails to load
 */
export function RemoteErrorFallback({
  remoteName,
  port,
  error,
  onRetry,
}: RemoteErrorFallbackProps) {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Error Loading {remoteName} Remote
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Failed to load the {remoteName} module.
        </Typography>

        {port && (
          <Typography variant="body2" color="text.secondary">
            Make sure the {remoteName} remote is running on port {port}
          </Typography>
        )}

        {error && import.meta.env.DEV && (
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "grey.100",
              p: 2,
              borderRadius: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body2"
              color="error"
              sx={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
            >
              {error}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: "flex", gap: 2 }}>
          {onRetry && (
            <Button variant="outlined" size="large" onClick={onRetry}>
              Try Again
            </Button>
          )}
          <Button
            variant="contained"
            size="large"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
