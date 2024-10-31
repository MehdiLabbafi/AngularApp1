// src/app/book/book.component.ts

import { Component, OnInit } from '@angular/core';
import { ConservationArea } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  areas: ConservationArea[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.areas = this.reservationService.getConservationAreas();
  }

  bookSlot(area: ConservationArea, slotIndex: number): void {
    const slot = area.slots[slotIndex];
    if (!slot.isBooked) {
      slot.isBooked = true;
      alert(`You have booked ${slot.time} in ${area.name}`);
    } else {
      alert(`This slot is already booked.`);
    }
  }
}