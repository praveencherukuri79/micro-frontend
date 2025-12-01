/**
 * Dynamically load web component scripts ON DEMAND
 * Each widget is loaded only when first needed
 */

type WidgetConfig = {
  name: string;
  path: string;
};

const WIDGET_CONFIGS: Record<string, WidgetConfig> = {
  "shell-widget": { name: "shell-widget", path: "/widgets/shell-widget.js" },
  "products-widget": {
    name: "products-widget",
    path: "/widgets/products-widget.js",
  },
  "contact-widget": {
    name: "contact-widget",
    path: "/widgets/contact-widget.js",
  },
  "angular-webpack-widget": {
    name: "angular-webpack-widget",
    path: "/widgets/angular-webpack-widget.js",
  },
  "angular-vite-widget": {
    name: "angular-vite-widget",
    path: "/widgets/angular-vite-widget.js",
  },
  "vue-widget": { name: "vue-widget", path: "/widgets/vue-widget.js" },
};

// Track which widgets are currently loading to prevent duplicate loads
const loadingWidgets = new Set<string>();
const loadedWidgets = new Set<string>();

/**
 * Load a specific web component on demand
 * Returns immediately if already loaded/loading
 */
export async function loadWebComponent(
  widgetName: string
): Promise<{ success: boolean; error?: string }> {
  const widget = WIDGET_CONFIGS[widgetName];

  if (!widget) {
    const error = `Unknown widget: ${widgetName}`;
    console.error(error);
    return { success: false, error };
  }

  // Already loaded
  if (loadedWidgets.has(widgetName)) {
    console.log(`✓ ${widgetName} already loaded`);
    return { success: true };
  }

  // Currently loading - wait for it
  if (loadingWidgets.has(widgetName)) {
    console.log(`⏳ ${widgetName} is already loading, waiting...`);
    // Wait for the widget to be registered
    let attempts = 0;
    while (attempts < 50 && !customElements.get(widget.name)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      attempts++;
    }
    if (customElements.get(widget.name)) {
      return { success: true };
    }
    return {
      success: false,
      error: `Timeout waiting for ${widgetName} to register`,
    };
  }

  // Start loading
  loadingWidgets.add(widgetName);

  try {
    // Check if already registered (edge case)
    if (customElements.get(widget.name)) {
      console.log(`✓ ${widget.name} already registered`);
      loadedWidgets.add(widgetName);
      loadingWidgets.delete(widgetName);
      return { success: true };
    }

    console.log(`⬇️ Loading ${widgetName}...`);

    // Check if file exists first
    const response = await fetch(widget.path, { method: "HEAD" });
    if (!response.ok) {
      throw new Error(
        `Widget file not found: ${widget.path} (${response.status})\n` +
          `Please run: .\\start-webcomponents.ps1`
      );
    }

    // Dynamically load script
    const script = document.createElement("script");
    script.src = widget.path;
    script.type = "module";

    await new Promise<void>((resolve, reject) => {
      script.onload = () => resolve();
      script.onerror = () => {
        reject(new Error(`Failed to load script: ${widget.path}`));
      };
      document.head.appendChild(script);
    });

    // Wait for custom element registration (with timeout)
    let attempts = 0;
    while (attempts < 50 && !customElements.get(widget.name)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      attempts++;
    }

    // Verify registration
    if (!customElements.get(widget.name)) {
      throw new Error(`Widget loaded but not registered: ${widget.name}`);
    }

    console.log(`✅ ${widgetName} loaded and registered`);
    loadedWidgets.add(widgetName);
    loadingWidgets.delete(widgetName);

    return { success: true };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    console.error(`❌ Error loading ${widgetName}:`, errorMsg);
    loadingWidgets.delete(widgetName);
    return { success: false, error: errorMsg };
  }
}

/**
 * Load multiple widgets in parallel (for cases where you know you'll need several)
 * Still better than loading ALL widgets upfront
 */
export async function loadWebComponents(
  widgetNames: string[]
): Promise<{ success: boolean; errors: string[] }> {
  console.log(`Loading ${widgetNames.length} web components...`);

  const results = await Promise.all(
    widgetNames.map((name) => loadWebComponent(name))
  );

  const errors = results
    .filter((r) => !r.success)
    .map((r, i) => `${widgetNames[i]}: ${r.error}`)
    .filter((e): e is string => e !== undefined);

  const successCount = results.filter((r) => r.success).length;
  console.log(`✅ Loaded ${successCount}/${widgetNames.length} web components`);

  if (errors.length > 0) {
    console.warn("⚠️ Some widgets failed to load:", errors);
  }

  return {
    success: errors.length === 0,
    errors,
  };
}

/**
 * Get list of all available widgets
 */
export function getAvailableWidgets(): string[] {
  return Object.keys(WIDGET_CONFIGS);
}
