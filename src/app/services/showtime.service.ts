import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  private apiUrl = 'http://localhost:3000/Showtimes';

  constructor(private http: HttpClient) { }

  getShowtimes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addShowtime(showtime: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, showtime);
  }

  updateShowtime(showtime: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${showtime.id}`, showtime);
  }

  deleteShowtime(showtimeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${showtimeId}`);
  }
}