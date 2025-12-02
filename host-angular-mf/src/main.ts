// Lazy bootstrap pattern for Module Federation
// Creates async boundary to prevent eager consumption of shared modules
import('./bootstrap')
  .catch(err => console.error(err));

