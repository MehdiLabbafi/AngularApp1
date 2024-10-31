import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookComponent } from './book/book.component'; // Add BookComponent
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    CheckoutComponent,
    BookComponent // Add BookComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }