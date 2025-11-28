/**
 * Creates a reusable error fallback DOM element
 * Used in catch blocks to display errors without hardcoded HTML
 *
 * @param title - Error title (e.g., "Error Loading Vue Remote")
 * @param message - Error message
 * @param details - Optional stack trace or additional details (shown in dev mode only)
 * @returns DOM element ready to be appended
 */
export function createErrorElement(
  title: string,
  message: string,
  details?: string
): HTMLElement {
  const errorDiv = document.createElement("div");
  errorDiv.className = "remote-error-fallback";
  errorDiv.style.cssText = `
    padding: 2rem;
    background-color: #ffebee;
    border: 1px solid #f44336;
    border-radius: 8px;
    color: #c62828;
    max-width: 600px;
    margin: 2rem auto;
  `;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;
  titleEl.style.cssText = "margin: 0 0 0.5rem 0; font-size: 1.25rem;";

  const messageEl = document.createElement("p");
  messageEl.textContent = message;
  messageEl.style.cssText = "margin: 0 0 1rem 0;";

  errorDiv.appendChild(titleEl);
  errorDiv.appendChild(messageEl);

  // Only show details in development mode
  if (details && import.meta.env.DEV) {
    const detailsEl = document.createElement("pre");
    detailsEl.textContent = details;
    detailsEl.style.cssText = `
      font-size: 0.75rem;
      margin: 1rem 0 0 0;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      overflow: auto;
      max-height: 200px;
    `;
    errorDiv.appendChild(detailsEl);
  }

  return errorDiv;
}

/**
 * Shows an error in a container, clearing any existing content
 */
export function showError(
  container: HTMLElement,
  title: string,
  message: string,
  details?: string
): void {
  container.innerHTML = "";
  container.appendChild(createErrorElement(title, message, details));
}
