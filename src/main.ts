import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './app/Environments/environment.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

if (environment.production) {
  enableProdMode();
} // Call this function to enable production mode

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

