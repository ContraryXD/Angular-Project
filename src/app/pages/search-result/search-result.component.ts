import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movie.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-result',
  imports: [CommonModule, RouterModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      this.searchMovies();
    });
  }

  searchMovies(): void {
    this.moviesService.searchMovies(this.searchQuery).subscribe(movies => {
      this.searchResults = movies.filter(movie => movie.Title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    });
  }
}


