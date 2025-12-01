import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";
import { logger } from "../utils/logger";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);

    // Store error info in state
    this.setState({ errorInfo });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);

    // Production error tracking can be integrated here (Sentry, LogRocket, etc.)
    if (import.meta.env.PROD) {
      logger.error("React Error Boundary caught error:", error);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              textAlign: "center",
            }}
          >
            <ErrorIcon sx={{ fontSize: 80, color: "error.main", mb: 2 }} />
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We're sorry for the inconvenience. The page encountered an error.
            </Typography>
            {this.state.error && import.meta.env.DEV && (
              <Box sx={{ width: "100%", mb: 2 }}>
                <Typography
                  variant="body2"
                  color="error"
                  sx={{
                    fontFamily: "monospace",
                    bgcolor: "grey.100",
                    p: 2,
                    borderRadius: 1,
                    maxWidth: "100%",
                    overflow: "auto",
                    textAlign: "left",
                  }}
                >
                  <strong>Error:</strong> {this.state.error.message}
                  {this.state.errorInfo && (
                    <>
                      <br />
                      <br />
                      <strong>Component Stack:</strong>
                      <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={this.handleReset}
              >
                Try Again
              </Button>
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

    return this.props.children;
  }
}
