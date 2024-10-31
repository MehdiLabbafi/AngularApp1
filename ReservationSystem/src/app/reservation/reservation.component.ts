import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, quantity: 0 },
    { id: 2, name: 'Product 2', price: 150, quantity: 0 },
    { id: 3, name: 'Product 3', price: 200, quantity: 0 },
  ];

  constructor(private cartService: CartService) {}

  // New function to manage add to cart button
  onAddToCart(product: Product): void {
    if (product) {
      this.addToCart(product);
    }
  }

  // Main add to cart function
  private addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart.`);
  }
}