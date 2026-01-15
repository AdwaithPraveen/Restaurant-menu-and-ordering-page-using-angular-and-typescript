import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  addToCart(item: MenuItem): void {
    const existing = this.cartItems.find(ci => ci.menuItem.id === item.id);
    
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ menuItem: item, quantity: 1 });
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(ci => ci.menuItem.id !== itemId);
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => 
      sum + (item.menuItem.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}