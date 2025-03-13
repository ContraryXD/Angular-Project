import { Component } from '@angular/core';
import { BookingService } from '../../../services/bookings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movie.service';
import { TheatersService } from '../../../services/theaters.service';
import { ShowtimesService } from '../../../services/showtime.service';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  movies: any[] = [];
  theaters: any[] = [];
  showtimes: any[] = [];
  selectedBooking: any = {};
  modalTitle: string = '';

  constructor(
    private bookingsService: BookingService,
    private moviesService: MoviesService,
    private theatersService: TheatersService,
    private showtimesService: ShowtimesService
  ) { }

  ngOnInit(): void {
    this.fetchBookings();
    this.fetchMovies();
    this.fetchTheaters();
    this.fetchShowtimes();
  }

  fetchBookings(): void {
    this.bookingsService.getBookingsAll().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  fetchTheaters(): void {
    this.theatersService.getTheaters().subscribe(theaters => {
      this.theaters = theaters;
    });
  }

  fetchShowtimes(): void {
    this.showtimesService.getShowtimes().subscribe(showtimes => {
      this.showtimes = showtimes;
    });
  }

  getMovieName(movieId: string): string {
    const movie = this.movies.find(m => m.id === movieId);
    return movie ? movie.Title : '';
  }

  getTheaterName(theaterId: string): string {
    const theater = this.theaters.find(t => t.id === theaterId);
    return theater ? theater.Name : '';
  }

  getShowDateTime(showtimeId: string): string {
    const showtime = this.showtimes.find(s => s.id === showtimeId);
    return showtime ? showtime.ShowDateTime : '';
  }

  prepareModal(action: string, booking?: any): void {
    if (action === 'add') {
      this.modalTitle = 'Add Booking';
      this.selectedBooking = { movieId: '', showtimeId: '', theaterId: '', seats: 1 };
    } else if (action === 'edit') {
      this.modalTitle = 'Edit Booking';
      this.selectedBooking = { ...booking };
    }
  }

  onSave(): void {
    if (this.modalTitle === 'Add Booking') {
      this.bookingsService.addBooking(this.selectedBooking).subscribe(() => {
        this.fetchBookings();
      });
    } else if (this.modalTitle === 'Edit Booking') {
      this.bookingsService.updateBooking(this.selectedBooking).subscribe(() => {
        this.fetchBookings();
      });
    }
  }

  deleteBooking(bookingId: string): void {
    this.bookingsService.deleteBooking(bookingId).subscribe(() => {
      this.fetchBookings();
    });
  }
}