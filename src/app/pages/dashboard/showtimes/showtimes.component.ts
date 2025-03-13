import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowtimesService } from '../../../services/showtime.service';

@Component({
  selector: 'app-showtimes',
  imports: [CommonModule],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export class ShowtimesComponent {
  showtimes: any[] = [];

  constructor(private showtimesService: ShowtimesService) { }

  ngOnInit(): void {
    this.fetchShowtimes();
  }

  fetchShowtimes(): void {
    this.showtimesService.getShowtimes().subscribe(showtimes => {
      this.showtimes = showtimes;
    });
  }

  addShowtime(): void {
    const newShowtime = { TheaterID: '1', ShowDateTime: '01/01/2023 10:00 AM' };
    this.showtimesService.addShowtime(newShowtime).subscribe(() => {
      this.fetchShowtimes();
    });
  }

  editShowtime(showtime: any): void {
    const updatedShowtime = { ...showtime, ShowDateTime: '01/01/2023 12:00 PM' };
    this.showtimesService.updateShowtime(updatedShowtime).subscribe(() => {
      this.fetchShowtimes();
    });
  }

  deleteShowtime(showtimeId: string): void {
    this.showtimesService.deleteShowtime(showtimeId).subscribe(() => {
      this.fetchShowtimes();
    });
  }
}
