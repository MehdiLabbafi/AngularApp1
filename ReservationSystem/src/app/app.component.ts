import { Component, OnInit } from '@angular/core';
import { ReservationService } from './reservation.service';
import { ConservationArea } from './models/reservation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp1';
  areas!: ConservationArea[]; 

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.areas = this.reservationService.getConservationAreas();  
  }
}