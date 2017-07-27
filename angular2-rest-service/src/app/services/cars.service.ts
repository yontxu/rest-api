import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Car } from 'app/models/car';

const baseUrl = 'http://localhost:8000';

@Injectable()
export class CarsService {

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(`${baseUrl}/cars`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCar(id): Observable<Car> {
    return this.http.get(`${baseUrl}/cars/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createCar(body: any): Observable<Car> {
    return this.http.post(`${baseUrl}/cars`, body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateCar(id: number, body: any): Observable<Car> {
    return this.http.patch(`${baseUrl}/cars/${id}`, body)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
