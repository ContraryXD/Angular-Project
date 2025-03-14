import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  selectedMovie: any = {};
  modalTitle: string = '';

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  prepareModal(action: string, movie: any = null) {
    if (action === 'add') {
      this.modalTitle = 'Add Movie';
      this.selectedMovie = {
        Title: '',
        Genre: '',
        ReleaseDate: '',
        Duration: 0,
        Rating: 0,
        Price: 0,
        Description: ''
      };
    } else if (action === 'edit') {
      this.modalTitle = 'Edit Movie';
      this.selectedMovie = { ...movie };
    }
  }

  onSave() {
    if (this.modalTitle === 'Add Movie') {
      this.movieService.addMovie(this.selectedMovie).subscribe(() => {
        this.loadMovies();
        alert('Movie added successfully');
      });
    } else if (this.modalTitle === 'Edit Movie') {
      this.movieService.updateMovie(this.selectedMovie).subscribe(() => {
        this.loadMovies();
        alert('Movie updated successfully');
      });
    }
  }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id).subscribe(() => {
      this.loadMovies();
    });
  }
}
