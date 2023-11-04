import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterviewPreCandidate } from '../model/interview-pre-candidate';
import { Observable, catchError, throwError } from 'rxjs';
import { Interview } from '../model/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private apiUrl: string = environment.baseUrl + 'interviews';


  constructor(private http: HttpClient) { }

  getInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  savePreCandidate(preCandidate: InterviewPreCandidate): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+'/pre-candidate', preCandidate).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

}
