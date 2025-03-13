import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/Bookings';
  private moviesUrl = 'http://localhost:3000/Movies';
  private showtimesUrl = 'http://localhost:3000/Showtimes';
  private theatersUrl = 'http://localhost:3000/Theaters';

  constructor(private http: HttpClient) { }

  getBookings(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`).pipe(
      switchMap(bookings => {
        const movieRequests = bookings.map(booking => this.http.get<any>(`${this.moviesUrl}/${booking.movieId}`));
        const showtimeRequests = bookings.map(booking => this.http.get<any>(`${this.showtimesUrl}/${booking.showtimeId}`));
        const theaterRequests = bookings.map(booking => this.http.get<any>(`${this.theatersUrl}/${booking.theaterId}`));

        return forkJoin([forkJoin(movieRequests), forkJoin(showtimeRequests), forkJoin(theaterRequests)]).pipe(
          map(([movies, showtimes, theaters]) => {
            return bookings.map((booking, index) => ({
              ...booking,
              movieTitle: movies[index].Title,
              showtime: showtimes[index].ShowDateTime,
              theater: theaters[index].Name
            }));
          })
        );
      })
    );
  }

  getBookingsAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBooking(booking: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, booking);
  }


  updateBooking(booking: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${booking.id}`, booking);
  }

  deleteBooking(bookingId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${bookingId}`);
  }
}
