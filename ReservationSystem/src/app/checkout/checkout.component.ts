import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {} // Add Router

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalQuantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeFromCart(product: Product): void {
    this.cartService.removeOneFromCart(product.id);
    this.cartItems = this.cartService.getCartItems();  // Restore items after deleting one of them
    this.calculateTotals();  // Update total values
  }

  completeOrder(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalQuantity = 0;
    this.totalPrice = 0;
    alert('Order completed!');
    
    // Redirection to the reservation page
    this.router.navigate(['/reservation']);
  }
}