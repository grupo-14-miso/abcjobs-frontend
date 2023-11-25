import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterviewPreCandidate } from '../model/interview-pre-candidate';
import { Observable, catchError, throwError } from 'rxjs';
import { Interview } from '../model/interview';
import { Candidate } from '../../search-engine/model/candidate';
import { SelectCandidate } from '../model/select-candidate';

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

  getCandidatesByOffer(offer_id: number): Observable<SelectCandidate[]> {
    return this.http.get<SelectCandidate[]>(this.apiUrl+"/offer/"+offer_id+"/pre").pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  createInterview(interview: any): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, interview).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getInterviewsByCompany(company_id: number): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.apiUrl+"?company="+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getInterviewsByCandidate(candidate_id: number): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.apiUrl+"?candidate="+candidate_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

}
