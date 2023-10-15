import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/components/header/header.component';
import { MainComponent } from './template/components/main/main.component';
import { FooterComponent } from './template/components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TemplateComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TemplateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoreModule { }
