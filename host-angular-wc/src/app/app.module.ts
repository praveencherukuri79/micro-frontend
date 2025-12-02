import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { ProductsPageComponent } from './pages/products-page.component';
import { ContactPageComponent } from './pages/contact-page.component';
import { AngularWebpackPageComponent } from './pages/angular-webpack-page.component';
import { AngularVitePageComponent } from './pages/angular-vite-page.component';
import { VuePageComponent } from './pages/vue-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'angular-webpack', component: AngularWebpackPageComponent },
  { path: 'angular-vite', component: AngularVitePageComponent },
  { path: 'vue', component: VuePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsPageComponent,
    ContactPageComponent,
    AngularWebpackPageComponent,
    AngularVitePageComponent,
    VuePageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Required for web components
})
export class AppModule {}
