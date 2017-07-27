import { Component, OnInit } from '@angular/core';
import { CarsService } from 'app/services/cars.service';
import { NgForm, NgControl } from '@angular/forms';

@Component({
  selector: 'app-cars-listing',
  templateUrl: './cars-listing.component.html',
  styleUrls: ['./cars-listing.component.css']
})
export class CarsListingComponent implements OnInit {
  orderByParam: string = 'id';
  filterParam: string = '';
  cars;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(p => this.cars = p);
  }

  orderBy(value){
    this.orderByParam = value;
  }
}
