import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/bookings.service';
import { MoviesService } from '../../services/movie.service';
import { ShowtimesService } from '../../services/showtime.service';
import { TheatersService } from '../../services/theaters.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [FormsModule, CommonModule]
})
export class BookingComponent implements OnInit {
  movie: any;
  showtimes: any[] = [];
  theaters: any[] = [];
  booking = {
    movieId: null,
    showtimeId: null,
    theaterId: null,
    seats: 1
  };
  totalPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    private showtimesService: ShowtimesService,
    private theatersService: TheatersService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.queryParamMap.get('movieId');
    if (movieId) {
      this.moviesService.getMovieById(movieId).subscribe(movie => {
        this.movie = movie;
        this.booking.movieId = movie.id;
        this.calculateTotalPrice();
      });
      this.fetchShowtimes();
      this.fetchTheaters();
    } else {
      console.error('Movie ID is null');
    }
  }

  fetchShowtimes(): void {
    this.showtimesService.getShowtimes().subscribe(showtimes => {
      this.showtimes = showtimes;
    });
  }

  fetchTheaters(): void {
    this.theatersService.getTheaters().subscribe(theaters => {
      this.theaters = theaters;
    });
  }

  calculateTotalPrice(): void {
    if (this.movie && this.booking.seats > 0) {
      this.totalPrice = this.movie.Price * this.booking.seats;
    }
  }

  onSubmit(): void {
    this.bookingService.addBooking(this.booking).subscribe({
      next: () => {
        alert('Booking successful!');
        this.router.navigate(['/movie-details'], { queryParams: { movieId: this.booking.movieId } });
      },
      error: (error) => {
        alert('Booking failed!');
        console.error(error);
      }
    });
  }
}
