import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchParams } from '../model/search';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.baseUrl + 'users';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {

    return this.http.get<Profile[]>(this.apiUrl+"/profiles").pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  search(params: SearchParams): Observable<Candidate[]> {
    let httpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      const value = params[key];
      if (Array.isArray(value) && value.length > 0) {
        value.forEach(item => {
          httpParams = httpParams.append(key, item);
        });
      }
    });

    return this.http.get<Candidate[]>(this.apiUrl, { params: httpParams }).pipe(
      catchError(err => throwError(() => new Error('Error en el servicio de búsqueda')))
    )
  }


}
