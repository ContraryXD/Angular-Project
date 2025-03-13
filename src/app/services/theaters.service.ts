import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {
  private apiUrl = 'http://localhost:3000/Theaters';

  constructor(private http: HttpClient) { }

  getTheaters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
