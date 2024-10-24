export class ConservationArea {
    constructor(
      public id: number,
      public name: string,
      public availableSlots: TimeSlot[]
    ) {}
  }
  
  export class TimeSlot {
    constructor(
      public time: string,
      public isBooked: boolean
    ) {}
  }