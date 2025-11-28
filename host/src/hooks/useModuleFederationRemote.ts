import { useEffect, useRef, useState } from "react";

type RemoteModule = {
  default: (
    container: HTMLElement,
    theme: string | "light" | "dark"
  ) => Promise<(() => void) | (() => void)>;
};

/**
 * Custom hook to load and manage a Module Federation remote
 * Handles mounting, unmounting, theme updates, and cleanup
 *
 * @param importRemote - Function that dynamically imports the remote (e.g., () => import("vueApp/App"))
 * @param remoteName - Display name for error messages
 * @param port - Port number where remote is running (for error messages)
 * @param theme - Current theme mode to pass to the remote
 * @returns Object with container ref and error state
 *
 * @example
 * const { containerRef, error } = useModuleFederationRemote(
 *   () => import("vueApp/App"),
 *   "Vue",
 *   5005,
 *   mode
 * );
 */
export function useModuleFederationRemote(
  importRemote: () => Promise<RemoteModule>,
  remoteName: string,
  port: number,
  theme: string
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [error, setError] = useState<{
    remoteName: string;
    port: number;
    message: string;
  } | null>(null);

  useEffect(() => {
    const loadRemote = async () => {
      try {
        if (!containerRef.current) return;

        // Clear any previous error
        setError(null);

        // Cleanup previous mount if exists
        if (cleanupRef.current) {
          cleanupRef.current();
        }

        // Dynamically import and mount the remote
        const { default: mountRemote } = await importRemote();
        cleanupRef.current = await mountRemote(
          containerRef.current,
          theme as any
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        console.error(`Error loading ${remoteName} remote:`, err);
        setError({
          remoteName,
          port,
          message: errorMessage,
        });
      }
    };

    loadRemote();

    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [theme, importRemote, remoteName, port]);

  return { containerRef, error };
}
