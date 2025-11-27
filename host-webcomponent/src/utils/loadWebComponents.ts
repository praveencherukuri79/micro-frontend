/**
 * Dynamically load web component scripts
 */
export async function loadWebComponents() {
  const widgets = [
    { name: "shell-widget", path: "/widgets/shell-widget.js" },
    { name: "products-widget", path: "/widgets/products-widget.js" },
    { name: "contact-widget", path: "/widgets/contact-widget.js" },
    {
      name: "angular-webpack-widget",
      path: "/widgets/angular-webpack-widget.js",
    },
    { name: "angular-vite-widget", path: "/widgets/angular-vite-widget.js" },
    { name: "vue-widget", path: "/widgets/vue-widget.js" },
  ];

  const errors: string[] = [];

  const loadPromises = widgets.map(async (widget) => {
    try {
      // Check if already registered
      if (customElements.get(widget.name)) {
        console.log(`✓ ${widget.name} already registered`);
        return { success: true, widget: widget.name };
      }

      // Check if file exists first
      const response = await fetch(widget.path, { method: "HEAD" });
      if (!response.ok) {
        throw new Error(
          `Widget file not found: ${widget.path} (${response.status})`
        );
      }

      // Dynamically load script
      const script = document.createElement("script");
      script.src = widget.path;
      script.type = "module";

      await new Promise<void>((resolve, reject) => {
        script.onload = () => {
          console.log(`✓ Loaded ${widget.name}`);
          resolve();
        };
        script.onerror = (error) => {
          console.error(`✗ Failed to load ${widget.name}:`, error);
          reject(new Error(`Failed to load ${widget.name}`));
        };
        document.head.appendChild(script);
      });

      // Wait a bit for custom element registration
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Verify registration
      if (!customElements.get(widget.name)) {
        throw new Error(`Widget loaded but not registered: ${widget.name}`);
      }

      return { success: true, widget: widget.name };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error";
      console.error(`Error loading ${widget.name}:`, errorMsg);
      errors.push(`${widget.name}: ${errorMsg}`);
      return { success: false, widget: widget.name, error: errorMsg };
    }
  });

  const results = await Promise.all(loadPromises);
  const successCount = results.filter((r) => r.success).length;

  console.log(`✅ Loaded ${successCount}/${widgets.length} web components`);

  if (errors.length > 0) {
    console.warn("⚠️ Some widgets failed to load:", errors);
    throw new Error(
      `Failed to load ${errors.length} widget(s):\n${errors.join("\n")}\n\n` +
        `Please run: .\\start-webcomponents.ps1`
    );
  }
}
