// Bootstrap pattern for Module Federation
// Create async boundary to avoid eager consumption of shared modules
import('./bootstrap').catch((err) =>
  console.error('Error loading bootstrap:', err)
);
