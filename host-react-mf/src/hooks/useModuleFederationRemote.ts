import { useEffect, useRef, useState } from "react";

type RemoteModule = {
  default: (
    container: HTMLElement,
    themeOrOptions: any
  ) => Promise<(() => void) | (() => void)>;
};

export interface RemoteMountOptions {
  theme?: string;
  apiBasePath?: string;
}

/**
 * Custom hook to load and manage a Module Federation remote
 * Handles mounting, unmounting, theme updates, and cleanup
 *
 * @param importRemote - Function that dynamically imports the remote
 * @param remoteName - Display name for error messages
 * @param port - Port number where remote is running (for error messages)
 * @param theme - Current theme mode to pass to the remote
 * @param apiBasePath - API base path to pass to the remote (optional, defaults to window.location.origin)
 * @returns Object with container ref and error state
 */
export function useModuleFederationRemote(
  importRemote: () => Promise<RemoteModule>,
  remoteName: string,
  port: number,
  theme: string,
  apiBasePath?: string
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

        // Pass options object instead of just theme
        const options: RemoteMountOptions = {
          theme,
          apiBasePath: apiBasePath || window.location.origin, // Auto-resolve
        };

        cleanupRef.current = await mountRemote(containerRef.current, options);
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
  }, [theme, importRemote, remoteName, port, apiBasePath]);

  return { containerRef, error };
}
