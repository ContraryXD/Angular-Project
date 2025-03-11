import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: any[] = [];
  randomMovies: any[] = [];

  constructor(private movieService: MovieService) { }


  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.randomMovies = this.getRandomMovies(3);
    });
  }

  getRandomMovies(count: number) {
    const shuffled = this.movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
