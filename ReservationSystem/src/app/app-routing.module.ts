import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookComponent } from './book/book.component'; // Add BookComponent

const routes: Routes = [
  { path: '', redirectTo: '/reservation', pathMatch: 'full' },
  { path: 'reservation', component: ReservationComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'book', component: BookComponent } // Add new path for BookComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }