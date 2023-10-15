import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.baseUrl + 'users/profiles';

constructor(private http: HttpClient) { }
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }
}
