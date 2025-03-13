import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  imports: [RouterModule]
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  trailerUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.queryParamMap.get('movieId');
    if (movieId) {
      this.moviesService.getMovieById(movieId).subscribe(movie => {
        this.movie = movie;
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${movie.TrailerURL}`);
      });
    } else {
      console.error('Movie ID is null');
    }
  }
}
