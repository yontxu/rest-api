import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarsService } from 'app/services/cars.service';
import { Car } from 'app/models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;
  car: Car;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private carsService: CarsService) {

      this.carForm = this.formBuilder.group({
        id: [''],
        model: ['', Validators.required],
        wheels: ['', Validators.required],
        color: ['', Validators.required],
        price: ['', Validators.required]
      });
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        let carId = params['car_id'];
        if (carId) {
          this.carsService.getCar(carId).subscribe( car => {
            this.carForm.setValue(car);
            this.car = car;
          });
        }else{
          this.car = new Car();
        }
      });
  }

  save() {
    if(this.car.id){
      console.log('Update');
    }else{
      console.log('Create');
    }
  }
}
