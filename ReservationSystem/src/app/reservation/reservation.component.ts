import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ConservationArea } from '../models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
 
  areas: ConservationArea[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.areas = this.reservationService.getConservationAreas();
  }

  bookSlot(areaId: number, timeSlotIndex: number) {
    const area = this.areas.find(a => a.id === areaId);
    if (area && !area.availableSlots[timeSlotIndex].isBooked) {
      area.availableSlots[timeSlotIndex].isBooked = true;
      alert('Reservation successful!');
    } else {
      alert('Slot already booked.');
    }
  }
}