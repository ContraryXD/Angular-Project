import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: '', component: MoviesComponent, title: 'Movie' }
];
