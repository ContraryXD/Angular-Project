import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any = {};
  modalTitle: string = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  prepareModal(action: string, movie?: any): void {
    if (action === 'add') {
      this.modalTitle = 'Add Movie';
      this.selectedMovie = { Title: '', Genre: '' };
    } else if (action === 'edit') {
      this.modalTitle = 'Edit Movie';
      this.selectedMovie = { ...movie };
    }
  }

  onSave(): void {
    if (this.modalTitle === 'Add Movie') {
      this.moviesService.addMovie(this.selectedMovie).subscribe(() => {
        this.fetchMovies();
      });
    } else if (this.modalTitle === 'Edit Movie') {
      this.moviesService.updateMovie(this.selectedMovie).subscribe(() => {
        this.fetchMovies();
      });
    }
  }

  deleteMovie(movieId: string): void {
    this.moviesService.deleteMovie(movieId).subscribe(() => {
      this.fetchMovies();
    });
  }
}
