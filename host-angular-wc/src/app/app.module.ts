import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { ProductsPageComponent } from './pages/products-page.component';
import { ContactPageComponent } from './pages/contact-page.component';
import { WebComponentLoaderDirective } from './directives/web-component-loader.directive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsPageComponent,
    ContactPageComponent,
    WebComponentLoaderDirective,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements (web components)
})
export class AppModule {}

