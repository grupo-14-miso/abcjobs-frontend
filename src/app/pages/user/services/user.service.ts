import { Injectable } from '@angular/core';
import { Profile } from '../../search-engine/model/profile';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchParams } from '../../search-engine/model/search';
import { Candidate, Language } from '../../search-engine/model/candidate';
import { Academic } from '../model/academic';
import { WorkExperience } from '../model/work-experience';
import { Idiomas } from '../model/idioms';
import { CandidateReady } from '../model/candidate-ready';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.baseUrl + 'users';
  private apiUrlGet: string = environment.baseUrl + 'users-get';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrlGet+"/profiles").pipe(
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
    return this.http.get<Candidate[]>(this.apiUrlGet, { params: httpParams }).pipe(
      catchError(err => throwError(() => new Error('Error en el servicio de búsqueda')))
    )
  }

  getUserByKey(user_key: number): Observable<Candidate> {
    return this.http.get<Candidate>(this.apiUrlGet+"/"+user_key).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  updateUserPersonal(candidate: Candidate): Observable<Notification> {
    return this.http.put<Notification>(this.apiUrl+"/personal/update", candidate).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  updateAcademic(academic: Academic): Observable<Notification> {
    return this.http.put<Notification>(this.apiUrl+"/education/update", academic).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  updateExperience(workExperience: WorkExperience): Observable<Notification> {
    return this.http.put<Notification>(this.apiUrl+"/experiencia/update", workExperience).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  updateLanguage(idioms: Idiomas): Observable<Notification> {
    return this.http.put<Notification>(this.apiUrl+"/idiomas/update", idioms).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getUserForTeam(offer_key: number): Observable<CandidateReady[]> {
    return this.http.get<CandidateReady[]>(this.apiUrlGet+"/ready/"+offer_key).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }


}
