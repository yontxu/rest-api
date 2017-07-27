import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CarsService } from 'app/services/cars.service';
import { CarsComponent } from './cars/cars.component';
import { CarsListingComponent } from './cars-listing/cars-listing.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

import { AppComponent } from './app.component';

const carsRoutes: Routes = [
  { path: 'cars',
    component: CarsComponent,
    children: [
      { path: '', component: CarsListingComponent },
      { path: ':car_id', component: CarDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListingComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot( carsRoutes )
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
