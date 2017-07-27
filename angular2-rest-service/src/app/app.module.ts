import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CarsService } from 'app/services/cars.service';
import { CarsComponent } from './cars/cars.component';
import { CarsListingComponent } from './cars-listing/cars-listing.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarFormComponent } from './car-form/car-form.component';
import { OrderByPipe } from './pipes/order-by.pipe';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';

const carsRoutes: Routes = [
  { path: 'cars',
    component: CarsComponent,
    children: [
      { path: '', component: CarsListingComponent },
      { path: 'new', component: CarFormComponent },
      { path: ':car_id', component: CarDetailComponent },
      { path: ':car_id/edit', component: CarFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListingComponent,
    CarDetailComponent,
    CarFormComponent,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot( carsRoutes )
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
