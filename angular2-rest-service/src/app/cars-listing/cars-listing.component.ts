import { Component, OnInit } from '@angular/core';
import { CarsService } from 'app/services/cars.service';

@Component({
  selector: 'app-cars-listing',
  templateUrl: './cars-listing.component.html',
  styleUrls: ['./cars-listing.component.css']
})
export class CarsListingComponent implements OnInit {
  cars;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(p => this.cars = p);
  }

}
