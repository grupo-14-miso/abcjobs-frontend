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
private apiUrlGet: string = environment.baseUrl + 'assignments-get';

constructor(private http: HttpClient) { }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrlGet).pipe(
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

  getAssignmentsCandidate(candidate_id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrlGet+"/candidate/"+candidate_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getAssignmentsType(type: string): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrlGet+"?type="+type).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  saveAssignmentUser(assignment_id: number, candidate_id: number): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+'/candidate/'+assignment_id+'/'+candidate_id, null).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getAssignmentsCompany(company_id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrlGet+"/company/"+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

}
