import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../data';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  constructor(private http: HttpClient) { }

  getAllTheatres(): Observable<Theatre[]> {
    return this.http.get<Theatre[]>('http://localhost:3000/theatres');
  }

  getTheatreById(id: number): Observable<Theatre> {
    return this.http.get<Theatre>(`http://localhost:3000/theatres/${id}`);
  }

  addTheatre(theatre: Theatre): Observable<Theatre> {
    return this.http.post<Theatre>('http://localhost:3000/theatres', theatre);
  }

  updateTheatre(theatre: Theatre): Observable<Theatre> {
    return this.http.put<Theatre>(`http://localhost:3000/theatres/${theatre.id}`, theatre);
  }

  deleteTheatre(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/theatres/${id}`);
  }
}
