import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowtimesService } from '../../../services/showtime.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from '../movies/movies.component';
import { TheatersService } from '../../../services/theaters.service';
import { MoviesService } from '../../../services/movie.service';

@Component({
  selector: 'app-showtimes',
  imports: [CommonModule, FormsModule],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export class ShowtimesComponent implements OnInit {
  showtimes: any[] = [];
  movies: any[] = [];
  theaters: any[] = [];
  selectedShowtime: any = {};
  modalTitle: string = '';

  constructor(
    private showtimesService: ShowtimesService,
    private moviesService: MoviesService,
    private theatersService: TheatersService
  ) { }

  ngOnInit(): void {
    this.fetchShowtimes();
    this.fetchMovies();
    this.fetchTheaters();
  }

  fetchShowtimes(): void {
    this.showtimesService.getShowtimes().subscribe(showtimes => {
      this.showtimes = showtimes;
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

  getTheaterName(theaterId: string): string {
    const theater = this.theaters.find(t => t.id === theaterId);
    return theater ? theater.Name : '';
  }

  prepareModal(action: string, showtime?: any): void {
    if (action === 'add') {
      this.modalTitle = 'Add Showtime';
      this.selectedShowtime = { ShowDateTime: '', TheaterID: '' };
    } else if (action === 'edit') {
      this.modalTitle = 'Edit Showtime';
      this.selectedShowtime = { ...showtime };
    }
  }

  onSave(): void {
    if (this.modalTitle === 'Add Showtime') {
      this.showtimesService.addShowtime(this.selectedShowtime).subscribe(() => {
        this.fetchShowtimes();
      });
    } else if (this.modalTitle === 'Edit Showtime') {
      this.showtimesService.updateShowtime(this.selectedShowtime).subscribe(() => {
        this.fetchShowtimes();
      });
    }
  }

  deleteShowtime(showtimeId: string): void {
    this.showtimesService.deleteShowtime(showtimeId).subscribe(() => {
      this.fetchShowtimes();
    });
  }
}