// src/app/models/reservation.model.ts

export class TimeSlot {
  constructor(public time: string, public isBooked: boolean) {}
}

export class ConservationArea {
  constructor(public id: number, public name: string, public slots: TimeSlot[]) {}
}