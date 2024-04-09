import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:3000/movies/${id}`);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:3000/movies', movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`http://localhost:3000/movies/${movie.id}`, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/movies/${id}`);
  }
}
