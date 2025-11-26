# Contact Remote Application

A remote micro-frontend that provides contact form and information.

## Features

- **Contact Form**: Full-featured contact form with validation
- **Contact Information**: Display company contact details
- **Form Submission**: Handles form submission with feedback
- **Responsive Design**: Mobile-friendly layout
- **Standalone Mode**: Can run independently for development

## Exposed Modules

- `./ContactPage`: Main contact page component

## Development

```bash
npm install
npm run dev
```

Runs on http://localhost:5002

Can be accessed:
- Standalone: http://localhost:5002
- Via Host: http://localhost:5000/contact

## Module Federation Config

```typescript
exposes: {
  './ContactPage': './src/ContactPage',
}
```

This module can be consumed by any Module Federation host configured to load from this remote.

