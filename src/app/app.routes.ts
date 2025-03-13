import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';
import { AccountComponent } from './pages/account/account.component';
import { BookingComponent } from './pages/booking/booking.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'movies', component: MoviesComponent, title: 'Movies' },
    { path: 'login', component: CustomerLoginComponent, title: 'Customer Login' },
    { path: 'admin', component: AdminLoginComponent, title: 'Admin Login' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard], title: 'Admin Dashboard' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'account', component: AccountComponent, canActivate: [authGuard], title: 'Account' },
    { path: 'booking', component: BookingComponent, canActivate: [authGuard], title: 'Booking' },
    { path: 'movie-details', component: MovieDetailsComponent, title: 'Movie Details' },
    { path: 'search', component: SearchResultComponent, title: 'Search Results' }

];
