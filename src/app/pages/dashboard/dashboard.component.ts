import { Component } from '@angular/core';
import { UsersComponent } from "./users/users.component";
import { MoviesComponent } from "./movies/movies.component";
import { ShowtimesComponent } from "./showtimes/showtimes.component";
import { BookingsComponent } from './bookings/bookings.component';
@Component({
  selector: 'app-dashboard',
  imports: [UsersComponent, MoviesComponent, ShowtimesComponent, BookingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
