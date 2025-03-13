import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/Users';
  private adminsUrl = 'http://localhost:3000/Admins';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  getCustomer(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.usersUrl}?Email=${email}&Password=${password}`).pipe(
      map(users => users.length ? users[0] : null)
    );
  }

  getAdmin(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.adminsUrl}?Email=${email}&Password=${password}`).pipe(
      map(admins => admins.length ? admins[0] : null)
    );
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.usersUrl, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.usersUrl}/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.usersUrl}/${userId}`);
  }
}
