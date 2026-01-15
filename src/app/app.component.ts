import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `
    <div class="app">
      <app-navbar></app-navbar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
    }
    .content {
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'restaurant-app';
}