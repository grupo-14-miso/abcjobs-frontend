import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PreloaderService } from '../services/preloader.service';
@Directive({
  selector: '[appPreloader]'
})
export class PreloaderDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private preloaderService: PreloaderService
  ) {
    this.preloaderService.isLoading$.subscribe((isLoading) => {
      console.log(isLoading)
      if (isLoading) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

}
