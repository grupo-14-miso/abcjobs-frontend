import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Observable, of, switchMap} from 'rxjs';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService,
    private languageService: LanguageService
    ) {}

  transform(text: string): Observable<string> {
    return this.languageService.selectedLanguage$.pipe(
      switchMap((targetLanguage) =>
        this.translationService.translateText(text, targetLanguage)
      )
    );
  }

}
