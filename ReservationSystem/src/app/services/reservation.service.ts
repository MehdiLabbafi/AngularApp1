// src/app/services/reservation.service.ts

import { Injectable } from '@angular/core';
import { ConservationArea, TimeSlot } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private areas: ConservationArea[] = [
    new ConservationArea(1, 'Area 1', this.generateSlots()),
    new ConservationArea(2, 'Area 2', this.generateSlots()),
    new ConservationArea(3, 'Area 3', this.generateSlots()),
    new ConservationArea(4, 'Area 4', this.generateSlots()),
  ];

  constructor() {}

  getConservationAreas(): ConservationArea[] {
    return this.areas;
  }

  private generateSlots(): TimeSlot[] {
    const slots = [];
    for (let i = 9; i <= 15; i++) {
      slots.push(new TimeSlot(`${i}:00 - ${i + 3}:00`, false));
    }
    return slots;
  }
}