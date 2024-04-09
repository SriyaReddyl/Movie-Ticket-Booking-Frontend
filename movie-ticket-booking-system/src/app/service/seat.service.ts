import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from '../data';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient) { }

  getAllSeats(): Observable<Seat[]> {
    return this.http.get<Seat[]>('http://localhost:3000/seats');
  }

  getSeatById(id: number): Observable<Seat> {
    return this.http.get<Seat>(`http://localhost:3000/seats/${id}`);
  }

  addSeat(seat: Seat): Observable<Seat> {
    return this.http.post<Seat>('http://localhost:3000/seats', seat);
  }

  updateSeat(seat: Seat): Observable<Seat> {
    return this.http.put<Seat>(`http://localhost:3000/seats/${seat.id}`, seat);
  }

  deleteSeat(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/seats/${id}`);
  }
}
