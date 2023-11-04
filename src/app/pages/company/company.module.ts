import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './service/company.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CompanyService],
})
export class CompanyModule { }
