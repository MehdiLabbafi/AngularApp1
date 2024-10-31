import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCartItems() {
    return this.cart;
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeOneFromCart(productId: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.quantity -= 1;
      if (product.quantity <= 0) {
        this.cart = this.cart.filter(item => item.id !== productId);
      }
    }
  }
  
  removeFromCart(productId: number) {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        this.cart = this.cart.filter(p => p.id !== productId);
      }
    }
  }

  clearCart() {
    this.cart = [];
  }
}