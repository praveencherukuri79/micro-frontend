import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useThemeStore } from "../store/themeStore";

export const ProductsPage = () => {
  const { mode } = useThemeStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const widget = containerRef.current.querySelector("products-widget");
      if (widget) {
        widget.setAttribute("theme", mode);
      }
    }
  }, [mode]);

  return (
    <Box ref={containerRef} sx={{ width: "100%", minHeight: "100vh" }}>
      <products-widget theme={mode} />
    </Box>
  );
};
