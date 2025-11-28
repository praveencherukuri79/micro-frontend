import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';

bootstrapApplication(AppComponent).catch((err) =>
  console.error('Angular bootstrap error:', err)
);
