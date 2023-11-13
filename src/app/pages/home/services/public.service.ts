import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../user/model/user';
import { Observable, catchError, throwError } from 'rxjs';
import { Login } from '../model/login';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private apiUrl: string = environment.baseUrl + 'public';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+'/register', user).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  login(login: Login): Observable<Token> {
    return this.http.post<Token>(this.apiUrl+'/login', login).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }
}
