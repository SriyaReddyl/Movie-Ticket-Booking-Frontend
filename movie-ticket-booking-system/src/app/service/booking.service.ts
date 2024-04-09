import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('http://localhost:3000/bookings');
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`http://localhost:3000/bookings/${id}`);
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>('http://localhost:3000/bookings', booking);
  }

  updateBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`http://localhost:3000/bookings/${booking.id}`, booking);
  }

  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/bookings/${id}`);
  }
}
