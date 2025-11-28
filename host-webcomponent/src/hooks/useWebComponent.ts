import { useEffect, useRef, useState } from "react";
import { loadWebComponent } from "../utils/loadWebComponents";

/**
 * Custom hook to load and manage a web component
 * Handles loading state, errors, and theme updates
 *
 * @param widgetName - The name of the widget to load (e.g., "products-widget")
 * @param theme - Current theme mode to apply to the widget
 * @returns Object containing container ref, loading state, and error state
 *
 * @example
 * const { containerRef, loading, error } = useWebComponent("products-widget", mode);
 */
export function useWebComponent(widgetName: string, theme: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load widget on mount
  useEffect(() => {
    const loadWidget = async () => {
      const result = await loadWebComponent(widgetName);
      if (!result.success) {
        setError(result.error || `Failed to load ${widgetName}`);
      }
      setLoading(false);
    };

    loadWidget();
  }, [widgetName]);

  // Update theme when it changes
  useEffect(() => {
    if (containerRef.current && !loading) {
      const widget = containerRef.current.querySelector(widgetName);
      if (widget) {
        widget.setAttribute("theme", theme);
      }
    }
  }, [theme, loading, widgetName]);

  return { containerRef, loading, error };
}
