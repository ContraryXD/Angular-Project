import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/bookings.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [CommonModule]
})
export class AccountComponent implements OnInit {
  user: any = null;
  bookings: any[] = [];

  constructor(private authService: AuthService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.fetchUserBookings(this.user.id);
    } else {
      console.error('User is not logged in');
    }
  }

  fetchUserBookings(userId: string): void {
    this.bookingService.getBookings(userId).subscribe(bookings => {
      this.bookings = bookings;
    });
  }
}
