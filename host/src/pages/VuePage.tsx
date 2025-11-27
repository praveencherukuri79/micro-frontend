import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useThemeStore } from "../store/themeStore";

/**
 * Vue Remote Page
 * Dynamically loads and mounts the Vue micro-frontend
 */
const VuePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useThemeStore();
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const loadVueRemote = async () => {
      try {
        if (!containerRef.current) return;

        if (cleanupRef.current) {
          cleanupRef.current();
        }

        const { default: mountVue } = await import("vueApp/App");

        cleanupRef.current = mountVue(containerRef.current, mode);
      } catch (error) {
        console.error("Error loading Vue remote:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #f44336;">
              <h2>Error Loading Vue Remote</h2>
              <p>Failed to load the Vue module.</p>
              <p style="font-size: 0.875rem; color: #757575;">
                Make sure the Vue remote is running on port 5005
              </p>
            </div>
          `;
        }
      }
    };

    loadVueRemote();

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

export default VuePage;
