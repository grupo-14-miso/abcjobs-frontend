import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private apiKey: string = environment.githubApiKey;
  private baseUrl: string = environment.baseUrlTranslate;

constructor(private http: HttpClient) { }

translateText(text: string, selectedLanguage: string): Observable<string> {
  const apiUrl = `${this.baseUrl}?key=${this.apiKey}`;
  const payload = {
    q: text,
    target: selectedLanguage,
  };

  return this.http.post(apiUrl, payload).pipe(map((response: any) => response.data.translations[0].translatedText));
}


}
