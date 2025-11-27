import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useThemeStore } from "../store/themeStore";

/**
 * Angular Vite Remote Page
 * Dynamically loads and mounts the Angular Vite micro-frontend
 */
const AngularVitePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useThemeStore();
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const loadAngularRemote = async () => {
      try {
        if (!containerRef.current) return;

        if (cleanupRef.current) {
          cleanupRef.current();
        }

        const { default: mountAngular } = await import("angularVite/App");

        cleanupRef.current = await mountAngular(containerRef.current, mode);
      } catch (error) {
        console.error("Error loading Angular Vite remote:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #f44336;">
              <h2>Error Loading Angular Vite Remote</h2>
              <p>Failed to load the Angular module.</p>
              <p style="font-size: 0.875rem; color: #757575;">
                Make sure the Angular Vite remote is running on port 5006
              </p>
            </div>
          `;
        }
      }
    };

    loadAngularRemote();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [mode]);

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
