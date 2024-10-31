import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  areas: Array<{ name: string, slots: string[] }> = [
    {
      name: 'Area 1',
      slots: [
        '9:00 - 12:00',
        '10:00 - 13:00',
        '11:00 - 14:00',
      ]
    },
    {
      name: 'Area 2',
      slots: [
        '9:00 - 12:00',
        '10:00 - 13:00',
        '11:00 - 14:00',
      ]
    },
  ];

  bookSlot(areaName: string, slot: string) {
    console.log(`Booking slot ${slot} in ${areaName}`);
    
  }
}