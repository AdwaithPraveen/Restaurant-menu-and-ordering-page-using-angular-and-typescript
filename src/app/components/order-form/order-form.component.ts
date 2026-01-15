import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="checkout-container">
      <h2>Checkout</h2>

      <div *ngIf="cartService.cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
        <button routerLink="/menu">Go to Menu</button>
      </div>

      <div *ngIf="cartService.cartItems.length > 0">
        <div class="order-summary">
          <h3>Order Summary</h3>

          <div *ngFor="let item of cartService.cartItems" class="order-item">
            {{ item.menuItem.name }} x {{ item.quantity }} =
            {{ item.menuItem.price * item.quantity | currency:'USD' }}
          </div>

          <p class="total">
            Total: {{ cartService.getTotal() | currency:'USD' }}
          </p>
        </div>

        <form (ngSubmit)="placeOrder()" class="checkout-form">
          <h3>Customer Information</h3>

          <div class="form-group">
            <label>Name:</label>
            <input [(ngModel)]="customerName" name="name" required>
          </div>

          <div class="form-group">
            <label>Email:</label>
            <input [(ngModel)]="customerEmail" name="email" type="email" required>
          </div>

          <div class="form-group">
            <label>Phone:</label>
            <input [(ngModel)]="customerPhone" name="phone" required>
          </div>

          <div class="form-buttons">
            <button type="button" routerLink="/cart">Back to Cart</button>
            <button type="submit" class="submit-btn">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .checkout-container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .order-summary {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 30px;
    }
    .order-item {
      padding: 5px 0;
      border-bottom: 1px solid #eee;
    }
    .total {
      font-weight: bold;
      font-size: 1.2em;
      margin-top: 15px;
    }
    .checkout-form {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 4px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .form-buttons {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit-btn {
      background: #4caf50;
      color: white;
    }
  `]
})
export class OrderFormComponent {
  customerName = '';
  customerEmail = '';
  customerPhone = '';

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  placeOrder() {
    if (this.customerName && this.customerEmail && this.customerPhone) {
      alert(
        `Order placed successfully!
Total: $${this.cartService.getTotal()}
Thank you, ${this.customerName}!`
      );
      this.cartService.clearCart();
      this.router.navigate(['/menu']);
    } else {
      alert('Please fill in all fields');
    }
  }
}
