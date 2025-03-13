import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isAdmin = false;
  private currentUser: any = null;

  constructor(private router: Router, private usersService: UsersService) { }

  loginCustomer(email: string, password: string): Observable<boolean> {
    return this.usersService.getCustomer(email, password).pipe(
      map(userCustomer => {
        if (userCustomer) {
          this.isAuthenticated = true;
          this.isAdmin = false;
          this.currentUser = userCustomer;
          this.router.navigate(['/']);
          return true;
        } else {
          this.isAuthenticated = false;
          return false;
        }
      })
    );
  }

  signUpCustomer(newUser: any): Observable<boolean> {
    return this.usersService.addUser(newUser).pipe(
      map(response => {
        return response ? true : false;
      })
    );
  }

  loginAdmin(email: string, password: string): Observable<boolean> {
    return this.usersService.getAdmin(email, password).pipe(
      map(userAdmin => {
        if (userAdmin) {
          this.isAuthenticated = true;
          this.isAdmin = true;
          this.currentUser = userAdmin;
          this.router.navigate(['/dashboard']);
          return true;
        } else {
          this.isAuthenticated = false;
          return false;
        }
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
