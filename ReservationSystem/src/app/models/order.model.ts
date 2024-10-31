// src/app/models/order.model.ts
export class Order {
    constructor(
        public id: number,
        public items: any[], // Define the items in the order
        public total: number
    ) {}
}