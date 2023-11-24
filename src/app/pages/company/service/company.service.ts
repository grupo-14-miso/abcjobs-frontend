import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';
import { Observable, catchError, throwError } from 'rxjs';
import { Offer } from '../model/offer';
import { OfferCreate } from '../model/offer-create';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl: string = environment.baseUrl + 'companies';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getOffers(company_id: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl+"/offer/"+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  saveOffer(offer: OfferCreate): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+"/offer", offer).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }


}
