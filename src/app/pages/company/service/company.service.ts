import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';
import { Observable, catchError, throwError } from 'rxjs';
import { Offer } from '../model/offer';
import { OfferCreate } from '../model/offer-create';
import { Member } from '../model/member';
import { MemberTeam } from '../model/member-team';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl: string = environment.baseUrl + 'companies';
  private apiUrlGet: string = environment.baseUrl + 'companies-get';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrlGet).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getOffers(company_id: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrlGet+"/offer/"+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  saveOffer(offer: OfferCreate): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+"/offer", offer).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getOfferById(offer_id: number): Observable<Offer> {
    return this.http.get<Offer>(this.apiUrlGet+"/offerById/"+offer_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getTeam(offer_id: number): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrlGet+"/equipo/"+offer_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  saveMemberTeam(memberTeam: MemberTeam): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+"/equipo", memberTeam).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }


}
