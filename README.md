# AngularApp1
### Assignment 2

# Reservation System with Shopping Cart

This project is an Angular-based reservation system that allows users to view and add products to a shopping cart. Users can add items to the cart, view cart details, adjust quantities, remove items, and complete the order process.

## Features

1. **Product Listing and Reservation**:
   - Displays a list of products with names, prices (in CAD), and an "Add to Cart" button.
   - When a product is added, a message confirms the addition to the cart.

2. **Cart Management**:
   - The cart page displays all items added by the user, showing product names, quantities, and prices.
   - Users can increase/decrease quantities for each item individually.
   - Option to remove a single item or all items from the cart.
   - Displays the total quantity and total price of all items in the cart.

3. **Order Completion**:
   - "Complete Order" button clears the cart, confirms order completion, and redirects users back to the reservation page.

## Project Structure

- **Components**:
  - `ReservationComponent`: Displays the list of products available for reservation.
  - `CheckoutComponent`: Manages the cart, displays items, and calculates totals.

- **Services**:
  - `CartService`: Manages adding, removing, and updating items in the cart, as well as calculating total prices and quantities.

- **Models**:
  - `Product`: Defines the structure of a product with `id`, `name`, `price`, and `quantity`.

## How to Use

1. **Start the Project**:
   ```bash
   npm install
   ng serve

   Open http://localhost:4200 in your browser to view the app.

	2.	Adding Products to the Cart:
	•	Go to the reservation page, select a product, and click “Add to Cart”.
	•	A confirmation message will be displayed.
	3.	Viewing and Managing Cart:
	•	Navigate to the cart page using the “Go to Checkout” button.
	•	Adjust quantities, remove items, and see the total amount.
	4.	Completing the Order:
	•	Click the “Complete Order” button to finalize your purchase.
	•	The system will clear the cart and redirect to the reservation page.

Technical Details

	•	Angular Version: 18.2.10
	•	TypeScript: Ensure that the TypeScript version is compatible with Angular.
	•	Dependencies: List your main dependencies if necessary.

Notes

	•	This project is designed for demonstration purposes to show a reservation system combined with a shopping cart.
	•	For any issues, please ensure your Node.js and Angular CLI versions are compatible with Angular 18.

 ## Contributors

- **Mehdi Labbafi** - Developer and creator of the project.

-------------------------------------------------------------------------------------------------------------------------
# AngularApp1
### Assignment 1

## Reservation System

This is an Angular project that allows users to book time slots for visiting different conservation areas. The system displays four areas, and each area contains several time slots available for booking.

## Features

- Displays four conservation areas, each with multiple time slots.
- Users can book available time slots by clicking the “Book Now” button.
- Once a time slot is booked, the button turns grey and is disabled to prevent further bookings for that time slot.
- The interface is designed to be responsive and user-friendly, with clear buttons and section separation.

## Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MehdiLabbafi/AngularApp1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AngularApp1
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```
   **Note:** If port 4200 is already in use on your system, you can specify a different port when running the project:
   ```bash
   ng serve --port 4300
   ```

## Project Structure

The project is structured as follows:

| Folder/File              | Description                                        |
|--------------------------|----------------------------------------------------|
| `src/app/`                | Contains the main application components           |
| `src/app/app.module.ts`   | Defines the main Angular module                    |
| `src/app/reservation/`    | Holds components and services related to reservations|
| `src/styles.css`          | Global styles for the application                  |
| `src/app/app.component.html` | Main component template, integrating the reservation system|

## How to Test

To test the booking functionality:

1. Open the project in your browser at `http://localhost:4200`.
2. You’ll see a list of four conservation areas, each with several available time slots.
3. Click the “Book Now” button next to any available time slot.
4. The button will turn grey, indicating the slot has been successfully booked.
5. You cannot book the same slot again once it has been marked as booked.

## Notes

- Ensure your development environment is set up with Node.js and Angular CLI.
- You can modify the appearance and layout of the application by updating the CSS styles located in `src/styles.css`.

## Contributors

- **Mehdi Labbafi** - Developer and creator of the project.
