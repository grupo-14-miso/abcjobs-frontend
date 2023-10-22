import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Assignment, Question } from '../model/assignment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

private apiUrl: string = environment.baseUrl + 'assignments';

constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }
  saveQuestion(question_id: number, question: Question): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+'/'+question_id, question).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  finishTest(question_id: number): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+'/questionnaire/'+question_id, null).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

}
