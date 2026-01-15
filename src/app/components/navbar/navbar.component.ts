import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <h1>🍕 Restaurant App</h1>
      <div class="nav-links">
        <a routerLink="/menu">Menu</a>
        <a routerLink="/cart">Cart ({{ cartService.getItemCount() }})</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #3f51b5;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links a {
      color: white;
      margin-left: 20px;
      text-decoration: none;
    }
    .nav-links a:hover {
      text-decoration: underline;
    }
  `]
})
export class NavbarComponent {
  constructor(public cartService: CartService) {}
}