import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  isGridView: boolean = true;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  trackByFn(index: number, item: any): string {
    return item.id;
  }
}
