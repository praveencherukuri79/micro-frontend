# 🎨 Web Components Guide

All Module Federation remotes can also be used as **standalone Web Components**, allowing you to integrate them into ANY application (Vue, Angular, WordPress, vanilla JS, etc.)

## 🚀 Quick Start

### 1. Build Web Components

```bash
# Build all web components
cd remotes/shell
npm run build:webcomponent

cd ../products
npm run build:webcomponent

cd ../contact
npm run build:webcomponent
```

This creates `dist-webcomponent/` folders with:

- `{name}-widget.js` - ES module version
- `{name}-widget.umd.js` - UMD version (works in older browsers)

### 2. Use in HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <!-- Use the web component -->
    <products-widget theme="light"></products-widget>

    <!-- Load the script -->
    <script type="module" src="./products-widget.js"></script>
  </body>
</html>
```

## 📦 Available Web Components

### Products Widget

**Tag:** `<products-widget>`

**Attributes:**

- `theme` - "light" or "dark" (default: "light")

**Example:**

```html
<products-widget theme="dark"></products-widget>
<script type="module" src="./products-widget.js"></script>
```

---

### Contact Widget

**Tag:** `<contact-widget>`

**Attributes:**

- `theme` - "light" or "dark" (default: "light")

**Example:**

```html
<contact-widget theme="light"></contact-widget>
<script type="module" src="./contact-widget.js"></script>
```

---

### Shell Widget (Header/Footer)

**Tag:** `<shell-widget>`

**Attributes:**

- `component` - "header" or "footer" (default: "header")
- `theme` - "light" or "dark" (default: "light")
- `cart-count` - Number for shopping cart badge (default: 0)

**Events:**

- `theme-toggle` - Fired when theme button clicked
- `navigate` - Fired when nav link clicked (detail: `{path: string}`)

**Example:**

```html
<!-- Header -->
<shell-widget component="header" theme="light" cart-count="5"> </shell-widget>

<!-- Footer -->
<shell-widget component="footer" theme="light"> </shell-widget>

<script type="module" src="./shell-widget.js"></script>

<script>
  // Listen to events
  document
    .querySelector("shell-widget")
    .addEventListener("theme-toggle", () => {
      console.log("Theme toggle clicked");
    });

  document.querySelector("shell-widget").addEventListener("navigate", (e) => {
    console.log("Navigate to:", e.detail.path);
  });
</script>
```

## 🎯 Integration Examples

### React Integration

```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Load the web component script
    const script = document.createElement("script");
    script.src = "/products-widget.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <products-widget theme="dark" />
    </div>
  );
}
```

### Vue Integration

```vue
<template>
  <div>
    <h1>My App</h1>
    <products-widget :theme="theme" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
    };
  },
  mounted() {
    // Load web component
    const script = document.createElement("script");
    script.src = "/products-widget.js";
    script.type = "module";
    document.body.appendChild(script);
  },
};
</script>
```

### Angular Integration

```typescript
// app.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>My App</h1>
    <products-widget [attr.theme]="theme"></products-widget>
  `,
})
export class AppComponent implements OnInit {
  theme = "light";

  ngOnInit() {
    // Load web component
    const script = document.createElement("script");
    script.src = "/products-widget.js";
    script.type = "module";
    document.body.appendChild(script);
  }
}
```

### WordPress Integration

```php
<!-- In your theme's footer.php or functions.php -->
<products-widget theme="light"></products-widget>

<script type="module" src="<?php echo get_template_directory_uri(); ?>/assets/products-widget.js"></script>
```

## 🔧 Advanced Usage

### Dynamic Attributes

```javascript
const widget = document.querySelector("products-widget");

// Change theme dynamically
widget.setAttribute("theme", "dark");

// For shell widget, update cart count
const header = document.querySelector("shell-widget");
header.setAttribute("cart-count", "10");
```

### Event Handling

```javascript
const header = document.querySelector("shell-widget");

// Listen for theme toggle
header.addEventListener("theme-toggle", () => {
  console.log("User clicked theme toggle");
  // Update all widgets
  document.querySelectorAll("[theme]").forEach((el) => {
    const current = el.getAttribute("theme");
    el.setAttribute("theme", current === "light" ? "dark" : "light");
  });
});

// Listen for navigation
header.addEventListener("navigate", (e) => {
  console.log("User wants to navigate to:", e.detail.path);
  // Handle routing in your application
  window.location.href = e.detail.path;
});
```

## 📂 File Structure

After building, each remote will have:

```
remotes/products/
├── dist/                      # Module Federation build
│   └── assets/
│       └── remoteEntry.js
├── dist-webcomponent/         # Web Component build
│   ├── products-widget.js     # ES module
│   ├── products-widget.umd.js # UMD module
│   └── assets/                # Styles and assets
└── src/
    ├── ProductsPage.tsx       # Main component
    └── webcomponent.tsx       # Web component wrapper
```

## 🌐 CDN Hosting

To use via CDN:

1. **Build all web components:**

   ```bash
   npm run build:webcomponents
   ```

2. **Upload `dist-webcomponent` folders to your CDN**

3. **Use from anywhere:**
   ```html
   <products-widget theme="light"></products-widget>
   <script type="module" src="https://your-cdn.com/products-widget.js"></script>
   ```

## 🔄 Dual Mode Architecture

Each remote now supports **two deployment modes**:

| Mode                  | Use Case                          | How to Build                 | How to Use                      |
| --------------------- | --------------------------------- | ---------------------------- | ------------------------------- |
| **Module Federation** | Micro-frontends in same ecosystem | `npm run build`              | `import('remoteApp/Component')` |
| **Web Component**     | Integration anywhere              | `npm run build:webcomponent` | `<products-widget>` HTML tag    |

## 💡 Benefits

✅ **Framework Agnostic** - Use in React, Vue, Angular, or vanilla JS
✅ **Easy Integration** - Just a `<script>` tag and HTML element
✅ **Encapsulated** - Styles and logic are self-contained
✅ **Reusable** - Same component, multiple contexts
✅ **Standard** - Built on Web Components standard
✅ **Future Proof** - Native browser support

## 🎓 Examples

See `widgets/` folder for:

- `webcomponent-example.html` - Full demo with all components
- `simple-integration.html` - Minimal example

Run examples:

```bash
# Serve the widgets folder
npx serve widgets
# Open http://localhost:3000
```

## 🚀 Production Build Script

Build all web components at once:

```bash
# Add to root package.json
npm run build:webcomponents
```

This runs `build:webcomponent` for all remotes.

---

**Both worlds in one codebase!** 🎉
