import { Component } from '@angular/core';
import { BookingService } from '../../../services/bookings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings: any[] = [];

  constructor(private bookingsService: BookingService) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingsService.getBookingsAll().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  addBooking(): void {
    const newBooking = { movieId: '1', showtimeId: '1', theaterId: '1', seats: 2 };
    this.bookingsService.addBooking(newBooking).subscribe(() => {
      this.fetchBookings();
    });
  }

  editBooking(booking: any): void {
    const updatedBooking = { ...booking, seats: 4 };
    this.bookingsService.updateBooking(updatedBooking).subscribe(() => {
      this.fetchBookings();
    });
  }

  deleteBooking(bookingId: string): void {
    this.bookingsService.deleteBooking(bookingId).subscribe(() => {
      this.fetchBookings();
    });
  }
}
