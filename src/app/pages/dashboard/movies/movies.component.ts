import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movie.service';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  addMovie(): void {
    const newMovie = { Title: 'New Movie', Genre: 'Genre', ReleaseDate: '01/01/2023', Duration: 120, Rating: 5, Image: 'movie.jpg', TrailerURL: '', Cast: '', Description: '' };
    this.moviesService.addMovie(newMovie).subscribe(() => {
      this.fetchMovies();
    });
  }

  editMovie(movie: any): void {
    const updatedMovie = { ...movie, Title: 'Updated Movie' };
    this.moviesService.updateMovie(updatedMovie).subscribe(() => {
      this.fetchMovies();
    });
  }

  deleteMovie(movieId: string): void {
    this.moviesService.deleteMovie(movieId).subscribe(() => {
      this.fetchMovies();
    });
  }
}
