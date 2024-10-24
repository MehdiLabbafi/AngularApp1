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
```

