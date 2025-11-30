import { CommonModule } from "@angular/common";
import { DoBootstrap, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { DataService } from "./services/data.service";
import { ThemeService } from "./services/theme.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule],
  providers: [DataService], // ThemeService is providedIn: 'root', don't override it here
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap() {
    // Manual bootstrapping handled in:
    // - angular-remote.ts (Module Federation)
    // - webcomponent.ts (Web Component)
    // - main.ts (Standalone dev)
  }
}
