// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    private orders: Order[] = [];

    placeOrder(order: Order): void {
        this.orders.push(order);
    }

    getOrders(): Order[] {
        return this.orders;
    }
}